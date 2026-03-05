import { Instagram, MapPin, Phone, Clock } from "lucide-react"

export const Brand = () => {
    return (
        <div>
            <h3 className="font-serif text-2xl tracking-widest text-primary">TATTOOALE</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Transformamos tu piel en arte. Cada tatuaje es una historia unica creada con
                pasion y maestria.
            </p>
            <a
                href="https://www.instagram.com/_tattooale_/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
                <img
                    src="/instagram.svg"
                    alt="Instagram"
                    className="h-5 w-5"
                />
                @_tattooale_
            </a>
        </div>
    )
}
