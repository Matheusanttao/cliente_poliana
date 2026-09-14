import { siteConfig, whatsappUrl } from '../config/site'
import { IconWhatsApp } from './Icons'

export function Techniques() {
  return (
    <section id="tecnicas" className="section-band py-14 sm:py-16 lg:py-20">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Catálogo</p>
          <h2 className="section-title mt-3">
            Qual técnica combina com o seu <em className="italic text-primary">olhar?</em>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/65 sm:text-base">
            Veja o resultado de cada estilo, a descrição e os valores de aplicação e manutenção.
          </p>
        </div>

        <ul className="mx-auto mt-10 flex max-w-3xl flex-col gap-8 sm:gap-10">
          {siteConfig.lashServices.map((service) => (
            <li key={service.id}>
              <article className="grid grid-cols-[minmax(7.5rem,38%)_1fr] items-start gap-3 sm:grid-cols-[minmax(11rem,34%)_1fr] sm:gap-6">
                <div className="overflow-hidden rounded-sm bg-surface shadow-[var(--shadow-soft)]">
                  <img
                    src={service.image}
                    alt={`${service.name} — resultado de extensão de cílios`}
                    className={`aspect-square w-full object-cover ${service.imagePosition}`}
                    loading="lazy"
                    width={640}
                    height={640}
                  />
                </div>

                <div className="flex min-w-0 flex-col">
                  <h3 className="font-serif text-[1.05rem] leading-tight font-medium tracking-[0.04em] text-ink uppercase sm:text-2xl sm:tracking-[0.06em]">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-[0.72rem] leading-relaxed text-ink/65 sm:mt-3 sm:text-sm">
                    {service.details}
                  </p>

                  <div className="mt-3 flex w-full max-w-[16rem] flex-col gap-1.5 sm:mt-4 sm:max-w-[18rem] sm:gap-2">
                    <div className="flex items-center gap-3 text-[0.65rem] sm:text-xs">
                      <span className="shrink-0 bg-primary px-2.5 py-1.5 font-semibold tracking-[0.14em] text-white uppercase">
                        Aplicação
                      </span>
                      <span className="font-semibold tracking-wide text-primary">
                        {service.application}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-[0.65rem] sm:text-xs">
                      <span className="shrink-0 bg-primary px-2.5 py-1.5 font-semibold tracking-[0.14em] text-white uppercase">
                        Manutenção
                      </span>
                      <span className="font-semibold tracking-wide text-primary">
                        {service.maintenance}
                      </span>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl(siteConfig.messages[service.messageKey])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex w-fit items-center gap-1.5 text-[0.7rem] font-medium text-primary transition-colors hover:text-primary-hover sm:mt-4 sm:text-sm"
                  >
                    <IconWhatsApp className="h-3.5 w-3.5 shrink-0" />
                    Quero esse estilo
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
