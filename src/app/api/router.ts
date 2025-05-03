import { NextResponse } from 'next/server'

// export const revalidate = 60

// export async function GET() {
//     const data = await fetch('https://api.vercel.app/blog')
//     const posts = await data.json()

//     return Response.json(posts)
// }

export function POST() {
    return NextResponse.json({ status: 200, message: 'success' })
}

