import { IconBrows, IconLamination, IconLashes, IconMakeup } from './Icons'

const services = [
  {
    number: '01',
    title: 'Lash Design',
    description: 'Cílios que realçam o seu olhar de forma natural e harmoniosa.',
    Icon: IconLashes,
  },
  {
    number: '02',
    title: 'Design de Sobrancelhas',
    description: 'Formato que valoriza seus traços e expressa sua beleza única.',
    Icon: IconBrows,
  },
  {
    number: '03',
    title: 'Brow Lamination',
    description: 'Sobrancelhas mais alinhadas, preenchidas e com aspecto natural.',
    Icon: IconLamination,
  },
  {
    number: '04',
    title: 'Maquiagem',
    description: 'Produção que destaca o que você tem de mais bonito.',
    Icon: IconMakeup,
  },
] as const

export function Services() {
  return (
    <section id="servicos" className="py-14 sm:py-16 lg:py-20">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">Serviços</p>
          <h2 className="section-title mt-3">
            Beleza em cada <em className="italic text-primary">detalhe.</em>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/65 sm:text-base">
            Técnicas pensadas para valorizar seu olhar com naturalidade, delicadeza e um acabamento profissional.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:gap-6">
          {services.map(({ number, title, description, Icon }) => (
            <article
              key={number}
              className="group relative overflow-hidden rounded-[1.5rem] bg-white p-6 shadow-[var(--shadow-soft)] ring-1 ring-border/60 transition-shadow duration-300 hover:shadow-[var(--shadow-card)] sm:p-7"
            >
              <div className="pointer-events-none absolute -top-6 -right-4 font-serif text-7xl text-primary/[0.06] select-none">
                {number}
              </div>
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] text-primary/70">{number}</p>
                  <h3 className="mt-1 font-serif text-2xl text-ink">{title}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink/65">{description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
