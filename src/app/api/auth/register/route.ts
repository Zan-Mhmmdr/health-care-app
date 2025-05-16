import { register } from '@/lib/firebase/service';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
    try {
        const reqBody = await request.json();

        const { status, message } = await register(reqBody)

        return NextResponse.json({ status, message }, { status })
    } catch (error) {
        console.error("Error in register API:", error);
        return NextResponse.json({ status: 500, message: 'Internal Server Error' }, { status: 500 });
    }
}