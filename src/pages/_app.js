import "@/styles/globals.css";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith("/admin");
  return (
    <>
      {/* Include Navbar and Footer on non-admin pages */}
      {!isAdminRoute && <Navbar />}
      <Component {...pageProps} />
      {!isAdminRoute && <Footer />}
    </>
  );
}
