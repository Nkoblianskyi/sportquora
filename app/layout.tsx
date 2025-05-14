import type React from "react"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { PrimeReactProvider } from "primereact/api"
import CookieBanner from "@/components/cookie-banner"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SportQuora - Revista Deportiva",
  description: "La revista deportiva líder en España con análisis profundos y reportajes exclusivos",
  metadataBase: new URL("https://sportquora.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://sportquora.com",
    title: "SportQuora - Revista Deportiva",
    description: "La revista deportiva líder en España con análisis profundos y reportajes exclusivos",
    siteName: "SportQuora",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "SportQuora Magazine",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <PrimeReactProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <CookieBanner />
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  )
}
