import { instagramUrl, mapsSearchUrl, siteConfig, whatsappUrl } from '../config/site'
import { IconMapPin, IconWhatsApp } from './Icons'

export function Footer() {
  const year = new Date().getFullYear()
  const ig = instagramUrl()

  return (
    <footer className="border-t border-border bg-surface/70 pt-12 pb-24 sm:pt-14 sm:pb-28">
      <div className="container-site grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl tracking-[0.18em] text-primary">{siteConfig.brand.title}</p>
          <p className="mt-1.5 text-[0.55rem] tracking-[0.42em] text-primary/80">
            {siteConfig.brand.subtitle}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/65">
            Cílios, sobrancelhas e maquiagem com atendimento personalizado e hora marcada.
          </p>
          <p className="mt-4 text-sm font-medium text-ink">{siteConfig.appointmentNote}</p>
        </div>

        <div className="text-sm leading-relaxed">
          <p className="font-serif text-xl text-ink">Contato</p>
          <a
            href={whatsappUrl(siteConfig.messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-primary hover:text-primary-hover"
          >
            <IconWhatsApp className="h-4 w-4" />
            {siteConfig.whatsapp.display}
          </a>

          <div className="mt-5 flex items-start gap-2 text-ink/70">
            <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.neighborhood}
            </p>
          </div>
          <a
            href={mapsSearchUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-primary hover:text-primary-hover"
          >
            Ver endereço no mapa →
          </a>

          {ig && (
            <a
              href={ig}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-primary hover:text-primary-hover"
            >
              Instagram {siteConfig.instagram}
            </a>
          )}
        </div>

        <div>
          <p className="font-serif text-xl text-ink">Navegação</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm" aria-label="Rodapé">
            {siteConfig.nav.map((item) => (
              <a key={item.href} href={item.href} className="text-ink/70 hover:text-primary">
                {item.label}
              </a>
            ))}
            <a href="#cuidados" className="text-ink/70 hover:text-primary">
              Cuidados
            </a>
            <a href="#faq" className="text-ink/70 hover:text-primary">
              Dúvidas
            </a>
          </nav>
          <p className="mt-8 text-sm text-ink/55">
            © {year} {siteConfig.brand.name} — Lash & Beauty.
            <br />
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
