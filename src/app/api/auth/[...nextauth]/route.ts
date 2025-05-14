import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: "123123",
    providers: [
        CredentialProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };

                if (
                    email === "kurokawaakane22@gmail.com" &&
                    password === "123123"
                ) {
                    return {
                        id: 1,
                        name: "Kurokawa Akane",
                        email: "kurokawaakane22@gmail.com",
                        role: "admin",
                    };
                }

                return null;
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