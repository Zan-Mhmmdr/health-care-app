import getData from "@/services/products"

const DetailProductPage = async (props: any) => {
    const { params } = props
    const product = await getData("http://localhost:3000/api/product/?id=" + params.id)
    console.log(product)


    return (
        <>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg shadow-lg">
                <img
                    className="w-full object-fit aspect-square col-span-2"
                    src={product.detailProduct.image}
                    width={400}
                    height={500}
                    alt=""
                />
                <div className="bg-white p-4 px-6">
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">{product.detailProduct.name}</h3>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">${product.detailProduct.price}</span>
                </div>
            </div>
        </>



    )
}

export default DetailProductPage