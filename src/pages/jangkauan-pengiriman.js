import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function JangkauanPengiriman() {
  return (
    <>
      <Head>
        <title>Jangkauan Pengiriman | SuperSayur</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-white py-16 animate-fadeIn">
        <section className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Jangkauan Pengiriman
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            SuperSayur melayani pengiriman bahan pangan segar ke berbagai area strategis di Indonesia, terutama:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)</li>
            <li>Bandung & sekitarnya</li>
            <li>Semarang, Yogyakarta, dan Surabaya</li>
            <li>Kota besar lain di Pulau Jawa</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
