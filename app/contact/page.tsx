import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contacto - SportQuora",
  description: "Ponte en contacto con el equipo de SportQuora para cualquier consulta, sugerencia o colaboración.",
}

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Contacto</h1>
        <p className="text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto">
          ¿Tienes alguna pregunta o sugerencia? Estamos aquí para ayudarte. Completa el formulario y nos pondremos en
          contacto contigo lo antes posible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-6">Envíanos un mensaje</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 mt-8 md:mt-0">Información de contacto</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Dirección</h3>
                <p className="text-gray-700">
                  Calle de Valencia, 200
                  <br />
                  08011 Barcelona, Spain
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-700">join@sportquora.com</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
                <p className="text-gray-700">+34 934 557 810</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Horario de atención</h3>
                <p className="text-gray-700">
                  Lunes a Viernes: 9:00 - 18:00
                  <br />
                  Sábados: 10:00 - 14:00
                  <br />
                  Domingos: Cerrado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
