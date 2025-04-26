'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
    return (
        <header className="w-full p-4 bg-card shadow-md">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-foreground">HealthCare</h1>
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
