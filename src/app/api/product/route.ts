import { getData, getDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

// export async function GET() {
//   const data = await fetch('https://api.vercel.app/blog')
//   const posts = await data.json()

//   return Response.json(posts)
// }

// const data = [
//     {
//         id: 1,
//         name: 'iPhone 13',
//         price: 107,
//         image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRDcPkwEVaQgcZq88mPY9UmM6K8dBY0UJIDoI9x8fQaLmFmPeOQb_D44kxei82P3lfttrRduyzYsHKLePnh7qQ6sR8qHxLB3fZPkq_IKVWtvPxs-AiYRzP_',
//     },
//     {
//         id: 2,
//         name: 'iPhone 12 pro max',
//         price: 780,
//         image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQjLVl1MwhBaC7BGWtFmwmkAEJuNwNCi9oV50n0RVzIK8Jy35l4eYZUUJgPe3rxC5raVm0QqKfr7GhM65sd0xd-IjcNX3Ny8GuzU-P7zxLgDsXDrGUcRqYZMw"
//     },
//     {
//         id: 3,
//         name: 'iPhone 15 pro',
//         price: 750,
//         image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRShFkqz9f-Eslfp7v0uGmdcmdX7i04JKpuLox6EePLL-XtCkm9_2KMJRdD9XjYMY7Gx8eWcLMaLkQwCEzIYJLo16AcqASITnChoAyWM6rGjv2HtWEdnI3x"
//     },
//     {
//         id: 4,
//         name: "iPhone 16 128",
//         price: 100,
//         image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR5VTXkeFTD77PNct8aQuecznqVlKIsnuQMmK37ibNR5lSRAz27FaehifPLt56b22wfrvZruOQv87jz9LPph10g6gpNzKp_uY9q04dKN8K5AeQSIoi_VVo4Qg"
//     }
// ]

export async function GET(nextRequest: NextRequest) {
    const { searchParams } = new URL(nextRequest.url)
    const id = searchParams.get('id')
    console.log(id)

    if (id) {
        const detailProduct = await getDataById('products', id)
        console.log(detailProduct)
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

    const products = await getData('products')
    console.log(products)

    return NextResponse.json(
        {
            status: 200,
            message: 'success',
            data: products
        })
}