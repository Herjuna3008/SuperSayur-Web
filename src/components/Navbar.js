import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const navLinkClasses = "text-gray-100 hover:text-white px-3 py-2";
  return (
    <nav className="bg-green-600 text-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">PasarSegar</span>
        </Link>
        <div className="space-x-4 text-sm">
          <Link href="/products" className={navLinkClasses}>Produk</Link>
          <Link href="/company-profile" className={navLinkClasses}>Company Profile</Link>
          <Link href="/jangkauan-pengiriman" className={navLinkClasses}>Jangkauan Pengiriman</Link>
          <Link href="/faq" className={navLinkClasses}>FAQ</Link>
          <Link href="/terms" className={navLinkClasses}>Terms &amp; Conditions</Link>
          <Link href="/contact" className={navLinkClasses}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
