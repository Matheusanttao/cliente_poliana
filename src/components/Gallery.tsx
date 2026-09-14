import { useEffect, useId, useRef, useState } from 'react'
import { siteConfig, whatsappUrl } from '../config/site'
import { IconClose } from './Icons'

const galleryPositions = [
  'object-[center_42%]',
  'object-[center_38%]',
  'object-[center_45%]',
] as const

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()

  useEffect(() => {
    if (active === null) return
    const prev = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      prev?.focus()
    }
  }, [active])

  const activeItem = active !== null ? siteConfig.images.gallery[active] : null

  return (
    <section id="inspiracoes" className="section-band py-14 sm:py-16 lg:py-20">
      <div className="container-site">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Galeria</p>
            <h2 className="section-title mt-3">
              Inspirações de <em className="italic text-primary">olhares</em>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65 sm:text-base">
              Veja alguns resultados reais e escolha o estilo que mais combina com a sua essência.
            </p>
          </div>
          <a
            href={whatsappUrl(siteConfig.messages.general)}
            className="text-sm font-medium text-primary transition-colors hover:text-primary-hover"
          >
            Encontre seu estilo com a Poliana →
          </a>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-5">
          {siteConfig.images.gallery.map((item, index) => (
            <li key={item.src} className="group">
              <button
                type="button"
                className="block w-full overflow-hidden rounded-[1.35rem] shadow-[var(--shadow-card)] focus-visible:outline-offset-4"
                onClick={() => setActive(index)}
                aria-label={`Ampliar foto de ${item.model}`}
              >
                <img
                  src={item.src}
                  alt={`Inspiração de olhar — ${item.model}`}
                  className={`aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${galleryPositions[index]}`}
                  loading="lazy"
                  width={740}
                  height={1200}
                />
              </button>
              <div className="mt-3 px-0.5 text-left">
                <p className="font-serif text-lg leading-snug text-ink sm:text-xl">{item.model}</p>
                <p className="mt-0.5 text-sm font-medium text-primary">{item.price}</p>
                <p className="mt-1 text-xs text-ink/45 transition-colors group-hover:text-ink/60">
                  Toque para ampliar
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {activeItem && active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-hidden rounded-2xl bg-background shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-3">
              <div>
                <h3 id={titleId} className="font-serif text-lg leading-tight">
                  {activeItem.model}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-primary">{activeItem.price}</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                className="inline-flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-full text-ink hover:bg-surface"
                aria-label="Fechar"
                onClick={() => setActive(null)}
              >
                <IconClose />
              </button>
            </div>
            <img
              src={activeItem.src}
              alt={`Inspiração de olhar — ${activeItem.model}`}
              className={`max-h-[70vh] w-full object-contain ${galleryPositions[active]}`}
            />
            <div className="border-t border-border px-4 py-3">
              <a
                href={whatsappUrl(siteConfig.messages[activeItem.messageKey])}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex w-full justify-center"
              >
                Quero esse estilo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
