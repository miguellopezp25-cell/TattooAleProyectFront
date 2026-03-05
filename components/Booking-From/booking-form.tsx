"use client"

import { useState } from "react"
import { Send, CalendarDays } from "lucide-react"

// --- CONFIGURACIÓN ---
const WHATSAPP_NUMBER = "+523326116812"
const GOOGLE_CALENDAR_EMBED_URL = "https://calendar.google.com/calendar/embed?src=ffc5d2e18dcd6ab71d0c1f3e3c99d00fbf734ce59aaac5ecc0294a33ed3bebf8%40group.calendar.google.com&ctz=America%2FMexico_City"

const tattooStyles = ["Neotribal", "Blackwork", "Linework", "Minimalista", "Dotwork", "Blackout", "Realismo", "Otro"]
const bodyParts = ["Brazo", "Antebrazo", "Pierna", "Espalda", "Pecho", "Costillas", "Mano", "Cuello", "Otro"]
const timeSlots = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

function CalendarSection() {
  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 mb-4">
        <CalendarDays className="h-4 w-4 text-primary" />
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Disponibilidad</p>
      </div>
      <div className="relative w-full rounded-md overflow-hidden border border-border bg-secondary">
        <iframe src={GOOGLE_CALENDAR_EMBED_URL} className="w-full h-[450px]" style={{ border: 0 }} />
      </div>
    </div>
  )
}

function FormFields({ form, setForm, date, setDate, time, setTime, isValid }: any) {
  const inputClasses = "w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-white focus:border-primary focus:outline-none transition-all placeholder:text-muted-foreground/50"
  
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClasses} />
          <select value={time} onChange={(e) => setTime(e.target.value)} className={inputClasses}>
            <option value="">Hora</option>
            {timeSlots.map(t => <option key={t} value={t}>{t} hrs</option>)}
          </select>
        </div>
        
        <input name="nombre" placeholder="Nombre completo" value={form.nombre} onChange={handleChange} className={inputClasses} />
        <input name="telefono" placeholder="WhatsApp" value={form.telefono} onChange={handleChange} className={inputClasses} />
        
        {/* FILA DE ESTILO Y ZONA */}
        <div className="grid grid-cols-2 gap-4">
          <select name="estilo" value={form.estilo} onChange={handleChange} className={inputClasses}>
            <option value="">Estilo</option>
            {tattooStyles.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select name="zona" value={form.zona} onChange={handleChange} className={inputClasses}>
            <option value="">Zona</option>
            {bodyParts.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>

        {/* CAMPO DE DIMENSIONES RECUPERADO */}
        <input 
          name="tamano" 
          placeholder="Tamaño aproximado (ej: 10x10cm)" 
          value={form.tamano} 
          onChange={handleChange} 
          className={inputClasses} 
        />
      </div>

      <div className="flex flex-col gap-5">
        <textarea 
          name="descripcion" 
          placeholder="Cuéntanos tu idea..." 
          rows={5} 
          value={form.descripcion} 
          onChange={handleChange} 
          className={`${inputClasses} resize-none`} 
        />
        
        <button 
          type="submit" 
          disabled={!isValid}
          className="w-full py-4 bg-primary text-black font-bold uppercase tracking-widest rounded-md hover:bg-white transition-all flex items-center justify-center gap-2 disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <Send size={18} />
          Enviar Solicitud
        </button>
      </div>
    </div>
  )
}

export function BookingForm() {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    estilo: "",
    zona: "",
    tamano: "", // <--- Agregado al estado inicial
    descripcion: ""
  })

  // Validación: ahora también pedimos que el tamaño no esté vacío
  const isValid = form.nombre && form.telefono && date && time && form.estilo && form.zona && form.tamano && form.descripcion

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `*NUEVA CITA DE TATUAJE*%0A` +
      `----------------------------%0A` +
      `*Cliente:* ${form.nombre}%0A` +
      `*WhatsApp:* ${form.telefono}%0A` +
      `*Fecha:* ${date}%0A` +
      `*Hora:* ${time}%0A` +
      `*Estilo:* ${form.estilo}%0A` +
      `*Zona:* ${form.zona}%0A` +
      `*Tamaño:* ${form.tamano}%0A` + // <--- Agregado al mensaje
      `*Idea:* ${form.descripcion}`

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank")
  }

  return (
    <section id="agendar" className="py-24 px-6 bg-black">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2">Reservaciones</p>
          <h2 className="text-5xl text-white font-serif uppercase">Agenda tu cita</h2>
        </div>

        <CalendarSection />

        <form onSubmit={handleSendMessage}>
          <FormFields 
            form={form} 
            setForm={setForm} 
            date={date} 
            setDate={setDate} 
            time={time} 
            setTime={setTime} 
            isValid={isValid} 
          />
        </form>
      </div>
    </section>
  )
}