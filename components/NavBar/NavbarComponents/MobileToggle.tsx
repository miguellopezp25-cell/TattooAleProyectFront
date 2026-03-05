import { useState } from "react"
import { Menu, X } from "lucide-react"


// Recibimos isOpen y la función toggle del padre (Navbar)
export const MobileToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick} // Usamos la función que viene del Navbar
      className="md:hidden text-foreground p-2"
      aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
    >
      {/* Si el padre dice que está abierto, muestra X, si no, Menu */}
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  )
}