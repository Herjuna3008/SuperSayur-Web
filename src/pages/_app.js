import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Kalau kamu ingin Navbar & Footer tampil di seluruh halaman, import di sini (bisa juga khusus page)
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="description" content="Supplier Sayur & Daging Segar | PasarSegar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Untuk efek transisi halaman, bisa tambah animasi di container */}
      <div className="min-h-screen flex flex-col bg-green-50">
      <Component {...pageProps} />
      </div>
    </>
  );
}
