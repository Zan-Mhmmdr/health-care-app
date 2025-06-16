'use client';

import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const LoginPage: React.FC = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { push } = useRouter();
    const searchParams = useSearchParams()

    const rawCallback = searchParams.get('callbackUrl'); // Get the callback URL from the query string
    const callbackUrl = rawCallback ? decodeURIComponent(rawCallback) : '/';    // Handle login form submission

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        try {
            setIsLoading(true);
            const res = await signIn('credentials', {
                redirect: false,
                email: e.currentTarget.email.value,
                password: e.currentTarget.password.value,
                callbackUrl
            })
            if (!res?.error) {
                e.target.reset();
                setIsLoading(false);
                push(callbackUrl);
            } else {
                setIsLoading(false);
                console.error('Login failed:', res.error);
                if (res.status === 401) {
                    setError(' Invalid email or password');
                    setIsLoading(false);
                }
            }

        } catch (error) {
            setIsLoading(false);
            console.error('Login failed:', error);
        }
    }
    console.log(callbackUrl)

    return (
        <div className="flex items-center justify-center h-screen flex-col">
            {
                error !== '' && <span className='mb-3 text-red-600 font-bold'>{error}</span>
            }
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
                            name="email"
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
                            name="password"
                            className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer {isLoading ? 'opacity-50 cursor-not-allowed' : ''}"
                        >
                            {isLoading ? 'Loading...' : 'Sign In'}
                        </button>

                        <a
                            href="#"
                            className="text-sm text-indigo-600 hover:text-indigo-500"
                        >
                            Forgot password?
                        </a>
                    </div>
                    <hr />
                    <button
                        type='button'
                        onClick={() => signIn('google', { callbackUrl, redirect: false })}
                        className='w-full text-white bg-blue-700 mt-2 rounded p-1 cursor-pointer' >Login With Google</button>
                    <hr />
                </form>
            </div>
        </div>
    );
};

export default LoginPage;