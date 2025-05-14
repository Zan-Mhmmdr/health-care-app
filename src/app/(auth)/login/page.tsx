'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const LoginPage: React.FC = () => {

    const { push } = useRouter();
    // Handle login form submission
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await signIn('credentials', {
                redirect: false,
                email: e.target.email.value,
                password: e.target.password.value,
                callbackUrl: "/dashboard",
            })
            if (!res?.error) {
                push('/dashboard');
            } else {
                console.error('Login failed:', res.error);
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-96 p-6 bg-white rounded shadow">
                <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
                <form onSubmit={(e) => handleLogin(e)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign In
                        </button>
                        <a
                            href="#"
                            className="text-sm text-indigo-600 hover:text-indigo-500"
                        >
                            Forgot password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;