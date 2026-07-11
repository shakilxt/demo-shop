import { cacheLife, cacheTag } from "next/cache";
import { pool } from "../server/db";

export async function getProducts() {
    'use cache';
    cacheLife('minutes')
    cacheTag('products')

    try {
        console.log('🔵 [SQL] Fetching all products...');
        
        const [rows] = await pool.execute(
            'SELECT id, name, price, image_url, description FROM products ORDER BY id ASC'
        );

        return rows;
    } catch (error) {
        console.error("❌ [SQL Error] getProducts:", error.message);
        throw new Error("Failed to fetch products");
    }
}


export async function getProductById(id) {
    'use cache';
    cacheLife('minutes')
    cacheTag(`product-${id}`)

    try {
        console.log(`🔵 [SQL] Fetching product ID: ${id}...`);
        
        const [rows] = await pool.execute(
            'SELECT id, name, price, image_url, description FROM products WHERE id = ?',
            [id]
        );

        if (rows.length === 0) {
            return null;
        }

        return rows[0];
    } catch (error) {
        console.error(`❌ [SQL Error] getProductById (${id}):`, error.message);
        throw new Error("Failed to fetch product");
    }
}