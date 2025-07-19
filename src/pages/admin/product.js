import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function AdminProducts() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Check authentication on mount
  useEffect(() => {
    const sessionCheck = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
      }
    };
    sessionCheck();
  }, [router]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("id", { ascending: true });
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Hapus produk ini?")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      alert("Gagal menghapus produk: " + error.message);
    } else {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">Admin - Kelola Produk</h1>
        <button 
          onClick={handleLogout} 
          className="text-sm text-white bg-gray-600 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
      {loading ? (
        <p>Memuat data produk...</p>
      ) : (
        <div>
          <table className="w-full text-sm text-left border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Nama</th>
                <th className="p-2 border">Kategori</th>
                <th className="p-2 border">Harga</th>
                <th className="p-2 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {products.map(prod => (
                <tr key={prod.id}>
                  <td className="p-2 border">{prod.id}</td>
                  <td className="p-2 border">{prod.name}</td>
                  <td className="p-2 border">{prod.category}</td>
                  <td className="p-2 border">Rp {prod.price}</td>
                  <td className="p-2 border">
                    <Link href={`/admin/products/${prod.id}`}>
                      <span className="text-blue-600 hover:underline cursor-pointer mr-3">
                        Edit
                      </span>
                    </Link>
                    <button 
                      onClick={() => handleDelete(prod.id)} 
                      className="text-red-600 hover:underline"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-2 text-center">
                    Belum ada produk.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="mt-4">
            <Link href="/admin/products/new" className="inline-block bg-green-600 text-white px-4 py-2 rounded">
              + Tambah Produk
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
