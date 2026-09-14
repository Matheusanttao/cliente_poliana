import { siteConfig, whatsappUrl } from '../config/site'
import { IconChat, IconCheck, IconSpark } from './Icons'

const steps = [
  {
    number: '01',
    title: 'Converse no WhatsApp',
    text: 'Conte o efeito que deseja e tire dúvidas sobre as técnicas disponíveis.',
    Icon: IconChat,
  },
  {
    number: '02',
    title: 'Reserve seu horário',
    text: 'A Poliana confirma a disponibilidade e organiza o atendimento com hora marcada.',
    Icon: IconCheck,
  },
  {
    number: '03',
    title: 'Saia com o olhar renovado',
    text: 'Procedimento cuidadoso, com acabamento elegante e resultado sob medida.',
    Icon: IconSpark,
  },
] as const

export function Process() {
  return (
    <section id="como-funciona" className="section-band py-14 sm:py-16 lg:py-20">
      <div className="container-site">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Passo a passo</p>
            <h2 className="section-title mt-3">
              Como funciona o <em className="italic text-primary">atendimento</em>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/65 sm:text-base">
              Um processo simples, transparente e pensado para você se sentir segura do primeiro contato ao resultado final.
            </p>
          </div>
          <a
            href={whatsappUrl(siteConfig.messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full shrink-0 sm:w-fit"
          >
            Começar pelo WhatsApp
          </a>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {steps.map(({ number, title, text, Icon }) => (
            <li
              key={number}
              className="relative overflow-hidden rounded-[1.5rem] bg-white p-6 shadow-[var(--shadow-soft)] ring-1 ring-border/60"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-serif text-4xl text-primary/15" aria-hidden="true">
                  {number}
                </span>
              </div>
              <h3 className="font-serif text-xl text-ink sm:text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
