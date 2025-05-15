import { register } from '@/lib/firebase/service';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
    const req = await request.json();
    console.log(req);

    const res = await register(req.email, req.name, req.password);
    console.log(res);

    return NextResponse.json({ status: res.status, message: res.message }, { status: res.statusCode });
}