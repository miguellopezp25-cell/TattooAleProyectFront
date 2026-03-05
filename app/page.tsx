import { Navbar } from "@/components/NavBar/navbar"
import { BackgroundTheme } from "@/components/BackGround/Background"
import { Gallery } from "@/components/gallery"
import { StylesSection } from "@/components/styles-section"
import { StudioSection } from "@/components/studio-section"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/Footer/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackgroundTheme />
      <Gallery />
      <StylesSection />
      <StudioSection />
      <BookingForm />
      <Footer />
    </main>
  )
}
