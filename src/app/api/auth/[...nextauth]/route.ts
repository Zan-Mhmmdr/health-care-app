import { login, loginWithGoogle } from "@/lib/firebase/service";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialProvider({
            type: 'credentials',
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log('Credentials:', credentials);
                if (!credentials?.email || !credentials?.password) {
                    console.log('No credentials provided');
                    return null;
                }

                const user = await login({ email: credentials.email });
                console.log('User:', user);

                if (!user) return null;

                // Bypass dulu untuk testing:
                const isValid = credentials.password === user.password;

                if (!isValid) {
                    console.log('Password not match');
                    return null;
                }

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                };
            }


        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || '',
        })
    ],
    callbacks: {
        async jwt({ token, account, profile, user }: any) {
            if (account?.provider === 'credentials') {
                token.email = user.email;
                token.name = user.name;
                token.role = user.role;
            }

            if (account?.provider === 'google') {
                const data = {
                    fullname: user.name,
                    email: user.email,
                    type: 'google',
                }

                await loginWithGoogle(data, (result: { status: boolean; data: any }) => {
                    if (result.status) {
                        token.email = result.data.email;
                        token.name = result.data.name;
                        token.role = result.data.role
                    }
                })
            }

            return token;
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