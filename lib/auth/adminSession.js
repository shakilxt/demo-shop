import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const encodedKey = new TextEncoder().encode(process.env.AUTH_SECRET);
const SESSION_DURATION_SECONDS = 60 * 60 * 24 * 1; // 1 day

export async function createSession(admin) {
    const expiresAt = new Date(Date.now() + SESSION_DURATION_SECONDS * 1000);

    const token = await new SignJWT({
        adminId: admin.id,
        email: admin.email,
        name: admin.name,
    })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(expiresAt)
        .sign(encodedKey);

    const cookieStore = await cookies();
    cookieStore.set("admin_session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: expiresAt,
        path: "/",
    });
}

export async function deleteSession() {
    const cookieStore = await cookies();
    cookieStore.delete("admin_session");
}

export async function verifySessionToken(token) {
    try {
        const { payload } = await jwtVerify(token, encodedKey, { algorithms: ["HS256"] });
        return payload;
    } catch {
        return null;
    }
}

export async function getSession() {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_session")?.value;
    if (!token) return null;
    return verifySessionToken(token);
}