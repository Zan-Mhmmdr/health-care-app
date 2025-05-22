import { login } from "@/lib/firebase/service";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXT_SECRET_TOKEN,
    providers: [
        CredentialProvider({
            type: 'credentials',
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    if (!credentials?.email || !credentials?.password) {
                        return null;
                    }

                    const user = await login({ email: credentials.email });

                    if (!user) return null;

                    const passwordConfirm = await compare(credentials.password, user.password);
                    if (!passwordConfirm) return null;

                    return user;

                } catch (err) {
                    console.error("❌ ERROR in authorize():", err);
                    return null; // jangan throw, cukup return null biar tidak 500
                }
            }

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
            if ('name' in token) {
                session.user.name = token.name
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