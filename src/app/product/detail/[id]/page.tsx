import getData from "@/services/products"

const DetailProductPage = async (props: any) => {
    const { params } = props
<<<<<<< HEAD
    const product = await getData("http://localhost:3000/api/product/?id=" + params.id)
=======
    const product = await getData("http://localhost:3000/api/product?id=" + params.id)
>>>>>>> c70cb1a (fix: page detail product)
    console.log(product)


    return (
<<<<<<< HEAD
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


=======
        <div>
            <div className="container mx-auto my-10 ">
                <div className="w-1/4 mx-auto border border-gray-700">
                    <img className="w-full object-fit aspect-square col-span-2" src={product.detailProduct.image} width={400} height={500} alt="product image" />
                    <div className="bg-white p-4 px-6">
                        <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">{product.detailProduct.name}</h3>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">${product.detailProduct.price}</span>
                    </div>
                </div>
            </div>
        </div>
>>>>>>> c70cb1a (fix: page detail product)

    )
}

export default DetailProductPage