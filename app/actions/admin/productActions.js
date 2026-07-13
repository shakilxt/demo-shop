'use server';

import { updateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { insertProduct, updateProduct, removeProduct } from '@/lib/services/productServices';
import { verifyAdmin } from '@/lib/auth/verifyAdmin';

export async function createProduct(prevState, formData) {

    await verifyAdmin()

    const name = formData.get('name')?.trim()
    const price = parseFloat(formData.get('price'))
    const imageUrl = formData.get('image_url')?.trim()
    const description = formData.get('description')?.trim()

    if (!name || !imageUrl || !description) {
        return { error: 'All fields are required.' };
    }

    if (isNaN(price) || price <= 0) {
        return { error: 'Price must be a positive number.' };
    }

    try {
        new URL(imageUrl);
    } catch (error) {
        return { error: 'Image URL must be a valid URL.' };
    }

    try {
        await insertProduct({ name, price, imageUrl, description });
    } catch (error) {
        console.error('Create Product Error:', error);
        return { error: 'Could not create product. Please try again.' };
    }

    updateTag('products');
    redirect('/admin/dashboard/products');
}

export async function editProduct(id, prevState, formData) {

    await verifyAdmin();

    const name = formData.get('name')?.trim();
    const price = parseFloat(formData.get('price'));
    const imageUrl = formData.get('image_url')?.trim();
    const description = formData.get('description')?.trim();

    if (!name || !imageUrl || !description) {
        return { error: 'All fields are required.' };
    }

    if (isNaN(price) || price <= 0) {
        return { error: 'Price must be a positive number.' };
    }

    try {
        new URL(imageUrl);
    } catch {
        return { error: 'Image URL must be a valid URL.' };
    }

    try {
        await updateProduct(id, { name, price, imageUrl, description });
    } catch (error) {
        console.error('Edit Product Error:', error);
        return { error: 'Could not update product. Please try again.' };
    }

    updateTag('products');
    updateTag(`product-${id}`);
    
    redirect('/admin/dashboard/products');
}

export async function deleteProduct(id, prevState, formData) {

    await verifyAdmin()

    try {
        await removeProduct(id);
    } catch (error) {
        console.error('Delete Product Error:', error);
        return { error: 'Failed to delete product. Please try again.' };
    }

    updateTag('products');
    redirect('/admin/dashboard/products');
}