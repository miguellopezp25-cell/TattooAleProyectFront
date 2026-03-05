"use client"

import { useState } from "react"
import { Send, CalendarDays } from "lucide-react"

const tattooStyles = [
  "Realismo",
  "Japones",
  "Floral",
  "Neo Tradicional",
  "Fine Line",
  "Geometrico",
  "Blackwork",
  "Acuarela",
  "Otro",
]

const bodyParts = [
  "Brazo",
  "Antebrazo",
  "Pierna",
  "Espalda",
  "Pecho",
  "Costillas",
  "Mano",
  "Cuello",
  "Tobillo",
  "Otro",
]

const timeSlots = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
]

const WHATSAPP_NUMBER = "+523326116812" // Replace with your actual number

/* ------------------------------------------------------------------ */
/*  Cambia esta URL por la de tu Google Calendar publico.              */
/*  Google Calendar > Configuracion > Integrar calendario              */
/*  > Copia la URL del iframe "Insertar codigo"                        */
/* ------------------------------------------------------------------ */
const GOOGLE_CALENDAR_EMBED_URL = "https://calendar.google.com/calendar/embed?src=ffc5d2e18dcd6ab71d0c1f3e3c99d00fbf734ce59aaac5ecc0294a33ed3bebf8%40group.calendar.google.com&ctz=America%2FMexico_City"
export function BookingForm() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    estilo: "",
    zona: "",
    tamano: "",
    descripcion: "",
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Get today's date string for min attribute
  const todayStr = new Date().toISOString().split("T")[0]

  const isFormValid =
    form.nombre &&
    form.telefono &&
    selectedDate &&
    selectedTime &&
    form.estilo &&
    form.zona &&
    form.descripcion

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime) return

    const dateObj = new Date(selectedDate + "T12:00:00")
    const fechaFormatted = dateObj.toLocaleDateString("es-MX", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })

    const message = `Hola! Quiero agendar una cita de tatuaje:

    *Nombre:* ${form.nombre}
    *Telefono:* ${form.telefono}
    *Fecha:* ${fechaFormatted}
    *Hora:* ${selectedTime}
    *Estilo:* ${form.estilo}
    *Zona del cuerpo:* ${form.zona}
    *Tamano aprox:* ${form.tamano}
    *Descripcion:* ${form.descripcion}`

    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank")
  }

  const inputClasses =
    "w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"

  return (
    <section id="agendar" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Reservaciones
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-3 text-balance">
            Agenda Tu Cita
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Consulta nuestra disponibilidad en el calendario, elige tu fecha y
            hora, y envianos tu solicitud por WhatsApp.
          </p>
        </div>

        {/* Google Calendar Embed */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-4">
            <CalendarDays className="h-4 w-4 text-primary" />
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Disponibilidad en tiempo real
            </p>
          </div>
          <div className="relative w-full rounded-md overflow-hidden border border-border bg-secondary">
            <iframe
              src={GOOGLE_CALENDAR_EMBED_URL}
              title="Calendario de disponibilidad del estudio"
              className="w-full h-[420px] md:h-[500px]"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground/50 text-center">
            Los bloques ocupados muestran horarios no disponibles. Elige un
            horario libre y completalo en el formulario.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="flex flex-col gap-5">
              {/* Fecha + Hora */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="fecha"
                    className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block"
                  >
                    Fecha deseada *
                  </label>
                  <input
                    id="fecha"
                    type="date"
                    required
                    min={todayStr}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="hora"
                    className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block"
                  >
                    Hora deseada *
                  </label>
                  <select
                    id="hora"
                    required
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className={inputClasses}
                  >
                    <option value="" disabled>
                      Selecciona hora
                    </option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>
                        {t} hrs
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* nombre + telefono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="nombre"
                    className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block"
                  >
                    Nombre completo *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefono"
                    className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block"
                  >
                    Telefono *
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    placeholder="+52 123 456 7890"
                    value={form.telefono}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* estilo + zona */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="estilo"
                    className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block"
                  >
                    Estilo de tatuaje *
                  </label>
                  <select
                    id="estilo"
                    name="estilo"
                    required
                    value={form.estilo}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="" disabled>
                      Selecciona un estilo
                    </option>
                    {tattooStyles.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="zona"
                    className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block"
                  >
                    Zona del cuerpo *
                  </label>
                  <select
                    id="zona"
                    name="zona"
                    required
                    value={form.zona}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="" disabled>
                      Selecciona zona
                    </option>
                    {bodyParts.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tamano */}
              <div>
                <label
                  htmlFor="tamano"
                  className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block"
                >
                  Tamano aproximado
                </label>
                <input
                  id="tamano"
                  name="tamano"
                  type="text"
                  placeholder="Ej: 10x10 cm, medio brazo, etc."
                  value={form.tamano}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-5">
              {/* Descripcion */}
              <div>
                <label
                  htmlFor="descripcion"
                  className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block"
                >
                  Describe tu idea *
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  required
                  rows={4}
                  placeholder="Cuentanos sobre el diseno que tienes en mente..."
                  value={form.descripcion}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!isFormValid}
                className="mt-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary/90 transition-all rounded-md cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-primary"
              >
                <Send className="h-4 w-4" />
                Enviar por WhatsApp
              </button>

              <p className="text-[0.7rem] text-muted-foreground/60 text-center leading-relaxed">
                Al enviar, se abrira WhatsApp con tu solicitud pre-llenada. Te
                confirmaremos la disponibilidad en menos de 24 horas.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
