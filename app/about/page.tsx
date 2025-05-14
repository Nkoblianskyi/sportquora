import Image from "next/image"
import { Card } from "primereact/card"
import type { Metadata } from "next"
import aboutData from "@/data/about.json"

export const metadata: Metadata = {
  title: "Sobre Nosotros - SportQuora",
  description: "Conoce la historia, valores y equipo detrás de SportQuora, la revista deportiva líder en España.",
}

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Sobre SportQuora</h1>

        {/* History Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{aboutData.history.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              {aboutData.history.content.map((paragraph, index) => (
                <p key={index} className="mb-4 text-base sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 mt-4 md:mt-0">
              <Image
                src="/b986d55c545b3f6e4fb11c11a60cead0.jpg"
                alt="Oficinas de SportQuora"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">{aboutData.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.values.items.map((value, index) => (
              <Card key={index} className="shadow-md">
                <h3 className="text-xl font-bold mb-2 text-red-600">{value.title}</h3>
                <p>{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">{aboutData.team.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.team.members.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-red-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Magazine Philosophy */}
        <section className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Nuestra Filosofía Editorial</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              En SportQuora creemos que el deporte es mucho más que resultados y estadísticas. Es una ventana a la
              sociedad, un reflejo de nuestros valores y una fuente inagotable de historias humanas.
            </p>
            <p className="text-lg mb-4">
              Nuestro enfoque editorial se basa en tres pilares fundamentales: análisis profundo, contexto histórico y
              dimensión humana. Buscamos ir más allá de la superficie para ofrecer a nuestros lectores una comprensión
              más rica y matizada del mundo deportivo.
            </p>
            <p className="text-lg">
              Nos comprometemos a mantener la independencia editorial, la precisión en nuestros reportajes y el respeto
              hacia todos los actores del ámbito deportivo, valores que han definido a SportQuora desde su fundación en
              2025.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
