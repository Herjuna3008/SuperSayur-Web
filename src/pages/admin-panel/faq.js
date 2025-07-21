import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";

export default function FAQPage() {
  const [faqs, setFaqs] = useState([]);
  const [newQ, setNewQ] = useState("");
  const [newA, setNewA] = useState("");
  const [editId, setEditId] = useState(null);
  const [editQ, setEditQ] = useState("");
  const [editA, setEditA] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchFaqs = () =>
    fetch("/api/faqs")
      .then(r => r.json())
      .then(setFaqs);

  useEffect(() => { fetchFaqs(); }, []);

  // Tambah FAQ
  async function addFaq(e) {
    e.preventDefault();
    if (!newQ.trim() || !newA.trim()) return;
    setLoading(true);
    await fetch("/api/faqs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: newQ, answer: newA }),
    });
    setNewQ(""); setNewA("");
    fetchFaqs();
    setLoading(false);
  }

  // Edit FAQ
  async function saveEditFaq(id) {
    if (!editQ.trim() || !editA.trim()) return;
    setLoading(true);
    await fetch(`/api/faqs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: editQ, answer: editA }),
    });
    setEditId(null); setEditQ(""); setEditA("");
    fetchFaqs();
    setLoading(false);
  }

  // Hapus FAQ
  async function deleteFaq(id) {
    if (!window.confirm("Hapus FAQ ini?")) return;
    setLoading(true);
    await fetch(`/api/faqs/${id}`, { method: "DELETE" });
    fetchFaqs();
    setLoading(false);
  }

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Kelola FAQ</h1>
      <form onSubmit={addFaq} className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-2">
        <input
          className="border rounded p-2"
          placeholder="Pertanyaan"
          value={newQ}
          onChange={e => setNewQ(e.target.value)}
          disabled={loading}
        />
        <input
          className="border rounded p-2"
          placeholder="Jawaban"
          value={newA}
          onChange={e => setNewA(e.target.value)}
          disabled={loading}
        />
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded" disabled={loading}>Tambah</button>
      </form>
      <div className="bg-white rounded shadow p-4">
        <table className="w-full">
          <thead>
            <tr className="bg-green-100">
              <th className="py-2 px-4">Pertanyaan</th>
              <th className="py-2 px-4">Jawaban</th>
              <th className="py-2 px-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {faqs.map(f => (
              <tr key={f.id} className="border-t">
                <td className="py-2 px-4">
                  {editId === f.id ? (
                    <input className="border rounded p-1 w-full" value={editQ} onChange={e => setEditQ(e.target.value)} />
                  ) : f.question}
                </td>
                <td className="py-2 px-4">
                  {editId === f.id ? (
                    <input className="border rounded p-1 w-full" value={editA} onChange={e => setEditA(e.target.value)} />
                  ) : f.answer}
                </td>
                <td className="py-2 px-4 space-x-2">
                  {editId === f.id ? (
                    <>
                      <button onClick={() => saveEditFaq(f.id)} className="px-2 py-1 bg-green-500 text-white rounded">Simpan</button>
                      <button onClick={() => { setEditId(null); setEditQ(""); setEditA(""); }} className="px-2 py-1 bg-gray-300 rounded">Batal</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => { setEditId(f.id); setEditQ(f.question); setEditA(f.answer); }} className="px-2 py-1 bg-yellow-500 text-white rounded">Edit</button>
                      <button onClick={() => deleteFaq(f.id)} className="px-2 py-1 bg-red-500 text-white rounded">Hapus</button>
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
