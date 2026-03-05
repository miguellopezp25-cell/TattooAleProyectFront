import React from 'react'
import { NavLinks } from '../navbar'

export const Deskop = () => {
  return (
    <div className="hidden md:flex items-center gap-8">
      <ul className="flex items-center gap-8">
        {NavLinks.map((l) => (
          <li key={l.label} className="relative group">
            {/* Si NO tiene hijos, es un link normal */}
            {!l.children ? (
              <a href={l.href} className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                {l.label} {/* <--- AQUÍ SE PONE EL NOMBRE */}
              </a>
            ) : (
              /* Si SI tiene hijos (como Galería), hacemos el dropdown */
              <div className="relative">
                <button className="text-sm uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  {l.label} {/* <--- AQUÍ APARECE "GALERIA" */}
                </button>
                
                {/* Esto es lo que se despliega al pasar el mouse */}
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <ul className="bg-black border border-white/10 p-4 min-w-[200px] flex flex-col gap-2">
                    {l.children.map((hijo) => (
                      <li key={hijo.label}>
                        <a href={hijo.href} className="text-xs uppercase text-muted-foreground hover:text-primary">
                          {hijo.label} {/* <--- AQUÍ APARECEN LOS ESTILOS DENTRO DE GALERIA */}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}