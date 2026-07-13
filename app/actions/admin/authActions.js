'use server';

import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { createSession, deleteSession } from '@/lib/auth/adminSession';
import { createAdmin, getAdminByEmail } from '@/lib/services/adminServices';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function signupAdmin(prevState, formData) {

    const name = formData.get('name')?.trim()
    const email = formData.get('email')?.trim().toLowerCase()
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (!name || !email || !password) return { error: 'All fields are required' };
    if (!EMAIL_REGEX.test(email)) return { error: 'Invalid email format' };
    if (password.length < 8) return { error: 'Password must be at least 8 characters long' };
    if (password !== confirmPassword) return { error: 'Passwords do not match' };

    try {
        const existingAdmin = await getAdminByEmail(email);
        if (existingAdmin) return { error: 'An account with this email already exists' };

        const passwordHash = await bcrypt.hash(password, 12);
        const adminId = await createAdmin({ name, email, passwordHash });

        if (!adminId) return { error: 'Failed to create admin account' };
    } catch (error) {
        console.error('Signup Error:', error);
        return { error: 'Could not create admin account' };
    }

    redirect('/admin/login?registered=true');
}

export async function loginAdmin(prevState, formData) {
    const email = formData.get('email')?.trim().toLowerCase()
    const password = formData.get('password');

    if (!email || !password) return { error: 'All fields are required' };

    try {
        const admin = await getAdminByEmail(email);
        if (!admin) return { error: 'Invalid email or password' };

        const isValid = await bcrypt.compare(password, admin.password_hash);
        if (!isValid) return { error: 'Invalid email or password' };

        await createSession(admin);

        console.log(`✅ Admin logged in: ${admin.email}`);
    } catch (error) {
        console.error('Login Error:', error);
        return { error: 'Could not log in. Please try again.' };
    }

    redirect('/admin/dashboard');
}

export async function logoutAdmin() {
    await deleteSession();
    redirect('/admin/login');
}