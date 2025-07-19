import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-3 flex justify-between items-center"
      >
        <span className="font-medium">{question}</span>
        <span className="text-xl font-bold">{open ? "-" : "+"}</span>
      </button>
      {open && <p className="pb-4 text-gray-700">{answer}</p>}
    </div>
  );
}
