import { siteConfig, whatsappUrl } from '../config/site'
import { IconWhatsApp } from './Icons'

export function Techniques() {
  return (
    <section id="tecnicas" className="section-band py-14 sm:py-16 lg:py-20">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">Compare as opções</p>
          <h2 className="section-title mt-3">
            Qual técnica combina com o seu <em className="italic text-primary">olhar?</em>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/65 sm:text-base">
            Veja a diferença entre Fox, Volume Boss Girl e Volume Brasileiro e escolha o efeito que mais combina com você.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {siteConfig.lashServices.map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-[1.5rem] bg-white p-6 shadow-[var(--shadow-soft)] ring-1 ring-border/60 sm:p-7"
            >
              <p className="text-xs tracking-[0.22em] text-primary/80 uppercase">{service.effect}</p>
              <h3 className="mt-2 font-serif text-2xl text-ink sm:text-[1.7rem]">{service.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{service.application}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">{service.details}</p>
              <p className="mt-4 rounded-xl bg-surface/80 px-3 py-2.5 text-sm text-ink/75">
                <span className="font-medium text-ink">Ideal para: </span>
                {service.bestFor}
              </p>
              <a
                href={whatsappUrl(siteConfig.messages[service.messageKey])}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 inline-flex w-full gap-2"
              >
                <IconWhatsApp className="h-4 w-4" />
                Quero esse estilo
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
