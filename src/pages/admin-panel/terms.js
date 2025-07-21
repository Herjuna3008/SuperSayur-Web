import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";

export default function TermsPage() {
  const [terms, setTerms] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/terms")
      .then(r => r.json())
      .then(data => setTerms(data.content || ""));
  }, []);

  async function saveTerms(e) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/terms", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: terms }),
    });
    setMsg("Terms berhasil disimpan!");
    setLoading(false);
  }

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Edit Terms & Conditions</h1>
      <form onSubmit={saveTerms} className="max-w-2xl">
        <textarea
          className="w-full border rounded p-2 min-h-[200px]"
          value={terms}
          onChange={e => setTerms(e.target.value)}
        />
        <button type="submit" className="mt-3 px-6 py-2 bg-green-600 text-white rounded" disabled={loading}>
          {loading ? "Menyimpan..." : "Simpan"}
        </button>
        {msg && <div className="mt-2 text-green-600">{msg}</div>}
      </form>
    </AdminLayout>
  );
}
