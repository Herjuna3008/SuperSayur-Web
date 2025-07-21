import AdminLayout from "@/components/AdminLayout";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) return { redirect: { destination: "/api/auth/signin", permanent: false } };
  return { props: { user: session.user } };
}

export default function AdminDashboard({ user }) {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>
      <div className="bg-white rounded shadow p-6">
        <p className="mb-3">Selamat datang, <b>{user.email}</b> 👋</p>
        <p>Gunakan menu sidebar untuk mengelola produk, kategori, FAQ, terms, dan nomor WhatsApp.</p>
      </div>
    </AdminLayout>
  );
}
