import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from Supabase
    const fetchProducts = async () => {
      setLoading(true);
      let { data, error } = await supabase.from("products").select("*");
      if (error) console.error(error);
      else setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  // Filter products based on search query and category selection
  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Extract unique categories from products for filter buttons
  const categories = ["All", ...new Set(products.map(p => p.category))];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Produk</h1>

      {/* Category Filter Buttons */}
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-4 py-2 rounded-full border ${
              categoryFilter === cat 
                ? "bg-green-600 text-white border-green-600" 
                : "border-gray-300 text-gray-700"
            } text-sm`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari produk..."
          className="w-full md:w-1/2 border rounded px-3 py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Products Grid / List */}
      {loading ? (
        <p>Sedang memuat produk...</p>
      ) : filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Tidak ada produk yang ditemukan.</p>
      )}
    </div>
  );
}
