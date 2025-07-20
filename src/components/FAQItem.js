import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 animate-fadeIn">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
        aria-expanded={open}
      >
        <span className="font-semibold text-green-700 text-base md:text-lg">
          {question}
        </span>
        <span
          className={`text-2xl font-bold transition-transform duration-200 ${
            open ? "rotate-90 text-green-700" : "text-gray-400"
          }`}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {open && (
          <p className="pb-4 text-gray-700 text-sm md:text-base leading-relaxed">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
}
