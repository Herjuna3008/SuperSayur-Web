import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import Link from "next/link";

export default function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch produk dari API
  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => { setProducts(data); setLoading(false); });
  }, []);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold">Daftar Produk</h1>
        <Link href="/admin-panel/products/new" className="px-4 py-2 bg-green-600 rounded text-white font-bold hover:bg-green-700 transition">Tambah Produk</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border bg-white rounded shadow">
            <thead>
              <tr className="bg-green-100">
                <th className="p-2">Gambar</th>
                <th className="p-2">Nama</th>
                <th className="p-2">Kategori</th>
                <th className="p-2">Harga</th>
                <th className="p-2">Stok</th>
                <th className="p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id} className="border-t hover:bg-green-50">
                  <td className="p-2">
                    <img src={p.imageUrl} alt={p.name} className="w-14 h-14 object-cover rounded shadow" />
                  </td>
                  <td className="p-2">{p.name}</td>
                  <td className="p-2">{p.category?.name || '-'}</td>
                  <td className="p-2">Rp {Number(p.price).toLocaleString("id-ID")}</td>
                  <td className="p-2">{p.stock}</td>
                  <td className="p-2 space-x-2">
                    <Link href={`/admin-panel/products/${p.id}`} className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</Link>
                    {/* Tombol hapus */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}
