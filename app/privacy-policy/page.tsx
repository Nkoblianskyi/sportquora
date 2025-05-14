import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad - SportQuora",
  description:
    "Política de Privacidad de SportQuora. Información sobre cómo recopilamos, utilizamos y protegemos tus datos personales.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Política de Privacidad</h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introducción</h2>
            <p className="mb-4">
              En SportQuora, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política
              de privacidad te informará sobre cómo cuidamos tus datos personales cuando visitas nuestro sitio web y te
              informará sobre tus derechos de privacidad y cómo la ley te protege.
            </p>
            <p>
              Esta política de privacidad se aplica a la información que recopilamos cuando utilizas nuestro sitio web,
              independientemente de cómo accedas a él.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Datos que recopilamos sobre ti</h2>
            <p className="mb-4">
              Datos personales, o información personal, significa cualquier información sobre un individuo a partir de
              la cual esa persona puede ser identificada. No incluye datos donde la identidad ha sido eliminada (datos
              anónimos).
            </p>
            <p className="mb-4">
              Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre ti, que hemos
              agrupado de la siguiente manera:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Datos de identidad:</strong> incluye nombre, apellidos, nombre de usuario o identificador
                similar.
              </li>
              <li>
                <strong>Datos de contacto:</strong> incluye dirección de facturación, dirección de entrega, dirección de
                correo electrónico y números de teléfono.
              </li>
              <li>
                <strong>Datos financieros:</strong> incluye detalles de tarjetas de pago.
              </li>
              <li>
                <strong>Datos de transacción:</strong> incluye detalles sobre pagos hacia y desde ti, y otros detalles
                de productos y servicios que has comprado de nosotros.
              </li>
              <li>
                <strong>Datos técnicos:</strong> incluye dirección de protocolo de Internet (IP), tus datos de inicio de
                sesión, tipo y versión del navegador, configuración de zona horaria y ubicación, tipos y versiones de
                complementos del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que
                utilizas para acceder a este sitio web.
              </li>
              <li>
                <strong>Datos de perfil:</strong> incluye tu nombre de usuario y contraseña, compras o pedidos
                realizados por ti, tus intereses, preferencias, comentarios y respuestas a encuestas.
              </li>
              <li>
                <strong>Datos de uso:</strong> incluye información sobre cómo utilizas nuestro sitio web, productos y
                servicios.
              </li>
              <li>
                <strong>Datos de marketing y comunicaciones:</strong> incluye tus preferencias para recibir marketing de
                nosotros y de nuestros terceros, y tus preferencias de comunicación.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Cómo recopilamos tus datos personales</h2>
            <p className="mb-4">Utilizamos diferentes métodos para recopilar datos de y sobre ti, incluyendo:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Interacciones directas:</strong> Puedes proporcionarnos tus datos de identidad, contacto y
                financieros al completar formularios o al corresponderte con nosotros por correo postal, teléfono,
                correo electrónico o de otra manera.
              </li>
              <li>
                <strong>Tecnologías o interacciones automatizadas:</strong> A medida que interactúas con nuestro sitio
                web, podemos recopilar automáticamente datos técnicos sobre tu equipo, acciones de navegación y
                patrones. Recopilamos estos datos personales mediante cookies, registros del servidor y otras
                tecnologías similares.
              </li>
              <li>
                <strong>Terceros o fuentes disponibles públicamente:</strong> Podemos recibir datos personales sobre ti
                de varios terceros y fuentes públicas.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Cómo utilizamos tus datos personales</h2>
            <p className="mb-4">
              Solo utilizaremos tus datos personales cuando la ley nos lo permita. Más comúnmente, utilizaremos tus
              datos personales en las siguientes circunstancias:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                Cuando necesitemos ejecutar el contrato que estamos a punto de celebrar o hemos celebrado contigo.
              </li>
              <li>
                Cuando sea necesario para nuestros intereses legítimos (o los de un tercero) y tus intereses y derechos
                fundamentales no anulen esos intereses.
              </li>
              <li>Cuando necesitemos cumplir con una obligación legal o regulatoria.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Divulgación de tus datos personales</h2>
            <p className="mb-4">
              Podemos compartir tus datos personales con las partes establecidas a continuación para los fines
              establecidos en la sección 4 anterior:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Proveedores de servicios que proporcionan servicios de TI y administración de sistemas.</li>
              <li>Asesores profesionales, incluidos abogados, banqueros, auditores y aseguradores.</li>
              <li>Autoridades fiscales, reguladoras y otras autoridades.</li>
              <li>
                Terceros a quienes podemos elegir vender, transferir o fusionar partes de nuestro negocio o nuestros
                activos.
              </li>
            </ul>
            <p>
              Requerimos a todos los terceros que respeten la seguridad de tus datos personales y los traten de acuerdo
              con la ley. No permitimos a nuestros proveedores de servicios terceros utilizar tus datos personales para
              sus propios fines y solo les permitimos procesar tus datos personales para fines específicos y de acuerdo
              con nuestras instrucciones.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Seguridad de datos</h2>
            <p>
              Hemos implementado medidas de seguridad apropiadas para evitar que tus datos personales se pierdan,
              utilicen o accedan de manera no autorizada, se modifiquen o divulguen accidentalmente. Además, limitamos
              el acceso a tus datos personales a aquellos empleados, agentes, contratistas y otros terceros que tienen
              una necesidad comercial de conocer. Solo procesarán tus datos personales según nuestras instrucciones y
              están sujetos a un deber de confidencialidad.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Tus derechos legales</h2>
            <p className="mb-4">
              Bajo ciertas circunstancias, tienes derechos bajo las leyes de protección de datos en relación con tus
              datos personales:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Solicitar acceso a tus datos personales.</li>
              <li>Solicitar la corrección de tus datos personales.</li>
              <li>Solicitar la eliminación de tus datos personales.</li>
              <li>Oponerse al procesamiento de tus datos personales.</li>
              <li>Solicitar la restricción del procesamiento de tus datos personales.</li>
              <li>Solicitar la transferencia de tus datos personales.</li>
              <li>Derecho a retirar el consentimiento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contacto</h2>
            <p>
              Si tienes alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad,
              contáctanos en join@sportquora.com o en nuestra dirección postal: Calle de Valencia, 200, 08011 Barcelona,
              Spain.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
