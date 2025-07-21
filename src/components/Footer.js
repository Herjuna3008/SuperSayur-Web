import { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const [wa, setWA] = useState("");
useEffect(() => {
  fetch("/api/whatsapp").then(r => r.json()).then(data => setWA(data.number || ""));
}, []);

  return (
    <footer className="bg-white border-t pt-10">
      {/* Atas */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
        {/* Kolom Links */}
        <div className="flex flex-1 flex-col md:flex-row gap-10 md:gap-20">
          <div>
            <div className="text-xs text-gray-400 font-bold mb-3 tracking-widest">ABOUT</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/company-profile" className="hover:text-green-700">Company Profile</Link></li>
              <li><Link href="/faq" className="hover:text-green-700">FAQ</Link></li>
              <li><Link href="/jangkauan-pengiriman" className="hover:text-green-700">Jangkauan Pengiriman</Link></li>
              <li><Link href="/terms" className="hover:text-green-700">Terms & Conditions</Link></li>
              <li><Link href="/contact" className="hover:text-green-700">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs text-gray-400 font-bold mb-3 tracking-widest">BUSINESS</div>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@pasarsegarsupplier.com" className="hover:text-green-700">Become a Partner</a></li>
              <li><Link href="/product" className="hover:text-green-700">Order in Bulk</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs text-gray-400 font-bold mb-3 tracking-widest">HELP</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-green-700">Help Center</Link></li>
              <li><Link href="/terms" className="hover:text-green-700">Terms & Conditions</Link></li>
              <li><Link href="/contact" className="hover:text-green-700">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs text-gray-400 font-bold mb-3 tracking-widest">FOLLOW US</div>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="w-6 h-6 text-blue-700 hover:text-green-900" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="w-6 h-6 text-pink-500 hover:text-pink-700" />
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="w-6 h-6 text-red-600 hover:text-red-700" />
              </a>
            </div>
          </div>
        </div>
        {/* Promo App */}
        <div className="flex-1 flex flex-col items-start md:items-end">
          <div className="text-2xl font-bold text-green-600 mb-1">Belanja Segar Makin Mudah!</div>
          <div className="text-gray-500 mb-4">Pesan sayur & daging dari mana saja, kapan saja.</div>
          <div className="flex gap-3">
          <a
            href={`https://wa.me/${wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-7 py-3 rounded-full font-semibold shadow hover:bg-green-700 hover:scale-105 transition-transform text-lg mt-6"
          >
            Hubungi via WhatsApp
          </a>
          </div>
        </div>
      </div>
      {/* Ilustrasi */}
      <div className="w-full flex justify-center mt-10">
        <img
          src="https://undraw.co/static/images/undraw_deliveries_2r4y.svg"
          alt="Ilustrasi pengantaran"
          className="w-full md:w-[800px] h-36 object-contain object-bottom select-none pointer-events-none"
          draggable={false}
        />
      </div>
      {/* Copyright */}
      <div className="bg-gray-500 text-gray-100 text-center text-sm py-4 mt-8">
        &copy; 2025 SuperSayur. All rights reserved.
        <div className="text-xs text-green-100 opacity-80">
          Developed by SuperSayur Team
        </div>
      </div>
    </footer>
  );
}
