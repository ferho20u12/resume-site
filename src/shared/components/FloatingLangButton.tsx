"use client";

export default function FloatingLangButton() {
  return (
    <button
      className="fixed bottom-20 right-4 bg-white border shadow-md rounded-full px-3 py-2"
      onClick={() => alert("Selector de idioma pronto 🎌")}
    >
      🌐
    </button>
  );
}
