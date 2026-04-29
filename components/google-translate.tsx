"use client"

import { useEffect, useState } from "react"

export default function GoogleTranslate() {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <div id="google_translate_element" className="hidden">
      {/* Google Translate element will be injected here */}
    </div>
  )
}
