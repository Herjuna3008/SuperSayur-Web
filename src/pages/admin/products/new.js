import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";

export default function AddProduct() {
  const router = useRouter();
  const [product, setProduct] = useState({ name: "", category: "", price: "", image_url: "", description: "" });
  const [saving, setSaving] = useState(false);

  // Check authentication on client-side
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push("/admin/login");
      }
    });
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from("products").insert({
      name: product.name,
      category: product.category,
      price: product.price,
      image_url: product.image_url,
      description: product.description
    });
    setSaving(false);
    if (error) {
      alert("Gagal menambah produk: " + error.message);
    } else {
      router.push("/admin/products");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4">Tambah Produk</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Nama Produk</label>
          <input
            name="name"
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={product.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Kategori</label>
          <input
            name="category"
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={product.category}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Harga (Rp)</label>
          <input
            name="price"
            type="number"
            className="w-full border px-3 py-2 rounded"
            value={product.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            name="image_url"
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={product.image_url}
            onChange={handleInputChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Deskripsi</label>
          <textarea
            name="description"
            className="w-full border px-3 py-2 rounded"
            value={product.description}
            onChange={handleInputChange}
            rows="3"
          />
        </div>
        <button 
          type="submit" 
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" 
          disabled={saving}
        >
          {saving ? "Menambahkan..." : "Tambah Produk"}
        </button>
      </form>
    </div>
  );
}
