import { instagramUrl, mapsSearchUrl, siteConfig, whatsappUrl } from '../config/site'
import { IconMapPin, IconWhatsApp } from './Icons'

export function Contact() {
  const ig = instagramUrl()

  return (
    <section id="contato" className="py-14 sm:py-16 lg:py-20">
      <div className="container-site">
        <div className="grid gap-6 overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-soft)] ring-1 ring-border/60 lg:grid-cols-2">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="eyebrow">Contato</p>
            <h2 className="section-title mt-3">
              Vamos conversar sobre o seu <em className="italic text-primary">próximo olhar</em>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/65 sm:text-base">
              Atendimento com hora marcada. Tire dúvidas, escolha a técnica e reserve seu horário pelo WhatsApp.
            </p>

            <div className="mt-8 space-y-5 text-sm">
              <div>
                <p className="font-medium text-ink">WhatsApp</p>
                <a
                  href={whatsappUrl(siteConfig.messages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-primary hover:text-primary-hover"
                >
                  <IconWhatsApp className="h-4 w-4" />
                  {siteConfig.whatsapp.display}
                </a>
              </div>

              <div>
                <p className="font-medium text-ink">Endereço</p>
                <p className="mt-1 flex items-start gap-2 text-ink/70">
                  <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.neighborhood}
                  </span>
                </p>
                <a
                  href={mapsSearchUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-primary hover:text-primary-hover"
                >
                  Ver endereço no mapa →
                </a>
              </div>

              {ig && (
                <div>
                  <p className="font-medium text-ink">Instagram</p>
                  <a
                    href={ig}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-primary hover:text-primary-hover"
                  >
                    {siteConfig.instagram}
                  </a>
                </div>
              )}

              <p className="rounded-xl bg-surface px-4 py-3 text-ink/75">
                {siteConfig.appointmentNote}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl(siteConfig.messages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary gap-2"
              >
                <IconWhatsApp className="h-5 w-5" />
                Agendar horário
              </a>
              <a
                href={whatsappUrl(siteConfig.messages.doubt)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-full border border-border bg-background px-5 text-sm font-medium text-ink/80 transition-colors hover:border-primary/30 hover:text-primary"
              >
                Tirar dúvida
              </a>
            </div>
          </div>

          <div className="relative h-full min-h-[320px] overflow-hidden bg-[#1a1416] sm:min-h-[380px]">
            <img
              src={siteConfig.images.hero}
              alt="Poliana — atendimento com cílios e escovinhas rosadas"
              className="absolute inset-0 h-full w-full object-cover object-[70%_30%]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
            <p className="font-script absolute right-5 bottom-5 z-10 max-w-[90%] text-right text-2xl leading-tight text-white drop-shadow-md sm:right-7 sm:bottom-7 sm:text-3xl">
              Beleza com carinho
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
