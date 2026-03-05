import { Background } from "./Components/Background";
import { Overlay } from "./Components/Overlay";
import { Scroll } from "./Components/Scroll";

export function BackgroundTheme() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}

      <Background />
      {/* Overlay */}
      <Overlay />

      {/* Scroll indicator */}
      <Scroll />
    </section>
  )
}
