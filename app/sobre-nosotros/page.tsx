import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import PageHeader from "@/components/page-header"

export default function SobreNosotrosPage() {
  // Datos de ejemplo para el equipo
  const equipo = [
    {
      name: "Javier Batista",
      position: "Gerente General",
      image: "../../FOTO+JAVIER.jpg",
    },
    {
      name: "Fernando Cordero",
      position: "Director de Arquitectura",
      image: "../../FOTO+FERNANDO.jpg",
    },
    {
      name: "Michael Jimenez",
      position: "Gerente de Ingenieria",
      image: "../../FOTO+MICHAEL.jpg",
    },
    {
      name: "Maite Adames",
      position: "Encargada de Taller",
      image: "../../MaiteAdames.png",
    }
  ]

  return (
    <main>
      <PageHeader
        title="Sobre Nosotros"
        description="Conoce a Cuadro Arquitectura, un estudio comprometido con la transformación de San Pedro de Macorís a través del diseño futurista y geométrico."
      />

      {/* Historia y Misión */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="relative h-[500px] overflow-hidden border border-white/20 p-2">
                <Image
                  src="../../00.jpg"
                  alt="Cuadro Arquitectura"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 border-2 border-white" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="inline-block border-2 border-white p-1 mb-4">
                <span className="bg-white px-3 py-1 text-xs text-black">NUESTRA HISTORIA</span>
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">Transformando espacios desde 2010</h2>
              <div className="mt-6 space-y-4 text-white/70">
                <p>
                  Cuadro Arquitectura nació en 2010 con una visión clara: transformar San Pedro de Macorís a través de
                  la arquitectura innovadora. Fundada por un grupo de arquitectos apasionados por el diseño futurista y
                  geométrico, nuestra firma ha evolucionado hasta convertirse en un referente en la región.
                </p>
                <p>
                  Nuestra filosofía se basa en la fusión de formas cuadradas y geométricas con tecnología y
                  sostenibilidad, creando espacios que no solo son estéticamente impactantes sino también funcionales y
                  respetuosos con el medio ambiente.
                </p>
                <p>
                  A lo largo de nuestra trayectoria, hemos completado más de 50 proyectos que han contribuido
                  significativamente a la transformación urbana de San Pedro de Macorís, desde edificios residenciales
                  hasta espacios públicos y culturales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white py-16 text-black">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 h-px w-24 bg-black/30" />
            <h2 className="text-3xl font-bold md:text-4xl">Nuestros Valores</h2>
            <p className="mx-auto mt-4 max-w-2xl text-black/70">
              Principios que guían nuestro trabajo y definen nuestra identidad como estudio de arquitectura.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Innovación",
                description:
                  "Buscamos constantemente nuevas formas de diseñar espacios que rompan con lo convencional.",
              },
              {
                title: "Funcionalidad",
                description:
                  "Creamos diseños que no solo son estéticamente atractivos sino también prácticos y funcionales.",
              },
              {
                title: "Sostenibilidad",
                description:
                  "Integramos principios de sostenibilidad en todos nuestros proyectos para minimizar el impacto ambiental.",
              },
              {
                title: "Identidad Local",
                description:
                  "Respetamos y potenciamos la identidad cultural de San Pedro de Macorís en nuestros diseños.",
              },
            ].map((valor, index) => (
              <div
                key={index}
                className="group border border-black/10 bg-white p-6 transition-all hover:border-black/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center border border-black/10 group-hover:border-black/30">
                  <span className="text-xl font-light">{index + 1}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">{valor.title}</h3>
                <p className="text-black/70">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <div className="mb-4 h-px w-24 bg-white/30" />
            <h2 className="text-3xl font-bold md:text-4xl">Nuestro Equipo</h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Profesionales apasionados por la arquitectura futurista y comprometidos con la transformación de San Pedro
              de Macorís.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {equipo.map((miembro) => (
              <div
                key={miembro.name}
                className="group overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm"
              >
                <div className="relative h-[300px] w-[300px] overflow-hidden">
                  <Image
                    src={miembro.image || "/placeholder.svg"}
                    alt={miembro.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="border-t border-white/20 p-6">
                  <h3 className="text-xl font-bold">{miembro.name}</h3>
                  <p className="text-white/60">{miembro.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="bg-white py-16 text-black">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 h-px w-24 bg-black/30" />
            <h2 className="text-3xl font-bold md:text-4xl">Nuestros Logros</h2>
            <p className="mx-auto mt-4 max-w-2xl text-black/70">
              Hitos que marcan nuestra trayectoria y contribución a la arquitectura en San Pedro de Macorís.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-black/10 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="text-center">
                  <div className="text-4xl font-bold">50+</div>
                  <div className="mt-2 text-black/70">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">15+</div>
                  <div className="mt-2 text-black/70">Premios de Diseño</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">10+</div>
                  <div className="mt-2 text-black/70">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">20+</div>
                  <div className="mt-2 text-black/70">Profesionales</div>
                </div>
              </div>
            </div>
            <div className="border border-black/10 p-6">
              <h3 className="mb-4 text-xl font-bold">Reconocimientos</h3>
              <ul className="space-y-4">
                {[
                  "Premio a la Innovación Arquitectónica 2022",
                  "Reconocimiento por Contribución al Desarrollo Urbano 2021",
                  "Mejor Estudio de Arquitectura del Este 2020",
                  "Premio a la Sostenibilidad en Diseño Arquitectónico 2019",
                  "Mención Especial en Bienal de Arquitectura 2018",
                ].map((reconocimiento, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 bg-black" />
                    <span>{reconocimiento}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visión */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="inline-block border-2 border-white p-1 mb-4">
                <span className="bg-white px-3 py-1 text-xs text-black">NUESTRA VISIÓN</span>
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">El futuro de San Pedro de Macorís</h2>
              <div className="mt-6 space-y-4 text-white/70">
                <p>
                  Nuestra visión es convertir a San Pedro de Macorís en un referente de arquitectura futurista y
                  sostenible en el Caribe, creando espacios que mejoren la calidad de vida de sus habitantes y potencien
                  el desarrollo económico y cultural de la región.
                </p>
                <p>
                  Aspiramos a seguir transformando el paisaje urbano con diseños innovadores que respeten la identidad
                  local y al mismo tiempo introduzcan conceptos arquitectónicos vanguardistas que inspiren a futuras
                  generaciones.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contacto"
                  className="group flex items-center gap-2 rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-black hover:text-white"
                >
                  Trabaja con nosotros
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden border border-white/20 p-2">
                <Image
                  src="../../R01.jpg"
                  alt="Visión"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden border border-white/20 p-2">
                <Image
                  src="../../R05 (2).jpg"
                  alt="Futuro"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden border border-white/20 p-2">
                <Image
                  src="../../R0 (1).jpg"
                  alt="Innovación"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden border border-white/20 p-2">
                <Image
                  src="../../HABITAT+01.jpg"
                  alt="Transformación"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 text-black">
        <div className="container px-4 md:px-6">
          <div className="border border-black/10 bg-white p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">¿Quieres formar parte de nuestra historia?</h2>
                <p className="mt-4 text-black/70">
                  Estamos siempre en busca de talento apasionado por la arquitectura futurista y el diseño geométrico.
                  Únete a nuestro equipo o colabora con nosotros en proyectos transformadores.
                </p>
              </div>
              <div className="flex flex-col items-start justify-center space-y-4">
                <Link
                  href="/contacto"
                  className="group flex items-center gap-2 rounded-none border border-black bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white hover:text-black"
                >
                  Contáctanos
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/proyectos"
                  className="flex items-center gap-2 rounded-none border border-black/10 bg-transparent px-6 py-3 text-sm font-medium transition-all hover:border-black/30"
                >
                  Ver Proyectos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

