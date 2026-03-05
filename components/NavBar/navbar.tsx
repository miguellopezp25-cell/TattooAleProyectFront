"use client"

import { useState } from "react"
import { Deskop } from "./NavbarComponents/Deskop"
import { MobileToggle } from "./NavbarComponents/MobileToggle"
import { MobileMenu } from "./NavbarComponents/MobileMenu"

export const NavLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Galeria", href: "#galeria" },
  { label: "Estilos", href: "#estilos" },
  { label: "Estudio", href: "#estudio" },
  { label: "Agendar", href: "#agendar" },
]

export function Navbar() {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#inicio" className="font-serif text-2xl tracking-widest text-primary">
          TATTOOALE
        </a>
       {/* Desktop */}
        <Deskop />
        {/* Mobile toggle */}
        <MobileToggle/>
      </div>
      {/* Mobile menu */}
      <MobileMenu />
    </nav>
  )
}
