import React, { useState } from 'react'
import { NavLinks } from '../navbar'

export const MobileMenu = () => {
          const [open, setOpen] = useState(false)
    
  return (
  <>
        {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {NavLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#agendar"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center px-5 py-2 text-sm uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-sm"
          >
            Reservar Cita
          </a>
        </div>
      )}
  </>
  )
}
