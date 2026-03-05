import React from 'react'

export const QuickLinks = () => {
  return (
              <div>
            <h4 className="text-sm uppercase tracking-widest text-foreground mb-4">Enlaces</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <a href="#galeria" className="hover:text-primary transition-colors">Galeria</a>
              </li>
              <li>
                <a href="#estilos" className="hover:text-primary transition-colors">Estilos</a>
              </li>
              <li>
                <a href="#estudio" className="hover:text-primary transition-colors">Estudio</a>
              </li>
              <li>
                <a href="#agendar" className="hover:text-primary transition-colors">Agendar Cita</a>
              </li>
            </ul>
          </div>
    
  )
}
