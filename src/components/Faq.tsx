import { useId, useState } from 'react'
import { siteConfig } from '../config/site'
import { IconPlus } from './Icons'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="faq" className="border-t border-border/70 bg-white/40 py-14 sm:py-16 lg:py-20">
      <div className="container-site grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p className="eyebrow">Dúvidas</p>
          <h2 className="section-title mt-3 max-w-xs">
            Antes de <em className="italic text-primary">agendar</em>
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/65">
            Respostas rápidas para você chegar ainda mais tranquila no atendimento.
          </p>
        </div>

        <div className="divide-y divide-border">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const buttonId = `${baseId}-btn-${index}`
            const panelId = `${baseId}-panel-${index}`

            return (
              <div key={faq.question} className="py-1">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="font-serif text-lg text-ink sm:text-xl">{faq.question}</span>
                    <span
                      className={`inline-flex shrink-0 text-primary transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                      aria-hidden="true"
                    >
                      <IconPlus />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-4"
                >
                  <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
