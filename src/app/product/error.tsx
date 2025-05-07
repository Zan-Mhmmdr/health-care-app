'use client';

const Error = ({
    error,
    reset,
}: {
    error: Error & { digest?: string },
    reset: () => void
}) => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-red-500">Something went wrong!</h1>
            <button onClick={() => reset()} className="bg-black rounded m-5 p-2 cursor-pointer hover:bg-black/80 text-white">reset</button>
        </div>
    )
}

export default Error