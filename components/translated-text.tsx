"use client"

import { useEffect, useState } from "react"

export default function TranslatedText({ en, hi }: { en: string; hi: string }) {
  const [isHi, setIsHi] = useState(false)

  useEffect(() => {
    setIsHi(document.cookie.includes("googtrans=/en/hi"))
  }, [])

  return (
    <span translate="no" className="notranslate">
      {isHi ? hi : en}
    </span>
  )
}
