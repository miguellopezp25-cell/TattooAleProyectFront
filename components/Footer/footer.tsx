import { Brand } from "./FooterComponets/Brand"
import { Contact } from "./FooterComponets/Contact"
import { End } from "./FooterComponets/End"
import { QuickLinks } from "./FooterComponets/QuickLinks"

export function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <Brand />
          {/* Contact */}
          <Contact />

          {/* Quick Links */}
          <QuickLinks />
        </div>
        {/*End */}
        <End />
      </div>
    </footer>
  )
}
