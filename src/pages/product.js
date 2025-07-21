import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function Products() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/api/categories").then(r => r.json()).then(setCategories);
  }, []);
  
  // Dummy produk, nanti tinggal fetch dari Supabase
  const [allProducts, setAllProducts] = useState([
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
    },
    {
      id: 3,
      name: "Bayam Segar",
      price: 8000,
      stock: 30,
      category: "sayur",
      description: "Bayam hidroponik segar untuk keluarga.",
      image_url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      name: "Daging Ayam Potong",
      price: 35000,
      stock: 20,
      category: "daging",
      description: "Ayam segar siap masak, tanpa suntik.",
      image_url: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80"
    }
  ]);

  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  // Filter produk by kategori dan pencarian
  const filteredProducts = allProducts.filter((prod) => {
    const matchCategory = category === "all" || prod.category === category;
    const matchSearch = prod.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <Head>
        <title>Daftar Produk | PasarSegar</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pb-20 animate-fadeIn">
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center">Daftar Produk</h1>
          {/* Filter & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setCategory(cat.key)}
                  className={`px-5 py-2 rounded-full font-medium border transition
                    ${category === cat.key
                      ? "bg-green-600 text-white shadow"
                      : "bg-white text-green-700 border-green-200 hover:bg-green-100"}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Cari produk…"
              className="border border-green-300 rounded-full px-5 py-2 w-full md:w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center text-gray-400 text-lg">Produk tidak ditemukan.</div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
