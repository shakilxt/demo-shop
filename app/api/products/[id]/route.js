import { NextResponse } from "next/server";
import { getProductById } from "@/lib/services/productServices";

export async function GET(request, { params }) {

    try {
        const { id } = await params;
        const product = await getProductById(id);

        if (!product) {
            return NextResponse.json(
                { success: false, error: 'Product not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, data: product },
            { status: 200 }
        )

    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}