import { MapPin, Phone, Clock } from "lucide-react"

export const Contact = () => {
    return (
        <div>
            <h4 className="text-sm uppercase tracking-widest text-foreground mb-4">Contacto</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    +52 33 2611 6812
                </li>
                <li className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    San Antonio, Jalisco
                </li>
                <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary shrink-0" />
                    Lun - Sab: 11:00 - 13:00 / 16:00 - 19:00
                </li>
            </ul>
        </div>
    )
}
