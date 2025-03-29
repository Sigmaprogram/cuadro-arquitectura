"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Servicios", path: "/servicios" },
    { name: "Sobre Nosotros", path: "/sobre-nosotros" },
    { name: "Contacto", path: "/contacto" },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 border-2 border-white bg-transparent" />
            <span className="text-xl font-light tracking-wider">CUADRO ARQUITECTURA</span>
          </Link>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`text-sm uppercase tracking-wider transition-colors hover:text-white ${
                    isActive(item.path) ? "text-white" : "text-white/70"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="grid h-10 w-10 place-items-center rounded-none border border-white/20 bg-white/5 md:hidden">
              <span className="sr-only">Menu</span>
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="border-r border-white/10 bg-black text-white">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <div className="h-8 w-8 border-2 border-white bg-transparent" />
              <span className="text-xl font-light tracking-wider">CUADRO</span>
            </Link>
            <div className="mt-8 grid gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-lg font-medium transition-colors hover:text-white ${
                    isActive(item.path) ? "text-white" : "text-white/70"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

