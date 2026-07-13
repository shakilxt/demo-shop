import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { getSession } from "./adminSession";

export const verifyAdmin = cache(async () => {
    const session = await getSession();
    if (!session?.adminId) {
        redirect("/admin/login");
    }
    return { adminId: session.adminId, email: session.email, name: session.name };
});