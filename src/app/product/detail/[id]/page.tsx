import getData from "@/services/products"
import Head from "next/head"

const DetailProductPage = async (props: any) => {
    const { params } = props
    const product = await getData("http://localhost:3000/api/product/?id=" + params.id)

    const { name, price, image, description } = product?.detailProduct || {}

    return (
        <>
            <Head>
                <title>{name} | MyStore</title>
                <meta name="description" content={`Detail produk ${name}, tersedia seharga $${price}.`} />
                <meta property="og:title" content={name} />
                <meta property="og:description" content={`Harga: $${price}.`} />
                <meta property="og:image" content={image} />
            </Head>

            <main className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
                <article className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
                    <img
                        src={image}
                        alt={`Gambar dari produk ${name}`}
                        className="w-full object-cover aspect-square rounded mb-4"
                        width={400}
                        height={400}
                    />
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
                        <p className="text-xl font-semibold text-green-600">${price}</p>
                        {description && <p className="text-gray-700">{description}</p>}
                    </div>
                </article>
            </main>
        </>
    )
}

export default DetailProductPage
