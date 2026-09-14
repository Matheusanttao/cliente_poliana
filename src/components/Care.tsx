import { siteConfig } from '../config/site'
import { IconCheck, IconSpark } from './Icons'

export function Care() {
  return (
    <section id="cuidados" className="py-14 sm:py-16 lg:py-20">
      <div className="container-site grid gap-6 lg:grid-cols-2 lg:gap-8">
        <article className="rounded-[1.5rem] bg-white p-6 shadow-[var(--shadow-soft)] ring-1 ring-border/60 sm:p-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-surface text-primary">
            <IconSpark className="h-5 w-5" />
          </div>
          <h2 className="font-serif text-3xl text-ink sm:text-[2rem]">
            Cuidados após a <em className="italic text-primary">aplicação</em>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">
            Pequenos cuidados fazem diferença na duração e no acabamento dos cílios.
          </p>
          <ul className="mt-6 space-y-3">
            {siteConfig.careTips.map((tip) => (
              <li key={tip} className="flex items-start gap-2.5 text-sm text-ink/75">
                <span className="mt-0.5 text-primary">
                  <IconCheck className="h-4 w-4" />
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.5rem] bg-surface p-6 sm:p-8">
          <p className="eyebrow">Antes do horário</p>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-[2rem]">
            Como se preparar para o <em className="italic text-primary">atendimento</em>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">
            Chegar preparada deixa o procedimento mais confortável e o resultado ainda melhor.
          </p>
          <ul className="mt-6 space-y-3">
            {siteConfig.prepTips.map((tip) => (
              <li key={tip} className="flex items-start gap-2.5 text-sm text-ink/75">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-xs font-medium text-primary">
                  •
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
