import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState({ name: "", category: "", price: "", image_url: "", description: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // Redirect to login if not authenticated
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push("/admin/login");
      }
    });
    // Fetch product data when id is available
    if (id) {
      supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single()
        .then(({ data, error }) => {
          if (error) {
            console.error(error);
          } else if (data) {
            setProduct({
              name: data.name || "",
              category: data.category || "",
              price: data.price || "",
              image_url: data.image_url || "",
              description: data.description || ""
            });
          }
          setLoading(false);
        });
    }
  }, [id, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase
      .from("products")
      .update({
        name: product.name,
        category: product.category,
        price: product.price,
        image_url: product.image_url,
        description: product.description
      })
      .eq("id", id);
    setSaving(false);
    if (error) {
      alert("Gagal menyimpan perubahan: " + error.message);
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
      <h1 className="text-xl font-bold mb-4">Edit Produk</h1>
      {loading ? (
        <p>Memuat...</p>
      ) : (
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
            {saving ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
        </form>
      )}
    </div>
  );
}
