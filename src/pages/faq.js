import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";

// Contoh data FAQ (nanti bisa fetch dari Supabase)
const FAQ_LIST = [
  {
    question: "Apakah pengiriman bisa ke seluruh Indonesia?",
    answer:
      "Saat ini pengiriman kami mencakup area Jabodetabek, Bandung, dan kota-kota besar di Pulau Jawa. Hubungi admin untuk info pengiriman luar pulau.",
  },
  {
    question: "Apakah harga bisa negosiasi untuk pembelian dalam jumlah besar?",
    answer:
      "Tentu! Untuk pemesanan dalam skala besar atau kebutuhan vendor, silakan hubungi kami langsung untuk penawaran harga khusus.",
  },
  {
    question: "Bagaimana cara pesan produk di website ini?",
    answer:
      "Pilih produk yang diinginkan, lalu klik tombol 'Pesan via WhatsApp'. Tim kami akan memproses pesanan Anda secepatnya.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ | SuperSayur</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-white py-16 animate-fadeIn">
        <section className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6 text-center">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h1>
          <div className="divide-y divide-gray-200">
            {FAQ_LIST.map((item, idx) => (
              <FAQItem key={idx} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
