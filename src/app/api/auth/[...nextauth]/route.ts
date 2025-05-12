import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: "123123",
    providers: [
        CredentialProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
                async authorize(credentials) {
                    const { email, password } = credentials as {
                        email: string;
                        password: string;
                }
                if (email === "kurokawaakane22@gmail.com" && password === '123123') {
                    return {
                        id: 1,
                        name: "Kurokawa Akane",
                        email: "kurokawaakane22@gmail.com",
                        role: "admin",
                    }
                }
            }
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile, user }: any) {
            if (account?.providers === 'credentials') {
                token.email = user.email
                token.fullname = user.fullname
                token.role = user.role
            }
            return token
        }
    }
} 