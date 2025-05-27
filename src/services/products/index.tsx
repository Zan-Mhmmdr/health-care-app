const getData = async (url: string) => {
    try {
        try {
            const res = await fetch(`https://fakestoreapi.com/products`, {

                cache: "no-store",
                next: {
                    tags: ["products"],
                },
            })
            return res.json()
        } catch (error) {
            console.log("Error fetching data:", error)
        }
    }}

export default getData