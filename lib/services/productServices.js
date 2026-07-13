import { cacheLife, cacheTag } from "next/cache";
import { pool } from "../server/db";

export async function insertProduct({ name, price, imageUrl, description }) {
    try {
        console.log(`🔵 [SQL] Inserting product: ${name}...`)

        const [result] = await pool.execute(
            'INSERT INTO products (name, price, image_url, description) VALUES (?, ?, ?, ?)',
            [name, price, imageUrl, description]
        );

        return result.insertId;
    } catch (error) {
        console.error("❌ [SQL Error] insertProduct:", error.message);
        throw new Error("Failed to insert product");
    }

}

export async function getProducts() {
    'use cache';
    cacheLife('minutes')
    cacheTag('products')

    try {
        console.log('🔵 [SQL] Fetching all products...');

        const [rows] = await pool.execute(
            'SELECT * FROM products ORDER BY created_at DESC LIMIT 24'
        );

        return rows;
    } catch (error) {
        console.error("❌ [SQL Error] getProducts:", error.message);
        throw new Error("Failed to fetch products");
    }
}

export async function getProductById(id) {
    'use cache';
    cacheLife({ stale: 30, revalidate: 60, expire: 3600 })
    cacheTag('products', `product-${id}`)       /// todo use products tag or not?

    try {
        console.log(`🔵 [SQL] Fetching product by ID: ${id}...`);

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

export async function getAllProductIds() {
    try {
        console.log('🔵 [SQL] Fetching all product IDs...');

        const [rows] = await pool.execute('SELECT id FROM products');
        return rows
    } catch (error) {
        console.error("❌ [SQL Error] getAllProductIds:", error.message);
        throw new Error("Failed to fetch product IDs");
    }
}

export async function updateProduct(id, { name, price, imageUrl, description }) {
    try {
        console.log(`🔵 [SQL] Updating product ID: ${id}...`);

        await pool.execute(
            'UPDATE products SET name = ?, price = ?, image_url = ?, description = ? WHERE id = ?',
            [name, price, imageUrl, description, id]
        );
    } catch (error) {
        console.error(`❌ [SQL Error] updateProduct (${id}):`, error.message);
        throw new Error("Failed to update product");
    }
}

export async function removeProduct(id) {
    try {
        console.log(`🔵 [SQL] Deleting product ID: ${id}...`);

        await pool.execute('DELETE FROM products WHERE id = ?', [id]);
    } catch (error) {
        console.error(`❌ [SQL Error] removeProduct (${id}):`, error.message);
        throw new Error("Failed to delete product");
    }
}