"use client"

import { useState, useRef, useCallback } from "react"
import { Send, Upload, X, ImageIcon, CalendarDays } from "lucide-react"
import Image from "next/image"

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

const WHATSAPP_NUMBER = "521234567890" // Replace with your actual number

/* ------------------------------------------------------------------ */
/*  Cambia esta URL por la de tu Google Calendar publico.              */
/*  Google Calendar > Configuracion > Integrar calendario              */
/*  > Copia la URL del iframe "Insertar codigo"                        */
/* ------------------------------------------------------------------ */
const GOOGLE_CALENDAR_EMBED_URL =
  "https://calendar.google.com/calendar/embed?src=en.mexican%23holiday%40group.v.calendar.google.com&ctz=America%2FMexico_City&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK"

export function BookingForm() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [referenceImages, setReferenceImages] = useState<
    { file: File; preview: string }[]
  >([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    estilo: "",
    zona: "",
    tamano: "",
    descripcion: "",
  })

  const MAX_FILES = 5

  const addFiles = useCallback(
    (files: FileList | File[]) => {
      const newFiles = Array.from(files)
        .filter((f) => f.type.startsWith("image/"))
        .slice(0, MAX_FILES - referenceImages.length)
        .map((file) => ({
          file,
          preview: URL.createObjectURL(file),
        }))
      setReferenceImages((prev) => [...prev, ...newFiles].slice(0, MAX_FILES))
    },
    [referenceImages.length]
  )

  const removeImage = useCallback((index: number) => {
    setReferenceImages((prev) => {
      const removed = prev[index]
      URL.revokeObjectURL(removed.preview)
      return prev.filter((_, i) => i !== index)
    })
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      if (e.dataTransfer.files) addFiles(e.dataTransfer.files)
    },
    [addFiles]
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime) return

    const dateObj = new Date(selectedDate + "T12:00:00")
    const fechaFormatted = dateObj.toLocaleDateString("es-MX", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })

    const imageNote =
      referenceImages.length > 0
        ? `\n*Imagenes de referencia:* ${referenceImages.length} imagen(es) adjunta(s) — las envio en el siguiente mensaje`
        : ""

    const message = `Hola! Quiero agendar una cita de tatuaje:

*Nombre:* ${form.nombre}
*Telefono:* ${form.telefono}
*Fecha:* ${fechaFormatted}
*Hora:* ${selectedTime}
*Estilo:* ${form.estilo}
*Zona del cuerpo:* ${form.zona}
*Tamano aprox:* ${form.tamano}
*Descripcion:* ${form.descripcion}${imageNote}`

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

              {/* Reference Images Upload */}
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  Imagenes de referencia{" "}
                  <span className="normal-case tracking-normal text-muted-foreground/50">
                    (opcional, max {MAX_FILES})
                  </span>
                </label>

                {/* Drop zone */}
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onClick={() => fileInputRef.current?.click()}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      fileInputRef.current?.click()
                    }
                  }}
                  className={`relative flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed px-4 py-6 cursor-pointer transition-all ${
                    isDragging
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50 hover:bg-secondary/50"
                  } ${referenceImages.length >= MAX_FILES ? "opacity-40 pointer-events-none" : ""}`}
                >
                  <Upload className="h-6 w-6 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground text-center">
                    <span className="text-primary font-medium">
                      Haz clic para subir
                    </span>{" "}
                    o arrastra tus imagenes aqui
                  </p>
                  <p className="text-xs text-muted-foreground/50">
                    PNG, JPG o WEBP
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files) addFiles(e.target.files)
                      e.target.value = ""
                    }}
                  />
                </div>

                {/* Thumbnails */}
                {referenceImages.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {referenceImages.map((img, idx) => (
                      <div
                        key={img.preview}
                        className="group relative h-20 w-20 rounded-md overflow-hidden border border-border bg-secondary"
                      >
                        <Image
                          src={img.preview}
                          alt={`Referencia ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(idx)}
                          className="absolute inset-0 flex items-center justify-center bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          aria-label={`Eliminar imagen ${idx + 1}`}
                        >
                          <X className="h-5 w-5 text-destructive" />
                        </button>
                      </div>
                    ))}

                    {referenceImages.length < MAX_FILES && (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex h-20 w-20 items-center justify-center rounded-md border-2 border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer"
                        aria-label="Agregar otra imagen"
                      >
                        <ImageIcon className="h-5 w-5 text-muted-foreground" />
                      </button>
                    )}
                  </div>
                )}

                {referenceImages.length > 0 && (
                  <p className="mt-2 text-xs text-muted-foreground/60">
                    Las imagenes se enviaran como mensaje aparte en WhatsApp
                    despues de tu solicitud.
                  </p>
                )}
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
