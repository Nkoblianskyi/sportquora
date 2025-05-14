"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "primereact/button"
import { usePathname } from "next/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navItems = [
    { label: "Inicio", url: "/" },
    { label: "Sobre Nosotros", url: "/about" },
    { label: "Números", url: "/issues" },
    { label: "Suscripción", url: "/subscribe" },
    { label: "Contacto", url: "/contact" },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="SportQuora Logo" width={40} height={40} className="h-10 w-auto" />
            <span className="ml-2 text-xl md:text-2xl font-bold text-gray-900">
              Sport<span className="text-red-600">Quora</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  className={`px-2 py-2 ${
                    isActive(item.url) ? "font-bold text-red-600" : "text-gray-800 hover:text-red-600 transition-colors"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href="/subscribe">
              <Button label="Suscríbete" className="ml-2" />
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <Button
              icon={mobileMenuOpen ? "pi pi-times" : "pi pi-bars"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-button-text p-button-rounded"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  className={`px-2 py-2 ${isActive(item.url) ? "font-bold text-red-600" : "text-gray-800"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link href="/subscribe" className="block">
                  <Button label="Suscríbete" className="w-full" onClick={() => setMobileMenuOpen(false)} />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
