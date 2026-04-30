"use client"

import { useEffect, useState } from "react"

export default function TranslatedText({ en, hi }: { en: string; hi: string }) {
  const [isHi, setIsHi] = useState(false)

  useEffect(() => {
    const checkLang = () => {
      setIsHi(
        document.cookie.includes("googtrans=/en/hi") || 
        document.documentElement.lang === "hi" || 
        document.documentElement.classList.contains("translated-ltr")
      )
    }

    checkLang()

    const observer = new MutationObserver(checkLang)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "lang"] })

    const interval = setInterval(checkLang, 1000)

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [])

  return (
    <span translate="no" className="notranslate">
      {isHi ? hi : en}
    </span>
  )
}
