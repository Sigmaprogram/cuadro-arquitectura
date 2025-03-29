import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 border-2 border-white bg-transparent" />
              <span className="text-xl font-light tracking-wider">CUADRO</span>
            </div>
            <p className="mt-4 text-white/70">
              Transformando espacios con diseños futuristas y geométricos en San Pedro de Macorís.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Enlaces</h3>
            <ul className="space-y-2 text-white/70">
              {[
                { name: "Inicio", path: "/" },
                { name: "Proyectos", path: "/proyectos" },
                { name: "Servicios", path: "/servicios" },
                { name: "Sobre Nosotros", path: "/sobre-nosotros" },
                { name: "Contacto", path: "/contacto" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="transition-colors hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Servicios</h3>
            <ul className="space-y-2 text-white/70">
              {["Diseño Arquitectónico", "Planificación Urbana", "Renovación", "Consultoría", "Diseño Interior"].map(
                (item) => (
                  <li key={item}>
                    <Link href="/servicios" className="transition-colors hover:text-white">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Conecta con nosotros</h3>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="grid h-10 w-10 place-items-center border border-white/20 bg-white/5 transition-colors hover:border-white/40 hover:bg-white/10"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-5 w-5"></div>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="mb-2 text-sm font-medium">Suscríbete a nuestro boletín</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full border border-white/20 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-white/40"
                />
                <button
                  type="submit"
                  className="border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} Cuadro Arquitectura. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

