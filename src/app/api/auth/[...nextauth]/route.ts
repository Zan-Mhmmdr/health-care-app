import { login } from "@/lib/firebase/service";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        CredentialProvider({
            type: 'credentials',
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log("CREDENTIALS:", credentials);
                if (!credentials || !credentials.email || !credentials.password) {
                    throw new Error("Missing credentials");
                }

                const user: any = await login({ email: credentials.email });

                if (!user) return null;

                const passwordConfirm = await compare(credentials.password, user.password);
                if (!passwordConfirm) return null;

                return user;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile, user }: any) {
            if (account?.provider === 'credentials') {
                token.email = user.email
                token.name = user.name
                token.role = user.role
            }
            return token
        },
        async session({ session, token }: any) {
            if ('email' in token) {
                session.user.email = token.email
            }
            if ('fullname' in token) {
                session.user.fullname = token.fullname
            }
            if ('role' in token) {
                session.user.role = token.role
            }
            return session
        }
    },
    pages: {
        signIn: "/login",
    }
}

const handler = NextAuth(authOptions);

export {
    handler as GET, handler as POST
}