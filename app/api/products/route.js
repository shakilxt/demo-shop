import { NextResponse } from "next/server";
import { getProducts } from "@/lib/services/productServices";

export async function GET() {

    try {
        const products = await getProducts();
        
        return NextResponse.json(
            { success: true, data: products }, 
            { status: 200 }
        )
            
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Internal Server Error' }, 
            { status: 500 }
        );
    }
}