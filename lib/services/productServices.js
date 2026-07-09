import { createClient } from "@/lib/supabase/server";

export async function getProducts() {
    const supabase = await createClient();

    const { data: products, error } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: true });

    if (error) {
        console.error("Database error:", error);
        throw new Error("Failed to fetch products");
    }

    // await new Promise((resolve) => setTimeout(resolve, 1000));

    return products;
}

export async function getProductById(id) {
    const supabase = await createClient();

    const { data: product, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error("Database error:", error);
        throw new Error("Product not found");
    }

    // await new Promise((resolve) => setTimeout(resolve, 1000));


    return product;
}