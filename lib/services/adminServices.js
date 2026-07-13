import { pool } from "../server/db";

export async function getAdminByEmail(email) {
    try {
        console.log(`🔵 [SQL] Fetching admin by email: ${email}...`)

        const [rows] = await pool.execute(
            'SELECT * FROM admins WHERE email = ?',
            [email]
        );

        return rows[0] ?? null;
    } catch (error) {
        console.error("❌ [SQL Error] getAdminByEmail:", error.message);
        throw new Error("Failed to fetch admin");
    }
}

export async function createAdmin({ name, email, passwordHash }) {
    try {
        console.log(`🔵 [SQL] Creating admin: ${name} (${email})...`)
        
        const [result] = await pool.execute(
            'INSERT INTO admins (name, email, password_hash) VALUES (?, ?, ?)',
            [name, email, passwordHash]
        );
        
        return result.insertId;
    } catch (error) {
        console.error("❌ [SQL Error] createAdmin:", error.message);
        throw new Error("Failed to create admin");
    }

}