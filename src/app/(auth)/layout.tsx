import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Auth | Health Care',
    description: 'Login or register to continue',
}

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            {children}
        </div>
    )
}
