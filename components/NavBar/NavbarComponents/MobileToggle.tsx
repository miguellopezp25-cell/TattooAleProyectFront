import { useState } from "react"
import { Menu, X } from "lucide-react"


export const MobileToggle = () => {
      const [open, setOpen] = useState(false)
    
  return (
      <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
  )
}
