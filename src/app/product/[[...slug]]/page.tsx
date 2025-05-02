import { type FC } from "react";

interface Props {
    params: { slug?: string[] };
}

const getData = async () => {
    try {
        const res = await fetch(`https://localhost:3000/api/product`, {
            cache: "no-store"
        })
        console.log(res)
    } catch (error) {
        console.log("Error fetching data:", error)
    }
}

const ProductPage: FC<Props> = async ({ params }) => {
    const slug = params.slug || [];
    const product = await getData()
    console.log(product)

    return (
        <div>
            <h1>Product Page</h1>
            <p>Slug: {slug.join(" / ") || "No slug provided"}</p>
        </div>
    );
};

export default ProductPage;
