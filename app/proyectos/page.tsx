import { ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import PageHeader from "@/components/page-header";
import { proyectos } from "@/lib/data";

export default function ProyectosPage() {
  // Categorías únicas para el filtro
  const categories = Array.from(new Set(proyectos.map((p) => p.category)));

  return (
    <main>
      <PageHeader
        title="Nuestros Proyectos"
        description="Explorando el futuro de la arquitectura en San Pedro de Macorís a través de diseños innovadores y geométricos."
      />

      {/* Proyectos Destacados */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <div className="mb-4 h-px w-24 bg-white/30" />
            <h2 className="text-3xl font-bold md:text-4xl">
              Proyectos Destacados
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Nuestras obras más emblemáticas que están transformando el paisaje
              urbano de San Pedro de Macorís.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {proyectos
              .filter((p) => p.featured)
              .map((proyecto) => (
                <div
                  key={proyecto.id}
                  className="group overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=500&width=500&text=${encodeURIComponent(
                        proyecto.title
                      )}`}
                      alt={proyecto.title}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 bg-black/70 p-2 backdrop-blur-sm">
                      <span className="text-xs font-medium">
                        {proyecto.category}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-white/20 p-6">
                    <h3 className="text-xl font-bold">{proyecto.title}</h3>
                    <p className="mt-2 text-white/70">{proyecto.description}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-white/60" />
                      <span className="text-sm text-white/60">
                        {proyecto.location}
                      </span>
                    </div>
                    <div className="mt-6 flex justify-between">
                      <span className="text-sm text-white/60">
                        {proyecto.year}
                      </span>
                      <Link
                        href={`/proyectos/${proyecto.id}`}
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
        </div>
      </section>

      {/* Filtro de Proyectos */}
      <section className="bg-white py-16 text-black">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <div className="mb-4 h-px w-24 bg-black/30" />
            <h2 className="text-3xl font-bold md:text-4xl">
              Todos los Proyectos
            </h2>
            <p className="mt-4 max-w-2xl text-black/70">
              Explore nuestra colección completa de proyectos arquitectónicos en
              San Pedro de Macorís.
            </p>
          </div>

          {/* Filtros */}
          <div className="mb-8 flex flex-wrap gap-4">
            <button className="border border-black bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90">
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="border border-black/10 px-4 py-2 text-sm font-medium transition-colors hover:border-black/30 hover:bg-black/5"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Lista de Proyectos */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {proyectos.map((proyecto) => (
              <div
                key={proyecto.id}
                className="group overflow-hidden border border-black/10 bg-white transition-all hover:border-black/30"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=${encodeURIComponent(
                      proyecto.title
                    )}`}
                    alt={proyecto.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 bg-white/70 p-2 backdrop-blur-sm">
                    <span className="text-xs font-medium text-black">
                      {proyecto.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{proyecto.title}</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-black/60" />
                    <span className="text-sm text-black/60">
                      {proyecto.location}
                    </span>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <span className="text-sm text-black/60">
                      {proyecto.year}
                    </span>
                    <Link
                      href={`/proyectos/${proyecto.id}`}
                      className="group inline-flex items-center gap-1 text-sm font-medium text-black"
                    >
                      Ver detalles
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
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
                <h2 className="text-3xl font-bold md:text-4xl">
                  ¿Tienes un proyecto en mente?
                </h2>
                <p className="mt-4 text-white/70">
                  Estamos listos para transformar tus ideas en realidad. Nuestro
                  equipo de arquitectos está preparado para crear espacios
                  futuristas y funcionales que superen tus expectativas.
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
    </main>
  );
}
