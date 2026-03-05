// NavbarComponents/MobileMenu.tsx
import { NavLinks } from "../navbar"

export const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-background border-t border-border p-6">
      <ul className="flex flex-col gap-6">
        {NavLinks.map((link) => (
          <li key={link.label}>
            {/* EL LABEL DEL PADRE */}
            <a href={link.href} className="text-xl uppercase tracking-widest text-foreground">
              {link.label}
            </a>
            
            {/* LOS LABELS DE LOS HIJOS (Sub-links de Galería) */}
            {link.children && (
              <ul className="pl-4 mt-4 flex flex-col gap-3">
                {link.children.map(child => (
                  <li key={child.label}>
                    <a href={child.href} className="text-muted-foreground text-sm uppercase">
                       {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}