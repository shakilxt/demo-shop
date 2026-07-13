import { Suspense } from "react";
import AdminForm from "@/components/admin/auth/form";
import RegisteredNotice from "@/components/admin/auth/registered-notice";

export default function LoginPage({ searchParams }) {

    return (
        <div className="flex-1 flex items-center justify-center p-6">

            <AdminForm isLogin={true} searchParams={searchParams} />

        </div>
    );
}