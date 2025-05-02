export const POST = async (request: Request) => {
    const req = await request.json()
    console.log('request', req)
    return new Response(JSON.stringify({ status: 200, message: 'success' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}