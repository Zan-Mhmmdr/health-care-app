'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Dashboard() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login")
        }
    }, [status, router])

    return (
        <div className="flex flex-col gap-4 items-center justify-center  ">
            <h1 className="text-3xl font-bold" >Dashboard</h1>
            <p className="text-gray-900 text-xl ">Welcome to the admin dashboard!</p>
        </div>
    )
}