export default function LoadingSpinner({ text = "Memuat..." }) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] py-10 animate-fadeIn">
        {/* Spinner */}
        <div className="w-14 h-14 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <div className="text-green-700 font-semibold text-lg">{text}</div>
      </div>
    );
  }
  