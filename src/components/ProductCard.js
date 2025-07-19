export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transform transition-transform hover:scale-105 duration-300 animate-fadeIn group">
      <div className="relative">
        <img
          src={product.image_url || "https://source.unsplash.com/400x300/?vegetable"}
          alt={product.name}
          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.stock === 0 ? (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full shadow">
            Habis
          </span>
        ) : (
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
            Stok {product.stock}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        {product.description && (
          <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="inline-block bg-green-100 text-green-800 text-base font-bold px-3 py-1 rounded-lg mb-2">
            Rp {Number(product.price).toLocaleString("id-ID")}
          </span>
        </div>
        <a
          href={`https://wa.me/6281234567890?text=Saya ingin memesan ${encodeURIComponent(product.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-3 bg-green-600 text-white py-2 rounded-full font-semibold shadow hover:bg-green-700 hover:scale-105 transition-transform"
        >
          Pesan via WhatsApp
        </a>
      </div>
    </div>
  );
}
