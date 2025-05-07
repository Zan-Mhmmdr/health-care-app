<<<<<<< HEAD
<<<<<<< HEAD
const getData = async (url: string) => {
    try {
        // const res = await fetch(`http://localhost:3000/api/product`, {
        const res = await fetch(url, {
=======
const getData = async () => {
    try {
        // const res = await fetch(`http://localhost:3000/api/product`, {
        const res = await fetch(`https://fakestoreapi.com/products`, {
>>>>>>> 6f384f3 (refactor: add folder services)
=======
const getData = async (url: string) => {
    try {
        // const res = await fetch(`http://localhost:3000/api/product`, {
        const res = await fetch(url, {
>>>>>>> c70cb1a (fix: page detail product)
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