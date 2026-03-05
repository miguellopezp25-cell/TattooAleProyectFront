"use client"

import { useState } from "react"
import { Deskop } from "./NavbarComponents/Deskop"
import { MobileToggle } from "./NavbarComponents/MobileToggle"
import { MobileMenu } from "./NavbarComponents/MobileMenu"

// 1. Definimos los links con sus hijos
export const NavLinks = [
  { label: "Inicio", href: "#inicio" },
  { 
    label: "Galeria", 
    children: [
      { label: "Galeria Completa",  href: "#galeria" },
      { label: "Neotribal", href: "#neotribal" },
      { label: "Blackwork", href: "#blackwork" },
      { label: "Linework", href: "#linework" },
      { label: "Minimalista", href: "#minimalista" },
      { label: "Dotwork", href: "#dotwork" },
      { label: "Blackout", href: "#blackout" },
    ],
  },
  { label: "Estilos", href: "#estilos" },
  { label: "Estudio", href: "#estudio" },
  { label: "Agendar", href: "#agendar" },
]

export function Navbar() {
  // 2. Este estado controla si el menú de celular está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <a href="#inicio" className="font-serif text-2xl tracking-widest text-primary">
          TATTOOALE
        </a>

        {/* 3. MENU DESKTOP (PC) */}
        {/* Aquí ya no necesitas pasarle nada porque Deskop importa NavLinks directamente */}
        <Deskop />

        {/* 4. BOTON CELULAR (Hamburguesa) */}
        {/* Le pasamos el estado para que sepa si ponerse como "X" o como "≡" */}
        <div className="md:hidden">
            <MobileToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      {/* 5. MENU DESPLEGABLE CELULAR */}
      {/* Solo se va a ver cuando isOpen sea true */}
      <MobileMenu isOpen={isOpen} />
    </nav>
  )
}