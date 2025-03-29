import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Footer from "@/components/footer"
import Header from "@/components/header"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cuadro Arquitectura | Transformando San Pedro de Macorís",
  description:
    "Estudio de arquitectura especializado en diseños futuristas y geométricos para transformar San Pedro de Macorís.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'