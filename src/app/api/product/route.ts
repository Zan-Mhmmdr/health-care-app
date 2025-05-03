import { NextRequest, NextResponse } from "next/server";

// export async function GET() {
//   const data = await fetch('https://api.vercel.app/blog')
//   const posts = await data.json()

//   return Response.json(posts)
// }

const data = [
    {
        id: 1,
        name: 'Iphone 13',
        price: 1000,
    },
    {
        id: 2,
        name: 'Iphone 12 pro max',
        price: 780,
    },
    {
        id: 3,
        name: 'Iphone 15 pro',
        price: 750,
    },
    {
        id: 4,
        name: 'Iphone 15 pro',
        price: 750,
    }
]

export function GET(nextRequest: NextRequest) {
    const { searchParams } = new URL(nextRequest.url)
    const id = searchParams.get('id')
    console.log(id)

    if (id) {
        const detailProduct = data.find((item) => item.id === Number(id))
        if (detailProduct) {
            return NextResponse.json(
                {
                    status: 200,
                    message: 'success',
                    detailProduct
                }
            )
        }

        return NextResponse.json({
            status: 404,
            messege: "success but here is no product with this id",
            message: 'Product not found'
        })
    }

    return NextResponse.json(
        {
            status: 200,
            message: 'success',
            data
        })
}