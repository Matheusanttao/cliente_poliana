import { IconClock, IconHeart, IconSpark } from './Icons'

const highlights = [
  {
    title: 'Atendimento personalizado',
    text: 'Cada olhar é avaliado com calma para escolher a técnica que mais combina com você.',
    Icon: IconHeart,
  },
  {
    title: 'Hora marcada',
    text: 'Atendimento exclusivo, com foco total no seu conforto e no resultado.',
    Icon: IconClock,
  },
  {
    title: 'Acabamento delicado',
    text: 'Cílios, sobrancelhas e maquiagem com visual natural, elegante e bem feito.',
    Icon: IconSpark,
  },
] as const

export function Highlights() {
  return (
    <section className="relative z-10 overflow-x-clip py-2 sm:py-4" aria-label="Diferenciais">
      <div className="container-site">
        <div className="grid gap-3 rounded-[1.5rem] bg-white/90 p-3 shadow-[var(--shadow-soft)] ring-1 ring-border/70 backdrop-blur sm:grid-cols-3 sm:gap-2 sm:rounded-[1.75rem] sm:p-5">
          {highlights.map(({ title, text, Icon }) => (
            <article
              key={title}
              className="flex min-w-0 gap-3 rounded-2xl px-2 py-3 sm:px-4 sm:py-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-ink">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/65">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
