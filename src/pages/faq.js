import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";

export default function FAQPage() {
  // Fetch from MySQL
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    fetch("/api/faqs").then(r => r.json()).then(setFaqs);
  }, []);
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
            {faqs.map((item, idx) => (
              <FAQItem key={idx} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
