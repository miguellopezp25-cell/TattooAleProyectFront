import Image from "next/image"
import { ShieldCheck, Award, Clock, Sparkles, MapPin, Navigation } from "lucide-react"

const features = [
  { icon: ShieldCheck, label: "100% Esterilizado", desc: "Equipos desechables y autoclave de grado hospitalario." },
  { icon: Award, label: "+5 Años Experiencia", desc: "Artistas con trayectoria internacional y premiados." },
  { icon: Clock, label: "Horario Flexible", desc: "Nos adaptamos a tu agenda para tu comodidad." },
  { icon: Sparkles, label: "Tintas Premium", desc: "Solo usamos tintas veganas y certificadas." },
]

/* ------------------------------------------------------------------ */
/*  Cambia esta URL por la de tu ubicacion real en Google Maps.       */
/*  Para obtenerla: Google Maps > tu direccion > Compartir > Insertar */
/*  un mapa > copia solo la URL del atributo src=""                   */
/* ------------------------------------------------------------------ */
const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14968.146920908504!2d-103.24913817512798!3d20.29874674745516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f41365d0a28c5%3A0x7e87c840da0b430!2sSan%20Antonio%20Tlayacapan%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1772665400420!5m2!1ses-419!2smx"
const STUDIO_ADDRESS = "San Antonio Tlayacapan 123, Col. Centro, CDMX"
const GOOGLE_MAPS_LINK ="https://www.google.com/search/place/San+Antonio+Tlayacapan,+Jal"

export function StudioSection() {
  return (
    <section id="estudio" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Top row: image + features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/studio.jpg"
              alt="Interior del estudio"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Nuestro Espacio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-3 text-balance">
              Un Estudio Hecho Para El Arte
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mi estudio combina un ambiente creativo e inspirador con los mas altos
              estandares de higiene y profesionalismo. Aqui, cada detalle esta pensado para
              que tu experiencia sea excepcional.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.label} className="flex gap-4">
                  <f.icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-foreground">{f.label}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map row */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary">
                Ubicacion
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mt-2 text-balance">
                Visitanos en el Estudio
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{STUDIO_ADDRESS}</span>
              </div>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary hover:text-primary/80 transition-colors shrink-0"
              >
                <Navigation className="h-3.5 w-3.5" />
                Como llegar
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-sm overflow-hidden border border-border">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              title="Ubicacion de TattooAle Studio en Google Maps"
              className="absolute inset-0 w-full h-full grayscale contrast-125 brightness-75"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Dark tint overlay for cohesion with the dark theme */}
            <div className="pointer-events-none absolute inset-0 bg-primary/5 mix-blend-color" />
          </div>

          {/* Hours + quick info below map */}
          <div className="mt-6 flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Lun - Sab: 11:00 - 13:00 & 16:00 - 19:00</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
