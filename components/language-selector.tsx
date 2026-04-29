"use client"

import { Badge } from "@/components/ui/badge"

export default function LanguageSelector() {
  const setLanguage = (lang: string) => {
    document.cookie = `googtrans=/en/${lang}; path=/`;
    document.cookie = `googtrans=/en/${lang}; path=/; domain=` + window.location.hostname;
    window.location.reload();
  }

  return (
    <div className="flex justify-center gap-4 mb-8">
      <button onClick={() => setLanguage("en")} className="focus:outline-none transition-transform hover:scale-105 active:scale-95">
        <Badge variant="secondary" className="text-lg py-2 px-4 bg-pink-100 text-pink-800 border-pink-200 cursor-pointer">
          English
        </Badge>
      </button>
      <button onClick={() => setLanguage("hi")} className="focus:outline-none transition-transform hover:scale-105 active:scale-95">
        <Badge variant="secondary" className="text-lg py-2 px-4 bg-rose-100 text-rose-800 border-rose-200 cursor-pointer">
          हिंदी
        </Badge>
      </button>
    </div>
  )
}
