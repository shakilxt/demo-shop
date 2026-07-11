import { cacheLife, cacheTag } from "next/cache";
import { pool } from "../server/db";

export async function getBrands() {
    'use cache';
    cacheLife('hours')
    cacheTag('brands')

    try {
        console.log('🔵 [SQL] Fetching all brands...');
        
        const [rows] = await pool.execute(
            'SELECT id, name, logo_url, slogan FROM brands ORDER BY name ASC'
        );
        
        return rows;
    } catch (error) {
        console.error("❌ [SQL Error] getBrands:", error.message);
        throw new Error("Failed to fetch brands");
    }
}