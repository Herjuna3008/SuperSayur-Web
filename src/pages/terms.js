import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Syarat & Ketentuan | PasarSegar</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-white py-16 animate-fadeIn">
        <section className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Syarat &amp; Ketentuan
          </h1>
          <div className="space-y-4 text-gray-700">
            <p>
              Dengan menggunakan layanan <span className="font-semibold text-green-700">SuperSayur</span>, Anda setuju dengan ketentuan berikut:
            </p>
            <ul className="list-decimal pl-6 space-y-1">
              <li>Harga produk dapat berubah sewaktu-waktu mengikuti harga pasar.</li>
              <li>Stok produk dapat berubah tanpa pemberitahuan sebelumnya.</li>
              <li>Proses pengiriman dilakukan pada hari kerja dan menyesuaikan lokasi pengiriman.</li>
              <li>Pembatalan pesanan dapat dilakukan sebelum proses pengiriman dimulai.</li>
              <li>Segala keluhan terkait produk atau layanan dapat disampaikan melalui kontak resmi kami.</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
