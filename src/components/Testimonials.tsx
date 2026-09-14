import { siteConfig, whatsappUrl } from '../config/site'

export function Testimonials() {
  const hasTestimonials = siteConfig.testimonials.length > 0

  return (
    <section id="depoimentos" className="section-band py-14 sm:py-16 lg:py-20">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">Experiência</p>
          <h2 className="section-title mt-3">
            Olhares que já passaram por <em className="italic text-primary">aqui</em>
          </h2>
        </div>

        {hasTestimonials ? (
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.testimonials.map((item) => (
              <li
                key={`${item.name}-${item.text.slice(0, 24)}`}
                className="rounded-[1.5rem] bg-white p-6 shadow-[var(--shadow-soft)] ring-1 ring-border/60"
              >
                <p className="font-script text-3xl leading-none text-primary/40">“</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.text}</p>
                <p className="mt-5 font-serif text-lg text-ink">{item.name}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 rounded-[1.5rem] bg-white p-6 shadow-[var(--shadow-soft)] ring-1 ring-border/60 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-xl">
              <p className="font-serif text-2xl text-ink sm:text-3xl">
                Seu resultado também pode inspirar outras pessoas.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/65 sm:text-base">
                Assim que houver depoimentos reais, eles aparecem aqui. Por enquanto, fale com a Poliana e compartilhe sua experiência pelo WhatsApp.
              </p>
            </div>
            <a
              href={whatsappUrl(
                'Olá, Poliana! Fiz o procedimento e gostaria de compartilhar meu feedback.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 shrink-0 lg:mt-0"
            >
              Enviar meu feedback
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
