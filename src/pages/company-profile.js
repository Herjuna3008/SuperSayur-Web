import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CompanyProfile() {
  return (
    <>
      <Head>
        <title>Company Profile | SuperSayur</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-white py-16 animate-fadeIn">
        <section className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">Company Profile</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <span className="font-semibold text-green-700">SuperSayur</span> adalah supplier bahan pangan segar dan berkualitas, melayani kebutuhan hotel, restoran, café, UMKM, hingga rumah tangga dengan pengiriman cepat dan harga kompetitif. 
          </p>
          <div className="space-y-5">
            <p>
              Berdiri sejak 2024, kami telah bekerja sama dengan para petani lokal dan distributor utama untuk memastikan seluruh produk kami selalu segar dan aman konsumsi. 
            </p>
            <p>
              Visi kami adalah menjadi solusi utama untuk kebutuhan bahan baku makanan dalam skala besar maupun retail, dengan pelayanan yang profesional dan ramah.
            </p>
            <p>
              <span className="font-semibold text-green-700">Nilai utama kami:</span>
              <ul className="list-disc pl-6 text-gray-700 mt-2">
                <li>Produk berkualitas, selalu segar</li>
                <li>Jangkauan pengiriman luas dan cepat</li>
                <li>Harga bersaing dan transparan</li>
                <li>Layanan pelanggan prioritas</li>
              </ul>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
