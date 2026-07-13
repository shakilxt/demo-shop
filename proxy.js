import { NextResponse } from 'next/server';
import { verifySessionToken } from './lib/auth/adminSession';

export default async function proxy(request) {
    const path = request.nextUrl.pathname;

    const isAuthRoute = path === '/admin/login' || path === '/admin/signup';
    const isProtectedRoute = path.startsWith('/admin') && !isAuthRoute;

    const token = request.cookies.get("admin_session")?.value;
    const session = token ? await verifySessionToken(token) : null;

    if (isProtectedRoute && !session) {
        return NextResponse.redirect(new URL('/admin/login', request.nextUrl));
    }

    if (isAuthRoute && session) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};