'use client'

import { useSession } from "next-auth/react"

export default function Dashboard() {
    const { data: session, status }: { data: any, status: string } = useSession()
    console.log(session, status)

    return (
        <div className="flex flex-col gap-4 items-center justify-center  ">
            <h1 className="text-3xl font-bold" >Dashboard</h1>
            <p className="text-gray-900 text-xl ">Welcome to the admin dashboard!</p>
        </div>
    )
}
