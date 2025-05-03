'use client';

const AdminPage = () => {
    const revalidate = async () => {
        await fetch(`api/revalidate?tag=product`, {
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