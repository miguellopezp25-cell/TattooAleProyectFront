import React from 'react'

export const Overlay = () => {
  return (
    <>
    <div className="absolute inset-0 bg-background/75" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
          Estudio de Tatuajes Premium
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight text-balance">
          Tu Piel,
          <br />
          Nuestro Lienzo
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-muted-foreground text-lg leading-relaxed">
          Creamos arte permanente que cuenta tu historia. Cada trazo es una obra maestra
          personalizada para ti.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#agendar"
            className="inline-flex items-center px-8 py-3 text-sm uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-sm"
          >
            Agendar Cita
          </a>
          <a
            href="#galeria"
            className="inline-flex items-center px-8 py-3 text-sm uppercase tracking-widest border border-border text-foreground hover:border-primary hover:text-primary transition-colors rounded-sm"
          >
            Ver Trabajos
          </a>
        </div>
      </div>
    
    </>
  )
}
