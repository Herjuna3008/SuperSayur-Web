import Link from "next/link";
import Head from "next/head";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan | SuperSayur</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-green-200 px-4 animate-fadeIn">
        <div className="text-[8rem] font-extrabold text-green-600 drop-shadow-lg leading-none select-none">
          404
        </div>
        <div className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4 text-center">
          Wah, halaman tidak ditemukan!
        </div>
        <p className="text-gray-500 text-center mb-6 max-w-lg">
          Sepertinya alamat yang kamu tuju salah atau sudah tidak tersedia.<br/>
          Silakan kembali ke halaman utama atau hubungi admin.
        </p>
        <Link href="/" className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-700 hover:scale-105 transition-transform">
          Kembali ke Beranda
        </Link>
        <img
          src="https://undraw.co/static/images/undraw_page_not_found_su7k.svg"
          alt="Ilustrasi 404"
          className="w-[300px] md:w-[400px] mt-10 opacity-90"
          draggable={false}
        />
      </main>
    </>
  );
}
