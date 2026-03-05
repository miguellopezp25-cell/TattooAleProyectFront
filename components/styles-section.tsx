import { Flame, Feather, Hexagon, Skull, Flower2, Waves } from "lucide-react"

const styles = [
{
  icon: Skull,
  name: "Neotribal",
  desc: "Diseños tribales contemporáneos con líneas fluidas, contrastes intensos y una estética moderna inspirada en raíces ancestrales.",
},
{
  icon: Waves,
  name: "Blackwork",
  desc: "Tatuajes en tinta negra con alto contraste, patrones sólidos y composiciones impactantes que resaltan por su fuerza visual.",
},
{
  icon: Flower2,
  name: "Dotwork",
  desc: "Diseños creados a base de puntos que forman sombras, texturas y figuras detalladas con un acabado preciso y artístico.",
},
{
  icon: Flame,
  name: "Minimalista",
  desc: "Trazos simples, limpios y elegantes que transmiten significado con la menor cantidad de elementos posibles.",
},
{
  icon: Feather,
  name: "Fine Line",
  desc: "Líneas finas y delicadas que crean tatuajes sutiles, sofisticados y llenos de detalle.",
},
{
  icon: Hexagon,
  name: "Blackout",
  desc: "Coberturas sólidas en tinta negra y composiciones de alto impacto que transforman la piel en un lienzo audaz y contundente.",
},
]

export function StylesSection() {
  return (
    <section id="estilos" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.3em] text-primary text-center">
          Especialidades
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground text-center mt-3 text-balance">
          Estilos de Tatuaje
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Domino multiples estilos para hacer realidad cualquier vision artistica.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((s) => (
            <div
              key={s.name}
              className="group p-8 border border-border rounded-sm hover:border-primary/50 transition-colors"
            >
              <s.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-xl text-foreground">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
