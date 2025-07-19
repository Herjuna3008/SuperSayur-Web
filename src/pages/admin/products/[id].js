import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

// Dummy produk, di production fetch dari Supabase pakai id
const dummyProducts = [
  {
    id: 1,
    name: "Wortel Segar 1kg",
    price: 20000,
    stock: 12,
    category: "sayur",
    description: "Wortel pilihan, segar setiap hari.",
    image_url: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Daging Sapi Premium 1kg",
    price: 110000,
    stock: 5,
    category: "daging",
    description: "Daging sapi segar dan berkualitas.",
    image_url: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
  }
];

export default function AdminEditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    image_url: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Simulasi fetch produk
  useEffect(() => {
    if (id) {
      const found = dummyProducts.find((p) => String(p.id) === String(id));
      if (found) setForm(found);
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Dummy update, ganti dengan Supabase update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (!form.name || !form.price || !form.stock) {
      setError("Nama, harga, dan stok wajib diisi.");
      setLoading(false);
      return;
    }
    setTimeout(() => {
      setLoading(false);
      router.push("/admin/product");
    }, 900);
  };

  return (
    <>
      <Head>
        <title>Edit Produk | PasarSegar Admin</title>
      </Head>
      <main className="min-h-screen bg-green-50 flex items-center justify-center py-12 animate-fadeIn">
        <form
          onSubmit={handleSubmit}
          className="bg-white max-w-lg w-full rounded-2xl shadow-lg px-8 py-10 flex flex-col gap-5"
        >
          <h1 className="text-2xl font-bold text-green-700 mb-2 text-center">
            Edit Produk
          </h1>
          <input
            name="name"
            placeholder="Nama Produk"
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            value={form.name}
            onChange={handleChange}
            required
          />
          <div className="flex gap-3">
            <input
              name="price"
              type="number"
              min={0}
              placeholder="Harga (Rp)"
              className="border border-gray-300 px-4 py-3 rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              value={form.price}
              onChange={handleChange}
              required
            />
            <input
              name="stock"
              type="number"
              min={0}
              placeholder="Stok"
              className="border border-gray-300 px-4 py-3 rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              value={form.stock}
              onChange={handleChange}
              required
            />
          </div>
          <input
            name="category"
            placeholder="Kategori (sayur/daging)"
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            value={form.category}
            onChange={handleChange}
          />
          <input
            name="image_url"
            placeholder="URL Gambar Produk"
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            value={form.image_url}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Deskripsi Produk"
            rows={2}
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            value={form.description}
            onChange={handleChange}
          />
          {error && (
            <div className="text-red-600 text-center text-sm -mt-2">{error}</div>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`bg-green-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-green-700 hover:scale-105 transition-transform duration-150 ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
        </form>
      </main>
    </>
  );
}
