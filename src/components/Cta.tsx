import { siteConfig, whatsappUrl } from '../config/site'
import { BranchDecoration } from './BranchDecoration'
import { IconWhatsApp } from './Icons'

export function Cta() {
  return (
    <section className="py-8 sm:py-12" aria-labelledby="cta-title">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-primary px-6 py-12 text-center text-white sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_45%)]" />
          <BranchDecoration className="pointer-events-none absolute top-1/2 left-2 hidden h-20 w-28 -translate-y-1/2 text-white/30 sm:block lg:left-8" />
          <BranchDecoration
            flip
            className="pointer-events-none absolute top-1/2 right-2 hidden h-20 w-28 -translate-y-1/2 text-white/30 sm:block lg:right-8"
          />

          <div className="relative mx-auto max-w-2xl">
            <p className="text-[0.65rem] tracking-[0.28em] text-white/75 uppercase">Agende agora</p>
            <h2
              id="cta-title"
              className="mt-3 font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.7rem]"
            >
              Vamos escolher seu próximo olhar?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
              Fale com a Poliana no WhatsApp e receba orientação para o estilo que mais valoriza o seu olhar.
            </p>

            <a
              href={whatsappUrl(siteConfig.messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-8 inline-flex gap-2"
            >
              <IconWhatsApp className="h-5 w-5" />
              Conversar com a Poliana
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
