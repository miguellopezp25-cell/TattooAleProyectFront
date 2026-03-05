import React from 'react'
import { NavLinks } from '../navbar'

export const Deskop = () => {
  return (
  <>
  
   
        <ul className="hidden md:flex items-center gap-8">
          {NavLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#agendar"
          className="hidden md:inline-flex items-center px-5 py-2 text-sm uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-sm"
        >
          Reservar Cita
        </a>
  </>
  )
}
