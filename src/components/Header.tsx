import { useEffect, useId, useState } from 'react'
import { siteConfig, whatsappUrl } from '../config/site'
import { IconClose, IconMenu } from './Icons'

export function Header() {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="relative z-50 bg-background">
      <div className="container-site flex min-w-0 items-center justify-between gap-3 py-4 sm:gap-4 sm:py-5 lg:py-6">
        <a href="#topo" className="group min-w-0 shrink text-left leading-none sm:text-center" onClick={close}>
          <span className="font-serif text-[1.05rem] font-medium tracking-[0.08em] text-primary sm:text-[1.45rem] sm:tracking-[0.14em]">
            {siteConfig.brand.title}
          </span>
          <span className="mt-1 block text-[0.5rem] tracking-[0.22em] text-primary/80 sm:mt-1.5 sm:text-[0.55rem] sm:tracking-[0.36em]">
            {siteConfig.brand.subtitle}
          </span>
        </a>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Principal">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.92rem] text-ink/85 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl(siteConfig.messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden px-7 sm:inline-flex"
          >
            Agendar horário
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-ink lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id={panelId}
          className="absolute inset-x-0 top-full border-b border-border bg-background shadow-lg lg:hidden"
          role="dialog"
          aria-label="Menu de navegação"
        >
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base text-ink hover:bg-surface"
                onClick={close}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl(siteConfig.messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 w-full"
              onClick={close}
            >
              Agendar horário
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
