'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const RegisterPage: React.FC = () => {
    const { push } = useRouter();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    // Handle registration form submission
    const handleRegister = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        setError("")
        const res = await fetch('/api/auth/register', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                name: (e.target as HTMLFormElement).name.value,
                email: (e.target as HTMLFormElement).email.value,
                password: (e.target as HTMLFormElement).password.value,
            }),
        });
        if (res.status === 200) {
            e.target.reset()
            setLoading(false)
            push('/login')
        } else {
            setError("Error: " + res.statusText)
            setLoading(false)
        }
        console.log(res)
    }

    return (
        <div className="flex justify-center items-center h-screen flex-col">
            {
                error !== '' && <span className='mb-3 text-red-600 font-bold'>{error}</span>
            }
            <div className="w-96 p-8 bg-white rounded shadow">
                <h2 className="text-2xl font-bold mb-8 text-center ">Register</h2>
                <form onSubmit={(e) => handleRegister(e)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md cursor-pointer"
                        >
                            {loading ? 'Registering...' : 'Register'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;