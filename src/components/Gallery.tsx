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

        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {siteConfig.images.gallery.map((src, index) => (
            <li key={src}>
              <button
                type="button"
                className="group relative block w-full overflow-hidden rounded-[1.35rem] shadow-[var(--shadow-card)] focus-visible:outline-offset-4"
                onClick={() => setActive(index)}
                aria-label={`Ampliar foto de inspiração ${index + 1}`}
              >
                <img
                  src={src}
                  alt={`Inspiração de olhar ${index + 1} — trabalho de cílios`}
                  className={`aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${galleryPositions[index]}`}
                  loading="lazy"
                  width={740}
                  height={1200}
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/55 to-transparent px-4 pt-10 pb-4 text-left text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Toque para ampliar
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active !== null && (
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
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <h3 id={titleId} className="font-serif text-lg">
                Inspiração {active + 1}
              </h3>
              <button
                ref={closeRef}
                type="button"
                className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full text-ink hover:bg-surface"
                aria-label="Fechar"
                onClick={() => setActive(null)}
              >
                <IconClose />
              </button>
            </div>
            <img
              src={siteConfig.images.gallery[active]}
              alt={`Inspiração de olhar ${active + 1} ampliada`}
              className={`max-h-[80vh] w-full object-contain ${galleryPositions[active]}`}
            />
          </div>
        </div>
      )}
    </section>
  )
}
