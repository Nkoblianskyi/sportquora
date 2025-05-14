import Link from "next/link"
import { Button } from "primereact/button"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-red-600">404</h1>
        <h2 className="text-4xl font-bold mb-4">Página no encontrada</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/">
            <Button label="Volver al inicio" icon="pi pi-home" className="bg-red-600 hover:bg-red-700" />
          </Link>
          <Link href="/contact">
            <Button label="Contactar" icon="pi pi-envelope" className="p-button-outlined" />
          </Link>
        </div>
      </div>
    </div>
  )
}
