import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fadeIn">SuperSayur</h1>
          <p className="text-xl mb-6 animate-fadeIn">
            Supplier Sayur &amp; Daging Segar untuk Kebutuhan Anda
          </p>
          <Link 
            href="/products" 
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
          >
            Belanja Sekarang
          </Link>
        </div>
      </div>

      {/* Keunggulan (Advantages) Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">
          Mengapa Memilih Super Sayur?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4 bg-white rounded shadow animate-fadeIn">
            <h3 className="font-semibold text-lg mb-2">Produk Segar</h3>
            <p className="text-gray-700">
              Sayur dan daging dipasok setiap hari, menjamin kesegaran maksimal.
            </p>
          </div>
          <div className="p-4 bg-white rounded shadow animate-fadeIn">
            <h3 className="font-semibold text-lg mb-2">Pengiriman Cepat</h3>
            <p className="text-gray-700">
              Pengiriman cepat dan tepat waktu ke lokasi Anda setiap hari.
            </p>
          </div>
          <div className="p-4 bg-white rounded shadow animate-fadeIn">
            <h3 className="font-semibold text-lg mb-2">Harga Terjangkau</h3>
            <p className="text-gray-700">
              Harga bersaing langsung dari petani dan distributor terpercaya.
            </p>
          </div>
        </div>
      </div>

      {/* Preview Produk Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Produk Unggulan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example product cards (static examples; actual products are on the Products page) */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img 
              src="https://source.unsplash.com/400x300/?vegetable" 
              alt="Sayuran" 
              className="h-40 w-full object-cover" 
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Wortel Segar 1kg</h3>
              <p className="font-semibold text-green-700 mb-2">Rp 20.000</p>
              <a 
                href="https://wa.me/62881010075477?text=Saya ingin memesan Wortel Segar 1kg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Pesan via WhatsApp
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img 
              src="https://source.unsplash.com/400x300/?meat" 
              alt="Daging" 
              className="h-40 w-full object-cover" 
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Daging Sapi Premium 500gr</h3>
              <p className="font-semibold text-green-700 mb-2">Rp 75.000</p>
              <a 
                href="https://wa.me/62881010075477?text=Saya ingin memesan Daging Sapi Premium 500gr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Pesan via WhatsApp
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img 
              src="https://source.unsplash.com/400x300/?vegetables" 
              alt="Sayuran" 
              className="h-40 w-full object-cover" 
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Paket Sayur Campur</h3>
              <p className="font-semibold text-green-700 mb-2">Rp 50.000</p>
              <a 
                href="https://wa.me/62881010075477?text=Saya ingin memesan Paket Sayur Campur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Pesan via WhatsApp
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img 
              src="https://source.unsplash.com/400x300/?chicken" 
              alt="Daging Ayam" 
              className="h-40 w-full object-cover" 
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Daging Ayam Fillet 1kg</h3>
              <p className="font-semibold text-green-700 mb-2">Rp 40.000</p>
              <a 
                href="https://wa.me/62881010075477?text=Saya ingin memesan Daging Ayam Fillet 1kg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Pesan via WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/products" className="text-green-700 font-medium hover:underline">
            Lihat semua produk &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
