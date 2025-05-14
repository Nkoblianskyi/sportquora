import Image from "next/image"
import Link from "next/link"
import { Button } from "primereact/button"
import { Accordion, AccordionTab } from "primereact/accordion"
import { Card } from "primereact/card"
import type { Metadata } from "next"

import issues from "@/data/issues.json"
import faq from "@/data/faq.json"
import highlightedArticles from "@/data/highlightedArticles.json"
import aboutData from "@/data/about.json"

export const metadata: Metadata = {
  title: "SportQuora - La Revista Deportiva Líder en España",
  description:
    "Descubre análisis deportivos de calidad, entrevistas exclusivas y reportajes en profundidad en la revista deportiva líder de España.",
}

export default function Home() {
  // Get the latest issue
  const latestIssue = issues[issues.length - 1]

  // Get the last 4 issues for the covers section (or all if less than 4)
  const recentIssues = issues.slice(-4).reverse()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-red-900 text-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                La revista deportiva que va más allá del resultado
              </h1>
              <p className="text-lg sm:text-xl mb-6">
                Análisis en profundidad, entrevistas exclusivas y reportajes que te harán ver el deporte desde otra
                perspectiva.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/subscribe">
                  <Button label="Suscríbete ahora" className="w-full sm:w-auto" />
                </Link>
                <Link href="/issues">
                  <Button label="Ver números" className="w-full sm:w-auto p-button-outlined" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-80 md:w-80 md:h-96 shadow-2xl transform rotate-3">
                <Image
                  src={latestIssue.coverImage || "/01b53c1ff304a443a07bf3eef4bd8570.jpg"}
                  alt={`Portada: ${latestIssue.title}`}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Magazine Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Sobre SportQuora</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-red-600">Periodismo de calidad</h3>
              <p>
                Nuestro equipo de periodistas experimentados ofrece análisis profundos y reportajes detallados que van
                más allá de los titulares.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-red-600">Diversidad deportiva</h3>
              <p>
                Cubrimos una amplia gama de deportes, desde los más populares hasta disciplinas emergentes y deportes
                tradicionales.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-red-600">Diseño premium</h3>
              <p>
                Una revista cuidadosamente diseñada con fotografías de alta calidad e infografías detalladas que
                complementan nuestros contenidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nuestra Historia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-red-600">{aboutData.history.title}</h3>
              <div className="space-y-4">
                {aboutData.history.content.slice(0, 2).map((paragraph, index) => (
                  <p key={index} className="text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/about">
                  <Button label="Conoce más sobre nosotros" className="p-button-outlined" />
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 mb-8 md:mb-0">
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <Image src="/b986d55c545b3f6e4fb11c11a60cead0.jpg" alt="Historia de SportQuora" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-bold">Desde 2025</p>
                  <p className="text-white text-sm">El nuevo referente del periodismo deportivo en España</p>
                </div>
              </div>
            </div>
          </div>npm
        </div>
      </section>

      {/* Latest Issue Articles */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Destacado en el último número</h2>
          <h3 className="text-xl sm:text-2xl font-bold mb-8 text-center text-red-600">
            {latestIssue.title} - {latestIssue.month} {latestIssue.year}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {highlightedArticles.map((article) => (
              <Card
                key={article.id}
                className="shadow-md hover:shadow-lg transition-shadow"
                header={
                  <div className="relative h-48 w-full">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-sm font-semibold">
                      {article.category}
                    </div>
                  </div>
                }
              >
                <h3 className="text-lg sm:text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-700">{article.excerpt}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-10">
            <Link href="/subscribe">
              <Button label="Suscríbete para leer más" />
            </Link>
          </div>
        </div>
      </section>

      {/* Subscription Benefits */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Ventajas de suscribirte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-full">
                <i className="pi pi-book text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Recibe la revista en tu casa</h3>
                <p>Cada mes recibirás puntualmente tu ejemplar de SportQuora directamente en tu buzón.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-full">
                <i className="pi pi-desktop text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Acceso digital completo</h3>
                <p>
                  Lee la versión digital de la revista en cualquier dispositivo y accede a contenido exclusivo online.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-full">
                <i className="pi pi-envelope text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Newsletter exclusiva</h3>
                <p>Recibe actualizaciones semanales con análisis y noticias que no encontrarás en ningún otro lugar.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-full">
                <i className="pi pi-database text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Archivo histórico</h3>
                <p>Accede a todos los números anteriores de SportQuora en formato digital.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/subscribe">
              <Button label="Ver planes de suscripción" className="bg-red-600 hover:bg-red-700" />
            </Link>
          </div>
        </div>
      </section>

      {/* Previous Covers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Números de 2025</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recentIssues.map((issue) => (
              <div key={issue.id} className="flex flex-col items-center">
                <div className="relative w-full h-64 mb-3 shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={issue.coverImage || "/placeholder.svg"}
                    alt={`${issue.title} - ${issue.month} ${issue.year}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-center font-semibold">
                  {issue.month} {issue.year}
                </h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/issues">
              <Button label="Ver todos los números" className="p-button-outlined" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Preguntas frecuentes</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion>
              {faq.map((item) => (
                <AccordionTab key={item.id} header={item.question}>
                  <p>{item.answer}</p>
                </AccordionTab>
              ))}
            </Accordion>
          </div>
          <div className="text-center mt-8">
            <Link href="/contact">
              <Button label="¿Más preguntas? Contáctanos" className="p-button-outlined" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
