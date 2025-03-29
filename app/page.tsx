import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="grid h-full w-full grid-cols-6 grid-rows-4">
            {Array(24)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="border border-white/5" />
              ))}
          </div>
        </div>
        <div className="container relative z-10 px-4 py-24 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-block border-2 border-white p-1">
                <span className="bg-white px-3 py-1 text-xs text-black">INNOVACIÓN ARQUITECTÓNICA</span>
              </div>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Transformando <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  San Pedro de Macorís
                </span>
              </h1>
              <p className="max-w-md text-white/70">
                Diseñamos espacios que combinan estética futurista con funcionalidad, creando ambientes que transforman
                la experiencia urbana.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/proyectos"
                  className="group flex items-center gap-2 rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-black hover:text-white"
                >
                  Ver Proyectos
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contacto"
                  className="flex items-center gap-2 rounded-none border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                >
                  Contactarnos
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] w-full md:h-[500px]">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
                <div className="h-full w-full overflow-hidden border border-white/20 bg-white/5 p-1 backdrop-blur-sm">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Proyecto arquitectónico"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="h-full w-full overflow-hidden border border-white/20 bg-white/5 p-1 backdrop-blur-sm">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Proyecto arquitectónico"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="h-full w-full overflow-hidden border border-white/20 bg-white/5 p-1 backdrop-blur-sm">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Proyecto arquitectónico"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="h-full w-full overflow-hidden border border-white/20 bg-white/5 p-1 backdrop-blur-sm">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Proyecto arquitectónico"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="relative bg-white py-24 text-black">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 h-px w-24 bg-black/30" />
            <h2 className="text-3xl font-bold md:text-4xl">Nuestros Servicios</h2>
            <p className="mt-4 mx-auto max-w-2xl text-black/70">
              Soluciones arquitectónicas innovadoras para transformar espacios
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Diseño Arquitectónico",
                description: "Creamos diseños vanguardistas que combinan estética y funcionalidad.",
              },
              {
                title: "Planificación Urbana",
                description: "Desarrollamos planes para revitalizar áreas urbanas con un enfoque futurista.",
              },
              {
                title: "Renovación",
                description: "Transformamos espacios existentes en ambientes modernos y funcionales.",
              },
              {
                title: "Consultoría",
                description: "Asesoramos proyectos arquitectónicos con visión innovadora y sostenible.",
              },
              {
                title: "Diseño Interior",
                description: "Creamos espacios interiores que reflejan la identidad del cliente.",
              },
              {
                title: "Arquitectura Sostenible",
                description: "Desarrollamos proyectos que minimizan el impacto ambiental.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group flex flex-col border border-black/10 bg-white p-6 transition-all hover:border-black/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center border border-black/10 group-hover:border-black/30">
                  <span className="text-xl font-light">{index + 1}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                <p className="text-black/70">{service.description}</p>
                <Link
                  href="/servicios"
                  className="mt-6 group inline-flex items-center gap-1 text-sm font-medium text-black"
                >
                  Saber más
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 rounded-none border border-black bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white hover:text-black"
            >
              Ver todos los servicios
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 h-px w-24 bg-white/30" />
            <h2 className="text-3xl font-bold md:text-4xl">Proyectos Destacados</h2>
            <p className="mt-4 mx-auto max-w-2xl text-white/70">
              Transformando San Pedro de Macorís con arquitectura innovadora
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Centro Cultural Moderno",
              "Complejo Residencial Futurista",
              "Renovación Plaza Central",
              "Torre Corporativa Cuadro",
              "Parque Tecnológico",
              "Biblioteca Municipal",
            ].map((project, index) => (
              <div key={index} className="group overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=500&width=500&text=${encodeURIComponent(project)}`}
                    alt={project}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="border-t border-white/20 p-4">
                  <h3 className="text-xl font-bold">{project}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-white/60">San Pedro de Macorís</span>
                    <Link
                      href="/proyectos"
                      className="group inline-flex items-center gap-1 text-sm font-medium text-white"
                    >
                      Ver detalles
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 rounded-none border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
            >
              Ver Todos los Proyectos
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-nosotros" className="relative bg-white py-24 text-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-[400px] md:h-auto">
              <div className="absolute left-0 top-0 h-full w-full border border-black/10 bg-black/5 p-3">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Cuadro+Arquitectura"
                  alt="Sobre Nosotros"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 border-2 border-black" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="inline-block border-2 border-black p-1">
                <span className="bg-black px-3 py-1 text-xs text-white">NUESTRA MISIÓN</span>
              </div>
              <h2 className="mt-6 text-3xl font-bold md:text-4xl">Transformando espacios, creando futuro</h2>
              <div className="mt-6 space-y-4 text-black/70">
                <p>
                  En Cuadro Arquitectura, nos dedicamos a transformar la provincia de San Pedro de Macorís a través de
                  la innovación arquitectónica. Nuestra filosofía se basa en la fusión de diseños futuristas con
                  elementos geométricos cuadrados, creando espacios únicos y funcionales.
                </p>
                <p>
                  Fundada con la visión de redefinir el paisaje urbano, nuestro equipo de arquitectos combina
                  creatividad y precisión técnica para desarrollar proyectos que elevan la calidad de vida y promueven
                  el desarrollo sostenible de la región.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-black/10 pt-8">
                <div>
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-black/70">Años de experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-black/70">Proyectos completados</div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/sobre-nosotros"
                  className="group inline-flex items-center gap-2 rounded-none border border-black bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white hover:text-black"
                >
                  Conoce más sobre nosotros
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contacto" className="py-16">
        <div className="container px-4 md:px-6">
          <div className="border border-white/20 bg-white/5 p-8 backdrop-blur-sm md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">¿Tienes un proyecto en mente?</h2>
                <p className="mt-4 text-white/70">
                  Estamos listos para transformar tus ideas en realidad. Contáctanos para comenzar tu proyecto
                  arquitectónico.
                </p>
              </div>
              <div className="flex flex-col items-start justify-center space-y-4">
                <Link
                  href="/contacto"
                  className="group flex items-center gap-2 rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-black hover:text-white"
                >
                  Contáctanos
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/servicios"
                  className="flex items-center gap-2 rounded-none border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                >
                  Ver Servicios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

