import { Suspense } from "react";
import AdminSidebar from "@/components/admin/sidebar";
import AdminTopNav from "@/components/admin/top-nav";

export default async function DashboardLayout({ children }) {

    return (
        <div className="flex h-screen bg-stone-50 overflow-hidden font-sans">

            <AdminSidebar />

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

                <AdminTopNav />

                <main className="flex-1 overflow-y-auto p-6 md:p-8">
                    {children}
                </main>

            </div>

        </div>
    );
}