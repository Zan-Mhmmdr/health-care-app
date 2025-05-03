'use client';

const AdminPage = () => {

    

    const revalidate = async () => {
        await fetch(`http://localhost:3000/api/revalidate?tag=products&secret_token=${process.env.SECRET_TOKEN}`, {
            method: 'POST'
        })
    }

    return (
        <div>
            <button onClick={() => revalidate()} className="m-6 p-2 bg-black hover:bg-black/80 cursor-pointer text-white rounded">Revalidate</button>
        </div>
    )

}

export default AdminPage    