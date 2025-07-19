export default function TermsPage() {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6">Syarat &amp; Ketentuan</h1>
        <p className="mb-4">
          Dengan menggunakan layanan SuperSayur, Anda setuju untuk terikat dengan syarat dan ketentuan berikut:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">
            Pemesanan dianggap berhasil setelah Anda menerima konfirmasi dari pihak SuperSayur. Pembatalan sepihak tanpa konfirmasi tidak diperkenankan.
          </li>
          <li className="mb-2">
            Produk yang sudah dibeli tidak dapat dikembalikan, kecuali terdapat kerusakan atau kesalahan pengiriman dari pihak kami.
          </li>
          <li className="mb-2">
            Kami berhak menolak atau membatalkan pesanan yang melanggar ketentuan atau terindikasi penipuan.
          </li>
          <li className="mb-2">
            Informasi pribadi Anda akan kami jaga kerahasiaannya dan hanya digunakan untuk kepentingan pemesanan dan pengiriman.
          </li>
        </ol>
        <p>
          PasarSegar dapat mengubah syarat dan ketentuan ini sewaktu-waktu. Pelanggan disarankan untuk memeriksa halaman ini secara berkala.
        </p>
      </div>
    );
  }
  