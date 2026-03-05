"use client"

import React, { useState, useEffect } from 'react'
import Image from "next/image"
import { X } from "lucide-react"

// --- CATEGORÍAS SEGÚN TU MENÚ ---

const worksNeotribal = [
  { src: "/images/4.jpeg",  alt: "Neotribal Neck", style: "Neotribal" },
  { src: "/images/12.jpeg", alt: "Neotribal Arm", style: "Neotribal" },
  { src: "/images/16.jpeg", alt: "Neotribal Hand", style: "Neotribal" },
  { src: "/images/21.jpeg", alt: "Neotribal Spider", style: "Neotribal" },
  { src: "/images/32.jpeg", alt: "Neotribal Flame", style: "Neotribal" },
  { src: "/images/39.jpeg", alt: "Neotribal Forearm", style: "Neotribal" },
]

const worksBlackwork = [
  { src: "/images/6.jpeg",  alt: "Blackwork Scream", style: "Blackwork" },
  { src: "/images/9.jpeg",  alt: "Blackwork Scythe", style: "Blackwork" },
  { src: "/images/11.jpeg", alt: "Blackwork Skeleton", style: "Blackwork" },
  { src: "/images/13.jpeg", alt: "Blackwork Dagger", style: "Blackwork" },
  { src: "/images/18.jpeg", alt: "Blackwork Heart", style: "Blackwork" },
  { src: "/images/22.jpeg", alt: "Blackwork Wolf", style: "Blackwork" },
  { src: "/images/27.jpeg", alt: "Blackwork Creature", style: "Blackwork" },
]

const worksLinework = [
  { src: "/images/3.jpeg",  alt: "Linework Vertical", style: "Linework" },
  { src: "/images/5.jpeg",  alt: "Linework Gothic", style: "Linework" },
  { src: "/images/8.jpeg",  alt: "Linework Assassin", style: "Linework" },
  { src: "/images/14.jpeg", alt: "Linework Text", style: "Linework" },
  { src: "/images/24.jpeg", alt: "Linework Name", style: "Linework" },
  { src: "/images/26.jpeg", alt: "Linework Blessed", style: "Linework" },
  { src: "/images/36.jpeg", alt: "Linework Arm", style: "Linework" },
  { src: "/images/38.jpeg", alt: "Linework Loyal", style: "Linework" },
  { src: "/images/42.jpeg", alt: "Linework Kanji", style: "Linework" },
]

const worksMinimalista = [
  { src: "/images/1.jpeg",  alt: "Minimalista Butterfly", style: "Minimalista" },
  { src: "/images/2.jpeg",  alt: "Minimalista Flowers", style: "Minimalista" },
  { src: "/images/15.jpeg", alt: "Minimalista Quote", style: "Minimalista" },
  { src: "/images/18.jpeg", alt: "Minimalista Heart", style: "Minimalista" },
  { src: "/images/28.jpeg", alt: "Minimalista Dream", style: "Minimalista" },
  { src: "/images/31.jpeg", alt: "Minimalista Cross", style: "Minimalista" },
  { src: "/images/34.jpeg", alt: "Minimalista Insects", style: "Minimalista" },
  { src: "/images/41.jpeg", alt: "Minimalista Sword", style: "Minimalista" },
  { src: "/images/43.jpeg", alt: "Minimalista Line", style: "Minimalista" },
]

const worksDotwork = [
  { src: "/images/10.jpeg", alt: "Dotwork Statue", style: "Dotwork" },
  { src: "/images/17.jpeg", alt: "Dotwork Abstract", style: "Dotwork" },
  { src: "/images/30.jpeg", alt: "Dotwork Eye", style: "Dotwork" },
  { src: "/images/40.jpeg", alt: "Dotwork Portrait", style: "Dotwork" },
]

const worksBlackout = [
  { src: "/images/7.jpeg",  alt: "Blackout 1969", style: "Blackout" },
  { src: "/images/20.jpeg", alt: "Blackout Panther", style: "Blackout" },
  { src: "/images/23.jpeg", alt: "Blackout Angel", style: "Blackout" },
  { src: "/images/25.jpeg", alt: "Blackout Solid", style: "Blackout" },
  { src: "/images/37.jpeg", alt: "Blackout Script", style: "Blackout" },
]

// UNIFICACIÓN TOTAL
const allWorks = [
  ...worksNeotribal,
  ...worksBlackwork,
  ...worksLinework,
  ...worksMinimalista,
  ...worksDotwork,
  ...worksBlackout
]

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)
  const [filter, setFilter] = useState("Todos")

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase()
      
      // Mapeo exacto a los nombres de tu menú
      const map: Record<string, string> = {
        "neotribal": "Neotribal",
        "blackwork": "Blackwork",
        "linework": "Linework",
        "minimalista": "Minimalista",
        "dotwork": "Dotwork",
        "blackout": "Blackout",
        "galeria-completa": "Todos",
        "galeria": "Todos"
      }

      setFilter(map[hash] || "Todos")
    }

    window.addEventListener("hashchange", handleHashChange)
    handleHashChange()
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const filteredWorks = filter === "Todos" 
    ? allWorks 
    : allWorks.filter(w => w.style === filter)

  return (
    <section id="galeria" className="py-24 px-6 bg-black">
      <div className="mx-auto max-w-7xl">
        
        <div className="text-center mb-16">
          <p className="text-primary text-xs uppercase tracking-[0.4em] mb-4">Portafolio</p>
          <h2 className="font-serif text-5xl text-white uppercase tracking-tighter">
            {filter === "Todos" ? "Galería Completa" : filter}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {filteredWorks.map((w, i) => (
            <button
              key={`${w.src}-${i}`}
              onClick={() => setSelected(i)}
              className="group relative aspect-square overflow-hidden bg-zinc-900"
            >
              <Image 
                src={w.src} 
                alt={w.alt} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs uppercase tracking-[0.2em] border border-white/20 px-4 py-2">
                  {w.style}
                </span>
              </div>
            </button>
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <p className="text-center text-muted-foreground mt-20 uppercase tracking-widest text-sm">
            Próximamente más piezas de {filter}
          </p>
        )}
      </div>

      {/* LIGHTBOX */}
      {selected !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <button className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors">
            <X size={48} strokeWidth={1} />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={filteredWorks[selected].src} 
              alt="Zoom" 
              fill 
              className="object-contain" 
            />
          </div>
        </div>
      )}
    </section>
  )
}