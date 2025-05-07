const getData = async (url: string) => {
    try {
        // const res = await fetch(`http://localhost:3000/api/product`, {
        const res = await fetch(url, {
            cache: "no-store",
            next: {
                tags: ["products"],
            },
        })
        return res.json()
    } catch (error) {
        console.log("Error fetching data:", error)
    }
}

export default getData