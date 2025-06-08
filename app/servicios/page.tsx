import { Check, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import PageHeader from "@/components/page-header"

export default function ServiciosPage() {
  // Datos de ejemplo para servicios
  const servicios = [
    {
      id: 1,
      title: "Diseño Arquitectónico",
      description:
        "Creamos diseños vanguardistas que combinan estética y funcionalidad para todo tipo de edificaciones.",
      features: [
        "Conceptualización de proyectos",
        "Diseño de espacios interiores y exteriores",
        "Modelado 3D y visualización",
        "Planos arquitectónicos detallados",
        "Integración de tecnologías sostenibles",
      ],
      image: "../../1.jpg",
    },
    {
      id: 2,
      title: "Planificación Urbana",
      description: "Desarrollamos planes para revitalizar áreas urbanas con un enfoque futurista y sostenible.",
      features: [
        "Masterplans urbanos",
        "Diseño de espacios públicos",
        "Planificación de movilidad",
        "Integración de áreas verdes",
        "Estrategias de desarrollo sostenible",
      ],
      image: "../../00001 (2).jpg",
    },
    {
      id: 3,
      title: "Renovación",
      description: "Transformamos espacios existentes en ambientes modernos y funcionales respetando su esencia.",
      features: [
        "Rehabilitación de edificios",
        "Adaptación a nuevos usos",
        "Mejora de eficiencia energética",
        "Actualización de instalaciones",
        "Preservación de elementos históricos",
      ],
      image: "../../04.jpg",
    },
    {
      id: 4,
      title: "Consultoría",
      description: "Asesoramos proyectos arquitectónicos con visión innovadora y sostenible para optimizar resultados.",
      features: [
        "Evaluación de viabilidad",
        "Asesoría técnica especializada",
        "Optimización de diseños",
        "Consultoría en sostenibilidad",
        "Gestión de proyectos arquitectónicos",
      ],
      image: "../../Fachada+VIVIENDACORDERO (1).jpg",
    },
    {
      id: 5,
      title: "Diseño Interior",
      description:
        "Creamos espacios interiores que reflejan la identidad del cliente con un enfoque futurista y funcional.",
      features: [
        "Diseño conceptual de interiores",
        "Selección de materiales y acabados",
        "Diseño de mobiliario personalizado",
        "Iluminación arquitectónica",
        "Integración de tecnología smart home",
      ],
      image: "../../H02 (2).jpg",
    },
    {
      id: 6,
      title: "Arquitectura Sostenible",
      description: "Desarrollamos proyectos que minimizan el impacto ambiental y maximizan la eficiencia energética.",
      features: [
        "Diseño bioclimático",
        "Integración de energías renovables",
        "Sistemas de gestión de agua",
        "Selección de materiales sostenibles",
        "Certificaciones ambientales (LEED, BREEAM)",
      ],
      image: "../../HHHH.jpg",
    },
  ]

  return (
    <main>
      <PageHeader
        title="Nuestros Servicios"
        description="Soluciones arquitectónicas innovadoras para transformar San Pedro de Macorís con diseños futuristas y geométricos."
      />

      {/* Servicios Principales */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <div className="mb-4 h-px w-24 bg-white/30" />
            <h2 className="text-3xl font-bold md:text-4xl">Servicios Principales</h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Ofrecemos una gama completa de servicios arquitectónicos con un enfoque futurista y geométrico para
              transformar espacios.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicios.slice(0, 3).map((servicio, index) => (
              <div
                key={servicio.id}
                className="group flex flex-col border border-white/20 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center border border-white/20 group-hover:border-white/40">
                  <span className="text-xl font-light">{index + 1}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">{servicio.title}</h3>
                <p className="mb-6 text-white/70">{servicio.description}</p>
                <Link
                  href={`#servicio-${servicio.id}`}
                  className="mt-auto group inline-flex items-center gap-1 text-sm font-medium text-white"
                >
                  Ver detalles
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Detallados */}
      {servicios.map((servicio, index) => (
        <section
          id={`servicio-${servicio.id}`}
          key={servicio.id}
          className={`py-16 ${index % 2 === 0 ? "bg-white text-black" : ""}`}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div className={`order-2 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                <div className="relative">
                  <div className="relative h-[400px] overflow-hidden border border-white/20 p-2">
                    <Image
                      src={servicio.image || "/placeholder.svg"}
                      alt={servicio.title}
                      width={600}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className={`absolute -bottom-4 -right-4 h-24 w-24 border-2 ${index % 2 === 0 ? "border-black" : "border-white"}`}
                  />
                </div>
              </div>
              <div className={`order-1 flex flex-col justify-center ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                <div className={`inline-block border-2 p-1 mb-4 ${index % 2 === 0 ? "border-black" : "border-white"}`}>
                  <span
                    className={`px-3 py-1 text-xs ${index % 2 === 0 ? "bg-black text-white" : "bg-white text-black"}`}
                  >
                    SERVICIO ESPECIALIZADO
                  </span>
                </div>
                <h2 className="text-3xl font-bold md:text-4xl">{servicio.title}</h2>
                <p className={`mt-4 ${index % 2 === 0 ? "text-black/70" : "text-white/70"}`}>{servicio.description}</p>
                <ul className="mt-6 space-y-3">
                  {servicio.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className={`h-5 w-5 shrink-0 ${index % 2 === 0 ? "text-black" : "text-white"}`} />
                      <span className={index % 2 === 0 ? "text-black/70" : "text-white/70"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/contacto"
                    className={`group inline-flex items-center gap-2 rounded-none border px-6 py-3 text-sm font-medium transition-all ${
                      index % 2 === 0
                        ? "border-black bg-black text-white hover:bg-transparent hover:text-black"
                        : "border-white bg-white text-black hover:bg-transparent hover:text-white"
                    }`}
                  >
                    Solicitar este servicio
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Proceso de Trabajo */}
      <section className="bg-white py-16 text-black">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 h-px w-24 bg-black/30" />
            <h2 className="text-3xl font-bold md:text-4xl">Nuestro Proceso</h2>
            <p className="mx-auto mt-4 max-w-2xl text-black/70">
              Metodología de trabajo estructurada para garantizar resultados excepcionales en cada proyecto.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Conceptualización",
                description: "Analizamos tus necesidades y desarrollamos conceptos iniciales que reflejen tu visión.",
              },
              {
                step: "02",
                title: "Diseño",
                description:
                  "Creamos diseños detallados con un enfoque futurista y geométrico que optimiza cada espacio.",
              },
              {
                step: "03",
                title: "Desarrollo",
                description: "Elaboramos documentación técnica completa y gestionamos permisos para la ejecución.",
              },
              {
                step: "04",
                title: "Implementación",
                description:
                  "Supervisamos la construcción para garantizar que cada detalle se ejecute según lo diseñado.",
              },
            ].map((proceso) => (
              <div
                key={proceso.step}
                className="group border border-black/10 bg-white p-6 transition-all hover:border-black/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center border border-black/10 group-hover:border-black/30">
                  <span className="text-xl font-light">{proceso.step}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">{proceso.title}</h3>
                <p className="text-black/70">{proceso.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="border border-white/20 bg-white/5 p-8 backdrop-blur-sm md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">¿Listo para transformar tu espacio?</h2>
                <p className="mt-4 text-white/70">
                  Contáctanos hoy para discutir cómo podemos ayudarte a crear espacios futuristas y funcionales que
                  superen tus expectativas.
                </p>
              </div>
              <div className="flex flex-col items-start justify-center space-y-4">
                <Link
                  href="/contacto"
                  className="group flex items-center gap-2 rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-black hover:text-white"
                >
                  Solicitar una consulta
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/proyectos"
                  className="flex items-center gap-2 rounded-none border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
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

