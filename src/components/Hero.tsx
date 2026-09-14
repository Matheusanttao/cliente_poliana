import { siteConfig, whatsappUrl } from '../config/site'
import { BranchDecoration } from './BranchDecoration'
import { IconWhatsApp } from './Icons'

export function Hero() {
  const hero = siteConfig.images.hero
  const overlay = siteConfig.images.heroOverlay

  return (
    <section id="topo" className="overflow-x-clip pb-8 lg:pb-16">
      <div className="container-site">
        <div className="grid min-w-0 items-stretch lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <div className="relative flex min-w-0 flex-col justify-center pt-5 pb-2 sm:py-10 lg:py-10 lg:pr-8 xl:pr-14">
            <BranchDecoration className="pointer-events-none absolute top-4 right-0 hidden h-20 w-28 text-primary/20 sm:block sm:top-10 sm:right-6 sm:h-28 sm:w-44 lg:right-0" />

            <h1 className="relative max-w-[14ch] font-serif text-[2.15rem] leading-[1.12] font-medium text-primary sm:text-5xl lg:text-[3.55rem]">
              Um olhar
              <br />
              que tem a sua
              <br />
              <em className="italic">essência.</em>
            </h1>

            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-ink/70 sm:mt-6 sm:text-base">
              Cílios, sobrancelhas e maquiagem com atendimento personalizado.
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={whatsappUrl(siteConfig.messages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center gap-2.5 px-7 sm:w-auto"
              >
                <IconWhatsApp className="h-[1.15rem] w-[1.15rem]" />
                Agendar pelo WhatsApp
              </a>
              <a
                href="#tecnicas"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-border bg-white/70 px-5 text-sm font-medium text-ink/80 transition-colors hover:border-primary/30 hover:text-primary sm:w-auto"
              >
                Ver técnicas
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 sm:mt-12 sm:gap-4">
              <span className="h-px w-8 bg-ink/25 sm:w-14" aria-hidden="true" />
              <p className="text-[0.58rem] font-medium tracking-[0.24em] text-ink/55 uppercase sm:text-[0.62rem] sm:tracking-[0.28em]">
                Beleza real em cada detalhe
              </p>
            </div>
          </div>

          {/* Mobile: foto limpa */}
          <div className="mt-6 min-w-0 lg:hidden">
            <div className="relative aspect-[3/4] max-h-[70vh] overflow-hidden rounded-[1.25rem] bg-[#1a1416] shadow-[var(--shadow-soft)]">
              <img
                src={hero.src}
                alt={`${hero.model} — close-up com extensão de cílios`}
                className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
                width={1075}
                height={1460}
                fetchPriority="high"
              />
            </div>
            <p className="font-script mt-3 text-center text-[1.35rem] text-primary">
              Olhares que inspiram…
            </p>
          </div>

          {/* Desktop: composição com overlay */}
          <div className="relative mt-6 hidden pb-2 lg:mt-0 lg:block lg:pb-0">
            <div className="relative h-[560px] overflow-hidden rounded-tl-[2rem] rounded-tr-[2.75rem] rounded-br-[2rem] rounded-bl-2xl bg-[#1a1416]">
              <img
                src={hero.src}
                alt={`${hero.model} — close-up com extensão de cílios`}
                className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
                width={1075}
                height={1460}
              />
            </div>

            <div className="absolute bottom-0 -left-12 z-10 flex items-end gap-4">
              <div className="relative w-[168px] overflow-hidden rounded-2xl border-[5px] border-white shadow-[var(--shadow-card)]">
                <img
                  src={overlay.src}
                  alt={`${overlay.model} — detalhe de olhar`}
                  className="aspect-[4/5] w-full object-cover object-center"
                  width={828}
                  height={828}
                  loading="lazy"
                />
              </div>
              <p className="font-script mb-6 text-[1.75rem] leading-none text-primary">
                Olhares que inspiram…
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
