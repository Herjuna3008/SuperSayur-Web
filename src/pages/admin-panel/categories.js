import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [newCat, setNewCat] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [loading, setLoading] = useState(false);

  // Ambil kategori
  const fetchCategories = () =>
    fetch("/api/categories")
      .then(r => r.json())
      .then(setCategories);

  useEffect(() => { fetchCategories(); }, []);

  // Tambah
  async function addCategory(e) {
    e.preventDefault();
    if (!newCat.trim()) return;
    setLoading(true);
    await fetch("/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newCat }),
    });
    setNewCat("");
    fetchCategories();
    setLoading(false);
  }

  // Edit
  async function saveEditCategory(id) {
    if (!editName.trim()) return;
    setLoading(true);
    await fetch(`/api/categories/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: editName }),
    });
    setEditId(null); setEditName("");
    fetchCategories();
    setLoading(false);
  }

  // Delete
  async function deleteCategory(id) {
    if (!window.confirm("Hapus kategori ini?")) return;
    setLoading(true);
    await fetch(`/api/categories/${id}`, { method: "DELETE" });
    fetchCategories();
    setLoading(false);
  }

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Kelola Kategori Produk</h1>
      <form onSubmit={addCategory} className="flex gap-2 mb-6">
        <input
          className="border rounded p-2 flex-1"
          value={newCat}
          onChange={e => setNewCat(e.target.value)}
          placeholder="Nama kategori baru"
          disabled={loading}
        />
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded" disabled={loading}>
          Tambah
        </button>
      </form>
      <div className="bg-white rounded shadow p-4">
        <table className="w-full">
          <thead>
            <tr className="bg-green-100">
              <th className="py-2 px-4">Nama</th>
              <th className="py-2 px-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(c => (
              <tr key={c.id} className="border-t">
                <td className="py-2 px-4">
                  {editId === c.id ? (
                    <input
                      className="border rounded p-1 w-full"
                      value={editName}
                      onChange={e => setEditName(e.target.value)}
                    />
                  ) : (
                    c.name
                  )}
                </td>
                <td className="py-2 px-4 space-x-2">
                  {editId === c.id ? (
                    <>
                      <button onClick={() => saveEditCategory(c.id)} className="px-2 py-1 bg-green-500 text-white rounded">Simpan</button>
                      <button onClick={() => { setEditId(null); setEditName(""); }} className="px-2 py-1 bg-gray-300 rounded">Batal</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => { setEditId(c.id); setEditName(c.name); }} className="px-2 py-1 bg-yellow-500 text-white rounded">Edit</button>
                      <button onClick={() => deleteCategory(c.id)} className="px-2 py-1 bg-red-500 text-white rounded">Hapus</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
