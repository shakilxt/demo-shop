'use client';

import Link from "next/link";
import { Suspense } from "react";
import RegisteredNotice from "./registered-notice";
import { useActionState } from "react";
import { signupAdmin, loginAdmin } from "@/app/actions/admin/authActions";
import { FormError } from "./form-error";
import Input from "../../ui/input";
import SubmitButton from "../submit-button";

export default function AdminForm({ isLogin }) {

    const title = isLogin ? "Admin Login" : "Create Admin Account";
    const description = isLogin ? "Please enter your credentials to access the admin portal." : "Please fill in the form below to create a new admin account.";
    const pendingText = isLogin ? "Signing In..." : "Creating Account...";
    const actionText = isLogin ? "Sign In" : "Create Account";
    const buttonRoute = isLogin ? "/admin/signup" : "/admin/login";
    const underButtomText = isLogin ? "Don't have an account?" : "Already have an account?";

    const [state, formAction, isPending] = useActionState(
        isLogin ? loginAdmin : signupAdmin,
        { error: null }
    )

    return (
        <div className="flex-1 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-stone-200 p-8">

                <h1 className="text-2xl font-bold tracking-tight text-stone-900 mb-6 text-center">{title}</h1>
                <p className="text-stone-600 mb-6 text-center">{description}</p>

                <FormError message={state?.error} />

                <Suspense>
                    <RegisteredNotice />
                </Suspense>

                <form action={formAction} className="flex flex-col gap-4">

                    {!isLogin && (
                        <Input
                            label="Name"
                            name="name"
                            type="text"
                            required
                        />
                    )}

                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        required
                    />

                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        required
                    />

                    {!isLogin && (
                        <Input
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            required
                        />
                    )}

                    <SubmitButton pendingText={pendingText}>
                        {actionText}
                    </SubmitButton>
                    
                </form>

                <p className="mt-6 text-center text-stone-600">
                    {underButtomText}{" "}
                    <Link href={buttonRoute} replace className="text-stone-900 font-semibold hover:underline">
                        {isLogin ? "Sign up" : "Sign in"}
                    </Link>
                </p>

            </div>
        </div>
    )
}