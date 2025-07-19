import FAQItem from "@/components/FAQItem";

export default function FAQPage() {
  const faqs = [
    {
      question: "Bagaimana cara memesan produk di SuperSayur?",
      answer: "Anda dapat memesan melalui website dengan menekan tombol WhatsApp pada produk yang dipilih, atau langsung menghubungi kami via WhatsApp ke nomor kontak resmi PasarSegar."
    },
    {
      question: "Apakah produk yang dijual selalu segar?",
      answer: "Ya, kami memastikan semua sayur dan daging yang dijual di SuperSayur adalah produk segar yang dipasok di hari yang sama."
    },
    {
      question: "Kapan produk akan dikirim setelah pemesanan?",
      answer: "Produk akan dikirim pada hari yang sama untuk pemesanan sebelum jam 17:00. Pemesanan setelah jam tersebut akan dikirim keesokan harinya."
    },
    {
      question: "Apa saja metode pembayaran yang diterima?",
      answer: "Kami menerima pembayaran melalui transfer bank, e-wallet, dan pembayaran tunai (COD) saat pengiriman."
    },
    {
      question: "Bagaimana jika produk yang diterima tidak sesuai atau rusak?",
      answer: "Silakan hubungi layanan pelanggan kami melalui WhatsApp segera. Kami akan membantu mengganti produk atau memberikan solusi terbaik untuk Anda."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">FAQ</h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
