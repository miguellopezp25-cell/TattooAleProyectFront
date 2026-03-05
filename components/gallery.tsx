"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const works = [
  { src: "/images/Heart.png", alt: "Tatuaje de Corazon", style: "Japones" },
  { src: "/images/Lines.png", alt: "Tatuaje floral geometrico", style: "Floral" },
  { src: "/images/lenes.png", alt: "Tatuaje neo tradicional", style: "Neo Tradicional" },
  { src: "/images/Spider.png", alt: "Tatuaje de Araña", style: "Minimalista" },
  { src: "/images/Sword.png", alt: "Tatuaje Line Sword", style: "Blackwork" },
  { src: "/images/anime.png", alt: "Tatuaje realista de Anime", style: "Realismo" },
]

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="galeria" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.3em] text-primary text-center">
          Portafolio
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground text-center mt-3 text-balance">
          Nuestros Trabajos
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Cada pieza es unica, creada con pasion y dedicacion para reflejar tu personalidad.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.map((w, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="group relative aspect-square overflow-hidden rounded-sm bg-card cursor-pointer"
            >
              <Image
                src={w.src}
                alt={w.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-colors duration-300 flex items-end justify-start p-6">
                <span className="text-sm uppercase tracking-widest text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {w.style}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-label="Vista de imagen ampliada"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative w-full max-w-3xl aspect-square">
            <Image
              src={works[selected].src}
              alt={works[selected].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
