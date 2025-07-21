import Link from "next/link";
import { useRouter } from "next/router";

const nav = [
  { href: "/admin-panel", label: "Dashboard" },
  { href: "/admin-panel/products", label: "Produk" },
  { href: "/admin-panel/categories", label: "Kategori" },
  { href: "/admin-panel/faq", label: "FAQ" },
  { href: "/admin-panel/terms", label: "Terms" },
  { href: "/admin-panel/whatsapp", label: "WhatsApp" },
];

export default function AdminSidebar() {
  const router = useRouter();
  return (
    <aside className="min-h-screen w-56 bg-green-800 text-white px-4 py-6 flex flex-col shadow-md">
      <div className="text-2xl font-extrabold mb-10 tracking-wide">SuperSayur Admin</div>
      <nav className="flex flex-col gap-2">
        {nav.map(n => (
          <Link
            key={n.href}
            href={n.href}
            className={`rounded px-3 py-2 font-semibold hover:bg-green-700 transition ${
              router.pathname === n.href ? "bg-green-700" : ""
            }`}
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
