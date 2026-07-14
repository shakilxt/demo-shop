import { NextResponse } from "next/server";
import { getBrands } from "@/lib/services/brandServices";

export async function GET() {

    try {
        const brands = await getBrands();

        return NextResponse.json(
            { success: true, data: brands },
            { status: 200 }
        )

    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}