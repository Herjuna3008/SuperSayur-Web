import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/company-profile", label: "Company Profile" },
  { href: "/faq", label: "FAQ" },
  { href: "/jangkauan-pengiriman", label: "Jangkauan" },
  { href: "/product", label: "Produk" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-2 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-white whitespace-nowrap">
          SuperSayur
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-3 items-center flex-shrink-0">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-2 py-1 transition-all duration-150 font-medium whitespace-nowrap text-[15px]
                hover:text-green-200 focus:text-green-200
                before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0
                before:bg-green-200 before:transition-all before:duration-200
                hover:before:w-full focus:before:w-full
                before:rounded"
              style={{ overflow: 'hidden' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 px-3 py-2 rounded-full bg-white text-green-700 font-semibold shadow hover:bg-green-100 hover:scale-105 transition-transform text-[15px]"
          >
            WhatsApp
          </a>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-green-800 text-white shadow-lg animate-slideDown origin-top">
          <div className="flex flex-col gap-2 px-6 py-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 border-b border-green-700 hover:bg-green-600 rounded transition-all duration-150 hover:scale-[1.03]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 rounded-full bg-white text-green-700 font-semibold shadow hover:bg-green-100 hover:scale-105 transition-transform"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
