'use client';

import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const LoginPage: React.FC = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { push } = useRouter();
    const searchParams = useSearchParams();

    const rawCallback = searchParams.get('callbackUrl');
    const callbackUrl = rawCallback ? decodeURIComponent(rawCallback) : '/';

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);
        try {
            const res = await signIn('credentials', {
                redirect: false,
                email: e.currentTarget.email.value,
                password: e.currentTarget.password.value,
                callbackUrl,
            });

            if (!res?.error) {
                e.currentTarget.reset();
                push(callbackUrl);
            } else {
                console.error('Login failed:', res.error);
                if (res.status === 401) {
                    setError('Invalid email or password');
                }
            }
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen flex-col">
            {error && <span className="mb-3 text-red-600 font-bold">{error}</span>}
            <div className="w-96 p-6 bg-white rounded shadow">
                <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    {/* Email input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input type="email" id="email" name="email" className="p-2 mt-1 block w-full rounded-md border-gray-300" />
                    </div>

                    {/* Password input */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input type="password" id="password" name="password" className="p-2 mt-1 block w-full rounded-md border-gray-300" />
                    </div>

                    {/* Submit */}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'}`}
                        >
                            {isLoading ? 'Loading...' : 'Sign In'}
                        </button>
                        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>

                    <hr className="my-4" />
                    <button
                        type="button"
                        onClick={() => signIn('google', { callbackUrl, redirect: false })}
                        className="w-full text-white bg-blue-700 mt-2 rounded p-1"
                    >
                        Login With Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
