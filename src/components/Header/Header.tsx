'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
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
                        <Button variant="outline">Login</Button>
                    </Link>
                    <Link href="/register">
                        <Button variant="outline">Register</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
