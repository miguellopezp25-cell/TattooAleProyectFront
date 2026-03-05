import { CalendarDays } from "lucide-react"

interface CalendarSectionProps {
  url: string
}

export function CalendarSection({ url }: CalendarSectionProps) {
  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 mb-4">
        <CalendarDays className="h-4 w-4 text-primary" />
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Disponibilidad en tiempo real
        </p>
      </div>
      <div className="relative w-full rounded-md overflow-hidden border border-border bg-secondary">
        <iframe
          src={url}
          title="Calendario de disponibilidad del estudio"
          className="w-full h-[420px] md:h-[500px]"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
      <p className="mt-2 text-xs text-muted-foreground/50 text-center">
        Los bloques ocupados muestran horarios no disponibles. Elige un
        horario libre y complétalo en el formulario.
      </p>
    </div>
  )
}