export default function ContactPage() {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
        <p className="mb-2">
          <strong>Alamat:</strong> Jl. Contoh Raya No. 123, Jakarta
        </p>
        <p className="mb-2">
          <strong>Telepon/WhatsApp:</strong>{" "}
          <a 
            href="https://wa.me/62881010075477" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-green-700 hover:underline"
          >
            +62 8810 1007 5477
          </a>
        </p>
        <p className="mb-6">
          <strong>Email:</strong>{" "}
          <a 
            href="mailto:cs@supersayur.co.id" 
            className="text-green-700 hover:underline"
          >
            cs@supersayur.co.id
          </a>
        </p>
        <p className="mb-4">
          Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami. Tim kami akan dengan senang hati membantu Anda.
        </p>
        <a 
          href="https://wa.me/62881010075477" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Hubungi via WhatsApp
        </a>
      </div>
    );
  }
  