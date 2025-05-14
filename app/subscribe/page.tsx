import type { Metadata } from "next"
import SubscriptionForm from "@/components/subscription-form"
import SubscriptionPlans from "@/components/subscription-plans"

export const metadata: Metadata = {
  title: "Suscríbete a SportQuora",
  description:
    "Solicita información sobre nuestros planes de suscripción a SportQuora, la mejor revista deportiva de España.",
}

export default function SubscribePage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Suscríbete a SportQuora</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Recibe mensualmente la mejor revista deportiva de España directamente en tu buzón y disfruta de contenido
          exclusivo. Solicita información sobre nuestros planes y tarifas actuales.
        </p>

        {/* Subscription Plans */}
        <SubscriptionPlans />

        {/* Subscription Form */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Solicita información sobre nuestros planes</h2>
          <p className="text-center mb-8 text-gray-600">
            Completa el siguiente formulario y te enviaremos información detallada sobre nuestros planes y tarifas
            actuales. También te informaremos sobre promociones exclusivas.
          </p>
          <SubscriptionForm />
        </div>

        {/* Additional Benefits */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué suscribirte?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-red-600 text-4xl mb-4">
                <i className="pi pi-calendar"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Puntualidad garantizada</h3>
              <p>Recibe tu revista los primeros días de cada mes, antes de que llegue a los quioscos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-red-600 text-4xl mb-4">
                <i className="pi pi-lock"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Contenido exclusivo</h3>
              <p>Accede a artículos, entrevistas y análisis que solo están disponibles para suscriptores.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-red-600 text-4xl mb-4">
                <i className="pi pi-star"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Beneficios exclusivos</h3>
              <p>Disfruta de descuentos especiales, regalos y acceso a eventos exclusivos para suscriptores.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 bg-gray-50 py-12 px-4 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Lo que dicen nuestros suscriptores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="pi pi-star-fill mr-1"></i>
                  ))}
                </div>
              </div>
              <p className="italic mb-4">
                "La mejor revista deportiva que he leído. Sus análisis tácticos son excepcionales y me han ayudado a
                entender mejor los deportes que sigo."
              </p>
              <p className="font-semibold">- Miguel R.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="pi pi-star-fill mr-1"></i>
                  ))}
                </div>
              </div>
              <p className="italic mb-4">
                "Me encanta la diversidad de deportes que cubren. No es solo fútbol, sino que dan espacio a disciplinas
                que normalmente no reciben atención mediática."
              </p>
              <p className="font-semibold">- Laura G.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="pi pi-star-fill mr-1"></i>
                  ))}
                </div>
              </div>
              <p className="italic mb-4">
                "La calidad del contenido es excepcional. Cada mes espero con ansias la llegada de mi ejemplar. Vale
                cada céntimo de la suscripción."
              </p>
              <p className="font-semibold">- Carlos M.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
