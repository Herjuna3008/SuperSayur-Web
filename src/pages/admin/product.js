import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";

// Dummy produk admin (ganti fetch Supabase)
const initialProducts = [
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
  }
];

export default function AdminProduct() {
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Dummy delete
  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus produk ini?")) {
      setLoading(true);
      setTimeout(() => {
        setProducts(products.filter((p) => p.id !== id));
        setLoading(false);
      }, 600);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Produk | SuperSayur</title>
      </Head>
      <main className="min-h-screen bg-green-50 py-16 px-2 animate-fadeIn">
        <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
            <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-2">
              Kelola Produk
            </h1>
            <Link href="/admin/products/new" className="inline-block bg-green-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-green-700 hover:scale-105 transition-transform">
              + Tambah Produk
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2 min-w-[600px]">
              <thead>
                <tr>
                  <th className="px-3 py-2 bg-green-100 rounded-l-xl">Nama Produk</th>
                  <th className="px-3 py-2 bg-green-100">Harga</th>
                  <th className="px-3 py-2 bg-green-100">Stok</th>
                  <th className="px-3 py-2 bg-green-100">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-gray-400">
                      Tidak ada produk.
                    </td>
                  </tr>
                ) : (
                  products.map((prod) => (
                    <tr key={prod.id} className="shadow rounded-xl bg-white">
                      <td className="px-3 py-2 rounded-l-xl font-semibold flex items-center gap-2">
                        <img src={prod.image_url} alt={prod.name} className="w-10 h-10 object-cover rounded-xl shadow" />
                        <span>{prod.name}</span>
                      </td>
                      <td className="px-3 py-2 text-green-700 font-bold">
                        Rp {Number(prod.price).toLocaleString("id-ID")}
                      </td>
                      <td className="px-3 py-2">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${prod.stock === 0 ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                          {prod.stock === 0 ? "Habis" : prod.stock}
                        </span>
                      </td>
                      <td className="px-3 py-2 flex gap-2">
                        <Link
                          href={`/admin/products/${prod.id}`}
                          className="inline-block bg-yellow-400 text-white px-3 py-1 rounded-full font-semibold shadow hover:bg-yellow-500 hover:scale-105 transition-transform text-xs"
                        >
                          ✏️ Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(prod.id)}
                          disabled={loading}
                          className="bg-red-600 text-white px-3 py-1 rounded-full font-semibold shadow hover:bg-red-700 hover:scale-105 transition-transform text-xs"
                        >
                          🗑️ Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
