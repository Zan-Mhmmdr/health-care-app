'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useState } from 'react'

export default function RegisterPage() {
    const [loading, setLoading] = useState(false)

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // logic register API di sini
        setTimeout(() => setLoading(false), 1500)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="w-full max-w-md space-y-6 p-6 border rounded-xl shadow-lg bg-card">
                <div>
                    <h2 className="text-2xl font-semibold text-foreground">Create Account 👤</h2>
                    <p className="text-sm text-muted-foreground">Register to get started</p>
                </div>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" required />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? 'Registering...' : 'Register'}
                    </Button>
                </form>
                <p className="text-sm text-muted-foreground text-center">
                    Already have an account?{' '}
                    <Link href="/login" className="text-primary hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}
