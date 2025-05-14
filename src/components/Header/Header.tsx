'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Header() {
    const { status }: { status: string } = useSession()

    return (
        <header className="w-full p-4 bg-card shadow-md">
            <div className="flex justify-between items-center">
                <div>
                    <Link href="/" className="text-2xl font-bold text-foreground">HealthCare</Link>
                    <Link href="/appointments" className="text-xl ml-10 text-foreground hover:text-blue-600 ">Appointments</Link>
                    <Link href="/dashboard" className="text-xl ml-10 text-foreground hover:text-blue-600 ">Dashboard</Link>
                    <Link href="/product" className="text-xl ml-10 text-foreground hover:text-blue-600 ">Products</Link>

                </div>
                <div className="space-x-4">
                    <Link href="/login">
                        {status === 'authenticated' ? (
                            <Button
                                variant="outline"
                                onClick={() => signOut()}
                            >Logout
                            </Button>
                        ) : (
                            <Button
                                variant="outline"
                                onClick={() => signIn('credentials')}
                            >Login
                            </Button>
                        )}
                    </Link>
                    <Link href="/register">
                        <Button variant="outline">Register</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
