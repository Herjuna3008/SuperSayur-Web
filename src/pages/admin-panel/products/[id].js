import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AdminLayout from "@/components/AdminLayout";

export default function EditProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const [form, setForm] = useState({
    name: "", price: "", stock: "", description: "", categoryId: "", imageUrl: ""
  });
  const [categories, setCategories] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // Ambil kategori
  useEffect(() => {
    fetch("/api/categories")
      .then(res => res.json())
      .then(setCategories);
  }, []);

  // Ambil produk by id
  useEffect(() => {
    if (!id) return;
    fetch(`/api/products/${id}`)
      .then(r => r.json())
      .then(data => {
        setForm({
          name: data.name, price: data.price, stock: data.stock,
          description: data.description, categoryId: data.categoryId, imageUrl: data.imageUrl
        });
        setImagePreview(data.imageUrl);
      });
  }, [id]);

  // Handle ganti gambar
  const handleImage = e => {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      setErrMsg("Ukuran gambar maksimal 10MB.");
      return;
    }
    setImageFile(file);
    setImagePreview(file ? URL.createObjectURL(file) : form.imageUrl);
    setErrMsg("");
  };

  // Simpan edit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let imageUrl = form.imageUrl;
    // Jika upload gambar baru
    if (imageFile) {
      const imgForm = new FormData();
      imgForm.append("file", imageFile);
      const imgRes = await fetch("/api/upload", { method: "POST", body: imgForm });
      const imgData = await imgRes.json();
      if (!imgData.url) {
        setErrMsg("Upload gambar gagal!"); setLoading(false); return;
      }
      imageUrl = imgData.url;
    }
    // Simpan perubahan
    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
        categoryId: Number(form.categoryId),
        imageUrl,
      }),
    });
    if (res.ok) {
      setMsg("Produk berhasil disimpan!");
      setLoading(false);
      setTimeout(() => router.push("/admin-panel/products"), 1000);
    } else {
      setErrMsg("Gagal update produk!"); setLoading(false);
    }
  }

  // Hapus produk
  async function handleDelete() {
    if (!window.confirm("Yakin hapus produk ini?")) return;
    setLoading(true);
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    setLoading(false);
    router.push("/admin-panel/products");
  }

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Edit Produk</h1>
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
        {msg && <div className="text-green-600">{msg}</div>}
        {errMsg && <div className="text-red-600">{errMsg}</div>}
        <div className="flex gap-2 mt-4">
          <button type="submit" disabled={loading} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-bold">
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
          <button type="button" onClick={handleDelete} disabled={loading} className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-700 font-bold">
            {loading ? "Menghapus..." : "Hapus Produk"}
          </button>
        </div>
      </form>
    </AdminLayout>
  );
}
