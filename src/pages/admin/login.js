import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Dummy login, ganti sesuai integrasi Supabase
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Simulasi login berhasil
    setTimeout(() => {
      setLoading(false);
      if (email === "admin@supersayur.com" && password === "password") {
        router.push("/admin/product");
      } else {
        setError("Email atau password salah.");
      }
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>Login Admin | PasarSegar</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 animate-fadeIn">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl shadow-lg px-8 py-10 max-w-sm w-full flex flex-col gap-5"
        >
          <h1 className="text-2xl font-bold text-green-700 mb-2 text-center">
            Admin Login
          </h1>
          <input
            type="email"
            placeholder="Email"
            autoComplete="username"
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <div className="text-red-600 text-center text-sm -mt-2">{error}</div>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`bg-green-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-green-700 hover:scale-105 transition-transform duration-150 ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>
      </main>
    </>
  );
}
