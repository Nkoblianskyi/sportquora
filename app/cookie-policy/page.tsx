import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies - SportQuora",
  description:
    "Política de Cookies de SportQuora. Información sobre cómo utilizamos cookies y tecnologías similares en nuestro sitio web.",
}

export default function CookiePolicyPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Política de Cookies</h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. ¿Qué son las cookies?</h2>
            <p className="mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil)
              cuando visitas un sitio web. Las cookies son ampliamente utilizadas para hacer que los sitios web
              funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios
              del sitio.
            </p>
            <p>
              Las cookies pueden ser "persistentes" o "de sesión". Las cookies persistentes permanecen en tu dispositivo
              cuando te desconectas y hasta que las eliminas o caducan. Las cookies de sesión se eliminan cuando cierras
              tu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Cómo utilizamos las cookies</h2>
            <p className="mb-4">Utilizamos diferentes tipos de cookies por las siguientes razones:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Cookies estrictamente necesarias:</strong> Estas son esenciales para que puedas utilizar las
                funciones del sitio web, como iniciar sesión en áreas seguras.
              </li>
              <li>
                <strong>Cookies analíticas/de rendimiento:</strong> Nos permiten reconocer y contar el número de
                visitantes y ver cómo los visitantes se mueven por nuestro sitio web cuando lo utilizan. Esto nos ayuda
                a mejorar el funcionamiento de nuestro sitio web.
              </li>
              <li>
                <strong>Cookies de funcionalidad:</strong> Se utilizan para reconocerte cuando regresas a nuestro sitio
                web. Esto nos permite personalizar nuestro contenido para ti y recordar tus preferencias.
              </li>
              <li>
                <strong>Cookies de orientación:</strong> Registran tu visita a nuestro sitio web, las páginas que has
                visitado y los enlaces que has seguido. Utilizamos esta información para hacer que nuestro sitio web y
                la publicidad que se muestra en él sean más relevantes para tus intereses.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Cookies que utilizamos</h2>
            <p className="mb-4">
              A continuación se muestra una lista de las cookies que utilizamos y por qué las utilizamos:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Nombre</th>
                    <th className="py-2 px-4 border-b">Propósito</th>
                    <th className="py-2 px-4 border-b">Duración</th>
                    <th className="py-2 px-4 border-b">Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">cookiesAccepted</td>
                    <td className="py-2 px-4 border-b">Recuerda si has aceptado nuestra política de cookies</td>
                    <td className="py-2 px-4 border-b">1 año</td>
                    <td className="py-2 px-4 border-b">Persistente</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">sessionId</td>
                    <td className="py-2 px-4 border-b">Mantiene tu sesión activa mientras navegas por el sitio</td>
                    <td className="py-2 px-4 border-b">Sesión</td>
                    <td className="py-2 px-4 border-b">Sesión</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">_ga</td>
                    <td className="py-2 px-4 border-b">Utilizada por Google Analytics para distinguir usuarios</td>
                    <td className="py-2 px-4 border-b">2 años</td>
                    <td className="py-2 px-4 border-b">Analítica</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">_gid</td>
                    <td className="py-2 px-4 border-b">Utilizada por Google Analytics para distinguir usuarios</td>
                    <td className="py-2 px-4 border-b">24 horas</td>
                    <td className="py-2 px-4 border-b">Analítica</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Cómo controlar las cookies</h2>
            <p className="mb-4">
              Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están en
              tu dispositivo y puedes configurar la mayoría de los navegadores para evitar que se coloquen. Si lo haces,
              es posible que tengas que ajustar manualmente algunas preferencias cada vez que visites un sitio y que
              algunos servicios y funcionalidades no funcionen.
            </p>
            <p className="mb-4">
              Para obtener más información sobre cómo administrar las cookies, visita la página de ayuda de tu
              navegador:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline"
                >
                  Internet Explorer
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Cookies de terceros</h2>
            <p className="mb-4">
              Algunos de nuestros socios pueden establecer cookies en tu dispositivo cuando visitas nuestro sitio web.
              Estos socios incluyen servicios de análisis y redes publicitarias. Estas cookies permiten a estos terceros
              recopilar información sobre tus intereses y mostrarte anuncios relevantes en otros sitios web.
            </p>
            <p>
              No tenemos acceso ni control sobre estas cookies. Si deseas deshabilitar las cookies de terceros, debes
              visitar los sitios web de estos terceros para obtener información sobre cómo desactivar sus cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cambios en nuestra política de cookies</h2>
            <p className="mb-4">
              Cualquier cambio que podamos hacer en nuestra política de cookies en el futuro se publicará en esta
              página. Por favor, revisa esta página con frecuencia para ver cualquier actualización o cambio en nuestra
              política de cookies.
            </p>
            <p>
              Si tienes alguna pregunta sobre esta política de cookies, contáctanos en join@sportquora.com o en nuestra
              dirección postal: Calle de Valencia, 200, 08011 Barcelona, Spain.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
