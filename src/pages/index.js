import Head from "next/head";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dummy produk untuk tampilan rekomendasi di home (ganti sesuai kebutuhan)
const recommendedProducts = [
  {
    id: 1,
    name: "Wortel Segar 1kg",
    price: 20000,
    stock: 12,
    description: "Wortel pilihan, segar setiap hari.",
    image_url: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Daging Sapi Premium 1kg",
    price: 110000,
    stock: 5,
    description: "Daging sapi segar dan berkualitas.",
    image_url: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Bayam Segar",
    price: 8000,
    stock: 30,
    description: "Bayam hidroponik segar untuk keluarga.",
    image_url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>SuperSayur - Supplier Sayur & Daging Segar</title>
      </Head>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-600 to-green-500 text-white py-20 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">SuperSayur</h1>
          <p className="text-xl md:text-2xl mb-6 font-medium max-w-2xl">
            Supplier Sayur & Daging Segar untuk Hotel, Restoran, dan UMKM. Pengiriman cepat dan harga bersahabat.
          </p>
          <Link
            href="/product"
            className="bg-white text-green-700 font-semibold px-7 py-3 rounded-full shadow hover:scale-105 hover:bg-green-100 transition-transform duration-300"
          >
            Belanja Sekarang
          </Link>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 text-center mb-10 animate-fadeIn">Mengapa Memilih SuperSayur?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center animate-fadeIn">
              <div className="text-4xl mb-3">🥦</div>
              <div className="font-bold mb-1">Produk Segar</div>
              <p className="text-gray-600 text-sm text-center">
                Semua produk dikirim dalam keadaan segar, langsung dari petani dan distributor terpercaya.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center animate-fadeIn delay-150">
              <div className="text-4xl mb-3">🚚</div>
              <div className="font-bold mb-1">Pengiriman Cepat</div>
              <p className="text-gray-600 text-sm text-center">
                Jangkauan pengiriman luas, selalu tepat waktu dan aman sampai tujuan.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center animate-fadeIn delay-300">
              <div className="text-4xl mb-3">💰</div>
              <div className="font-bold mb-1">Harga Terjangkau</div>
              <p className="text-gray-600 text-sm text-center">
                Harga kompetitif, cocok untuk kebutuhan rumah tangga, UMKM, maupun skala besar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rekomendasi Produk */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 text-center mb-10 animate-fadeIn">Produk Pilihan Kami</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link
              href="/product"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-green-700 hover:scale-105 transition-transform"
            >
              Lihat Semua Produk &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/*FAQ Section*/}
      <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 text-center mb-10 animate-fadeIn">Frequently Asked Questions</h2>
        <div className="text-center">Ada pertanyaan, kami punya jawabannya! Cari tahu lebih banyak tentang SuperSayur.</div>
        <div className="flex justify-center mt-10">
            <Link
              href="/faq"
              className="inline-block bg-gray-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-500 hover:scale-105 transition-transform"
            >
              Baca FAQ &rarr;
            </Link>
          </div>
      </div>
      </section>

      <Footer />
    </>
  );
}
