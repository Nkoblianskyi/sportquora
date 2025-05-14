import Image from "next/image"
import { Card } from "primereact/card"
import type { Metadata } from "next"
import issues from "@/data/issues.json"

export const metadata: Metadata = {
  title: "Números de 2025 - SportQuora",
  description:
    "Explora todos los números de SportQuora de 2025, la revista deportiva líder en España con análisis profundos y reportajes exclusivos.",
}

export default function IssuesPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Números de SportQuora 2025</h1>
        <p className="text-lg sm:text-xl text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
          Explora nuestros números de 2025 y descubre el mejor periodismo deportivo en cada edición.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {issues
            .slice()
            .reverse()
            .map((issue) => (
              <Card
                key={issue.id}
                className="shadow-md hover:shadow-lg transition-shadow"
                header={
                  <div className="relative h-64 sm:h-80 w-full">
                    <Image
                      src={issue.coverImage || "/placeholder.svg"}
                      alt={`${issue.title} - ${issue.month} ${issue.year}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                }
              >
                <div className="p-4">
                  <div className="text-sm text-red-600 font-semibold mb-2">
                    {issue.month} {issue.year}
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold mb-3">{issue.title}</h2>
                  <p className="text-gray-700 mb-4">{issue.description}</p>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
