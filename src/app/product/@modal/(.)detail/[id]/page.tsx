import Modal from "@/components/core/Modal"
import { getDataById } from "@/lib/firebase/service"

export default async function DetailProductPage(props: any) {
    const { params } = props
    const product = await getDataById(
        "products", params.id
    )
    console.log(product)


    return (
        <Modal>
            <img
                className="w-full object-fit aspect-square col-span-2"
                src={product.image}
                width={400}
                height={500}
                alt=""
            />
            <div className="bg-white p-4 px-6">
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">{product.name}</h3>
                <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price}</span>
            </div>
        </Modal>
    )
}
