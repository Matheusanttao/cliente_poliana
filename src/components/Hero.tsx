import { siteConfig, whatsappUrl } from '../config/site'
import { BranchDecoration } from './BranchDecoration'
import { IconWhatsApp } from './Icons'

export function Hero() {
  return (
    <section id="topo" className="overflow-x-clip pb-10 lg:pb-16">
      <div className="container-site">
        <div className="grid items-stretch lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <div className="relative flex flex-col justify-center py-8 sm:py-12 lg:py-10 lg:pr-8 xl:pr-14">
            <BranchDecoration className="pointer-events-none absolute top-6 right-0 h-24 w-36 text-primary/25 sm:top-10 sm:right-6 sm:h-28 sm:w-44 lg:right-0" />

            <h1 className="relative max-w-[15ch] font-serif text-[2.65rem] leading-[1.08] font-medium text-primary sm:text-5xl lg:text-[3.55rem]">
              Um olhar
              <br />
              que tem a sua
              <br />
              <em className="italic">essência.</em>
            </h1>

            <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-ink/70 sm:text-base">
              Cílios, sobrancelhas e maquiagem com atendimento personalizado.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl(siteConfig.messages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary gap-2.5 px-7"
              >
                <IconWhatsApp className="h-[1.15rem] w-[1.15rem]" />
                Agendar pelo WhatsApp
              </a>
              <a
                href="#inspiracoes"
                className="inline-flex min-h-12 items-center rounded-full border border-border bg-white/70 px-5 text-sm font-medium text-ink/80 transition-colors hover:border-primary/30 hover:text-primary"
              >
                Ver inspirações
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 sm:mt-14">
              <span className="h-px w-10 bg-ink/25 sm:w-14" aria-hidden="true" />
              <p className="text-[0.62rem] font-medium tracking-[0.28em] text-ink/55 uppercase">
                Beleza real em cada detalhe
              </p>
            </div>
          </div>

          <div className="relative mt-6 pb-4 lg:mt-0 lg:pb-0">
            <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] bg-[#1a1416] sm:h-[500px] sm:rounded-[1.75rem] lg:h-[560px] lg:rounded-tl-[2rem] lg:rounded-tr-[2.75rem] lg:rounded-br-[2rem] lg:rounded-bl-2xl">
              <img
                src={siteConfig.images.hero}
                alt="Poliana — close-up com extensão de cílios e escovinhas rosadas no cabelo"
                className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
                width={1280}
                height={720}
                fetchPriority="high"
              />
            </div>

            <div className="absolute bottom-0 left-3 z-10 flex items-end gap-2.5 sm:left-5 sm:gap-4 lg:-left-12">
              <div className="w-[132px] overflow-hidden rounded-2xl border-[5px] border-white shadow-[var(--shadow-card)] sm:w-[168px]">
                <img
                  src={siteConfig.images.heroOverlay}
                  alt="Detalhe de olhar com cílios volumosos"
                  className="aspect-[4/5] w-full object-cover object-center"
                  width={828}
                  height={828}
                  loading="lazy"
                />
              </div>
              <p className="font-script mb-3 text-[1.35rem] leading-none text-primary sm:mb-6 sm:text-2xl lg:text-[1.75rem]">
                Olhares que inspiram…
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
