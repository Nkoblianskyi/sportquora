"use client"

import { useState, useEffect } from "react"
import { Button } from "primereact/button"
import Link from "next/link"

export default function CookieConsentForm() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted")
    if (!cookiesAccepted) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>
            Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta nuestra{" "}
            <Link href="/cookie-policy" className="underline hover:text-red-400">
              Política de Cookies
            </Link>
            .
          </p>
        </div>
        <div className="flex space-x-4">
          <Button label="Aceptar" onClick={acceptCookies} className="bg-red-600 hover:bg-red-700" />
          <Link href="/cookie-policy">
            <Button label="Más información" className="p-button-outlined p-button-secondary" />
          </Link>
        </div>
      </div>
    </div>
  )
}
