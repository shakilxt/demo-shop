import AdminForm from "@/components/admin/auth/form";

export default function SignupPage() {

    return (
        <div className="flex-1 flex items-center justify-center p-6">

            <AdminForm isLogin={false} />

        </div>
    );
}