import { useState, useEffect } from "react";
import AdminLayout from "@/components/AdminLayout";
import { useRouter } from "next/router";

export default function ProductAddPage() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    categoryId: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  // Fetch kategori dinamis
  useEffect(() => {
    fetch("/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  // Image preview
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      setErrMsg("Ukuran gambar maksimal 10MB.");
      return;
    }
    setForm(f => ({ ...f, image: file }));
    setImagePreview(file ? URL.createObjectURL(file) : null);
    setErrMsg("");
  };

  // Submit
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.price || !form.stock || !form.categoryId || !form.image) {
      setErrMsg("Semua field wajib diisi!");
      return;
    }
    setLoading(true);
    // 1. Upload gambar ke Cloudinary
    const imgForm = new FormData();
    imgForm.append("file", form.image);
    const imgRes = await fetch("/api/upload", { method: "POST", body: imgForm });
    const imgData = await imgRes.json();
    if (!imgData.url) {
      setErrMsg("Upload gambar gagal!");
      setLoading(false);
      return;
    }
    // 2. Kirim data produk ke API
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        price: form.price,
        stock: form.stock,
        description: form.description,
        imageUrl: imgData.url,
        categoryId: form.categoryId,
      }),
    });
    if (res.ok) {
      router.push("/admin-panel/products");
    } else {
      setErrMsg("Gagal tambah produk!");
      setLoading(false);
    }
  }

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Tambah Produk</h1>
      <form onSubmit={handleSubmit} className="max-w-lg space-y-4 bg-white rounded shadow p-6">
        <div>
          <label className="font-semibold">Nama Produk</label>
          <input className="w-full border rounded p-2 mt-1" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
        </div>
        <div>
          <label className="font-semibold">Harga (Rp)</label>
          <input type="number" className="w-full border rounded p-2 mt-1" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} />
        </div>
        <div>
          <label className="font-semibold">Stok</label>
          <input type="number" className="w-full border rounded p-2 mt-1" value={form.stock} onChange={e => setForm(f => ({ ...f, stock: e.target.value }))} />
        </div>
        <div>
          <label className="font-semibold">Kategori</label>
          <select className="w-full border rounded p-2 mt-1" value={form.categoryId} onChange={e => setForm(f => ({ ...f, categoryId: e.target.value }))}>
            <option value="">-- Pilih Kategori --</option>
            {categories.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-semibold">Deskripsi</label>
          <textarea className="w-full border rounded p-2 mt-1" rows={3} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
        </div>
        <div>
          <label className="font-semibold">Gambar Produk</label>
          <input type="file" accept="image/*" onChange={handleImage} className="w-full mt-1" />
          {imagePreview && <img src={imagePreview} alt="Preview" className="h-28 mt-2 object-cover rounded" />}
        </div>
        {errMsg && <div className="text-red-600">{errMsg}</div>}
        <button type="submit" disabled={loading} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-bold">
          {loading ? "Menyimpan..." : "Simpan"}
        </button>
      </form>
    </AdminLayout>
  );
}
