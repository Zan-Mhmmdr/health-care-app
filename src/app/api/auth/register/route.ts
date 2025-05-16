import { register } from '@/lib/firebase/service';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
    const req = await request.json();
    console.log(req);

    const res = await register(
        req,
        ({ status, message }: { status: number; message: string }) => {
            if (status) {
                return NextResponse.json({ status, message }, { status: 200 });
            } else {
                return NextResponse.json({ status, message }, { status: 400 });
            }
        }
    );
    console.log(res);
}