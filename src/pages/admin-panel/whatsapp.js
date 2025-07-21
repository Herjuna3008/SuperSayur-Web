import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";

export default function WhatsAppPage() {
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/whatsapp")
      .then(r => r.json())
      .then(data => setNumber(data.number || ""));
  }, []);

  async function saveWA(e) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/whatsapp", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ number }),
    });
    setMsg("Nomor WhatsApp berhasil disimpan!");
    setLoading(false);
  }

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Edit Nomor WhatsApp</h1>
      <form onSubmit={saveWA} className="max-w-lg">
        <input
          className="w-full border rounded p-2"
          placeholder="628xxxxxxxxx"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <button type="submit" className="mt-3 px-6 py-2 bg-green-600 text-white rounded" disabled={loading}>
          {loading ? "Menyimpan..." : "Simpan"}
        </button>
        {msg && <div className="mt-2 text-green-600">{msg}</div>}
      </form>
    </AdminLayout>
  );
}
