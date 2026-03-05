import { Send } from "lucide-react"

// Clases reutilizables
const inputClasses = "w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"

interface BookingFieldsProps {
    form: any
    selectedDate: string
    selectedTime: string
    setSelectedDate: (d: string) => void
    setSelectedTime: (t: string) => void
    onChange: (e: React.ChangeEvent<any>) => void
    isValid: boolean
    tattooStyles: string[]
    bodyParts: string[]
    timeSlots: string[]
    todayStr: string
}

export function BookingFields({
    form,
    selectedDate,
    selectedTime,
    setSelectedDate,
    setSelectedTime,
    onChange,
    isValid,
    tattooStyles,
    bodyParts,
    timeSlots,
    todayStr
}: BookingFieldsProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
            {/* Columna Izquierda: Datos de Cita */}
            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Fecha *</label>
                        <input type="date" min={todayStr} value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className={inputClasses} required />
                    </div>
                    <div>
                        <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Hora *</label>
                        <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className={inputClasses} required>
                            <option value="" disabled>Selecciona hora</option>
                            {timeSlots.map(t => <option key={t} value={t}>{t} hrs</option>)}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input name="nombre" placeholder="Nombre completo" value={form.nombre} onChange={onChange} className={inputClasses} required />
                    <input name="telefono" placeholder="Teléfono" value={form.telefono} onChange={onChange} className={inputClasses} required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <select name="estilo" value={form.estilo} onChange={onChange} className={inputClasses} required>
                        <option value="" disabled>Estilo</option>
                        {tattooStyles.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <select name="zona" value={form.zona} onChange={onChange} className={inputClasses} required>
                        <option value="" disabled>Zona</option>
                        {bodyParts.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                </div>
            </div>

            {/* Columna Derecha: Descripción y Envío */}
            <div className="flex flex-col gap-5">
                <textarea name="descripcion" rows={4} placeholder="Cuéntanos tu idea..." value={form.descripcion} onChange={onChange} className={`${inputClasses} resize-none`} required />

                <button
                    type="submit"
                    disabled={!isValid}
                    className="mt-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary/90 transition-all rounded-md disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    <Send className="h-4 w-4" />
                    Enviar por WhatsApp
                </button>
            </div>
        </div>
    )
}