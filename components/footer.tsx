import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SportQuora</h3>
            <p className="mb-4">La revista deportiva líder en España con análisis profundos y reportajes exclusivos.</p>
            <div className="flex flex-col space-y-2">
              <p>
                <span className="font-semibold">Email:</span> join@sportquora.com
              </p>
              <p>
                <span className="font-semibold">Teléfono:</span> +34 934 557 810
              </p>
              <p>
                <span className="font-semibold">Dirección:</span> Calle de Valencia, 200, 08011 Barcelona, Spain
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-red-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-400 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/issues" className="hover:text-red-400 transition-colors">
                  Números
                </Link>
              </li>
              <li>
                <Link href="/subscribe" className="hover:text-red-400 transition-colors">
                  Suscripción
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-red-400 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-red-400 transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {currentYear} SportQuora. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
