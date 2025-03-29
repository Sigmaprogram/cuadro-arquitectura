"use client"

import type React from "react"

import { MapPin, Mail, Phone, Clock, Send } from "lucide-react"
import { useState } from "react"

import PageHeader from "@/components/page-header"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
    tipo: "consulta",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log(formData)
    alert("Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.")
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
      tipo: "consulta",
    })
  }

  return (
    <main>
      <PageHeader
        title="Contacto"
        description="Estamos listos para transformar tus ideas en realidad. Contáctanos para comenzar tu proyecto arquitectónico."
      />

      {/* Información de Contacto y Formulario */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-8">
                <div className="mb-4 h-px w-24 bg-white/30" />
                <h2 className="text-3xl font-bold md:text-4xl">Ponte en contacto</h2>
                <p className="mt-4 max-w-md text-white/70">
                  Estamos aquí para responder tus preguntas y ayudarte a transformar tus espacios con nuestro enfoque
                  futurista y geométrico.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center border border-white/20 bg-white/5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Dirección</div>
                    <div className="text-white/70">
                      Calle Principal #123, San Pedro de Macorís, República Dominicana
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center border border-white/20 bg-white/5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Teléfono</div>
                    <div className="text-white/70">+1 (809) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center border border-white/20 bg-white/5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-white/70">info@cuadroarquitectura.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center border border-white/20 bg-white/5">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Horario</div>
                    <div className="text-white/70">Lunes a Viernes: 9:00 AM - 6:00 PM</div>
                    <div className="text-white/70">Sábados: 9:00 AM - 1:00 PM</div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="mb-4 text-xl font-bold">Síguenos</h3>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="grid h-10 w-10 place-items-center border border-white/20 bg-white/5 transition-colors hover:border-white/40 hover:bg-white/10"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="h-5 w-5"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-bold">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium">
                      Nombre completo
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-white/20 bg-transparent py-2 text-white outline-none transition focus:border-white"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-white/20 bg-transparent py-2 text-white outline-none transition focus:border-white"
                      placeholder="Tu email"
                    />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full border-b border-white/20 bg-transparent py-2 text-white outline-none transition focus:border-white"
                      placeholder="Tu teléfono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="tipo" className="text-sm font-medium">
                      Tipo de consulta
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                      className="w-full border-b border-white/20 bg-transparent py-2 text-white outline-none transition focus:border-white"
                    >
                      <option value="consulta" className="bg-black">
                        Consulta general
                      </option>
                      <option value="proyecto" className="bg-black">
                        Nuevo proyecto
                      </option>
                      <option value="colaboracion" className="bg-black">
                        Colaboración
                      </option>
                      <option value="empleo" className="bg-black">
                        Oportunidades de empleo
                      </option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="asunto" className="text-sm font-medium">
                    Asunto
                  </label>
                  <input
                    id="asunto"
                    name="asunto"
                    type="text"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-white/20 bg-transparent py-2 text-white outline-none transition focus:border-white"
                    placeholder="Asunto de tu mensaje"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-white/20 bg-transparent py-2 text-white outline-none transition focus:border-white"
                    placeholder="Tu mensaje"
                  />
                </div>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-transparent hover:text-white"
                >
                  Enviar Mensaje
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 bg-white text-black">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 h-px w-24 bg-black/30" />
            <h2 className="text-3xl font-bold md:text-4xl">Encuéntranos</h2>
            <p className="mx-auto mt-4 max-w-2xl text-black/70">
              Visita nuestras oficinas en San Pedro de Macorís para conocer más sobre nuestros proyectos y servicios.
            </p>
          </div>

          <div className="border border-black/10 p-2">
            <div className="aspect-[16/9] w-full bg-black/5">
              {/* Aquí iría un mapa interactivo */}
              <div className="flex h-full w-full items-center justify-center">
                <p className="text-black/70">Mapa de ubicación - San Pedro de Macorís, República Dominicana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <div className="mb-4 h-px w-24 bg-white/30" />
            <h2 className="text-3xl font-bold md:text-4xl">Preguntas Frecuentes</h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Respuestas a las preguntas más comunes sobre nuestros servicios y proceso de trabajo.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                question: "¿Cuál es el proceso para iniciar un proyecto con Cuadro Arquitectura?",
                answer:
                  "El proceso comienza con una consulta inicial donde discutimos tus necesidades y visión. Luego, desarrollamos un concepto preliminar y, una vez aprobado, avanzamos con el diseño detallado y la implementación.",
              },
              {
                question: "¿Trabajan en proyectos fuera de San Pedro de Macorís?",
                answer:
                  "Sí, aunque nuestro enfoque principal es la transformación de San Pedro de Macorís, también trabajamos en proyectos en otras localidades de República Dominicana y el Caribe.",
              },
              {
                question: "¿Cuánto tiempo toma completar un proyecto arquitectónico?",
                answer:
                  "El tiempo varía según la complejidad y escala del proyecto. Un proyecto residencial puede tomar de 3 a 6 meses en la fase de diseño, mientras que proyectos más grandes pueden requerir más tiempo.",
              },
              {
                question: "¿Ofrecen servicios de supervisión durante la construcción?",
                answer:
                  "Sí, ofrecemos servicios completos que incluyen supervisión durante la fase de construcción para garantizar que el proyecto se ejecute según las especificaciones de diseño.",
              },
              {
                question: "¿Cómo incorporan la sostenibilidad en sus diseños?",
                answer:
                  "Integramos principios de sostenibilidad desde la fase conceptual, considerando orientación solar, ventilación natural, eficiencia energética y selección de materiales sostenibles.",
              },
              {
                question: "¿Tienen un estilo arquitectónico definido?",
                answer:
                  "Nuestro estilo se caracteriza por diseños futuristas con elementos geométricos cuadrados, pero adaptamos nuestro enfoque según las necesidades específicas de cada cliente y proyecto.",
              },
            ].map((faq, index) => (
              <div key={index} className="border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

