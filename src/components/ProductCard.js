export default function ProductCard({ product }) {
    return (
      <div className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden transition-shadow duration-300 animate-fadeIn">
        <img 
          src={product.image_url} 
          alt={product.name} 
          className="h-40 w-full object-cover" 
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          {product.description && (
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
          )}
          <p className="font-semibold text-green-700 mb-4">Rp {product.price}</p>
          <a
            href={`https://wa.me/6281234567890?text=Saya ingin memesan ${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    );
  }
  