import { siteConfig, whatsappUrl } from '../config/site'
import { IconCheck, IconWhatsApp } from './Icons'

const carePoints = [
  'Avaliação do formato do seu olhar',
  'Escolha da técnica com orientação',
  'Atendimento com hora marcada',
  'Acabamento delicado e personalizado',
] as const

export function Pricing() {
  return (
    <section id="valores" className="py-14 sm:py-16 lg:py-20">
      <div className="container-site grid gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-7">
        {/* Tabela */}
        <div className="flex h-full flex-col rounded-[1.75rem] bg-surface p-6 sm:p-8 lg:p-9">
          <p className="eyebrow">Tabela</p>
          <h2 className="section-title mt-3 text-[2rem] sm:text-[2.35rem]">
            Serviços e <em className="italic text-primary">valores</em>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">
            Toque no nome do serviço para abrir o WhatsApp já com a mensagem preenchida.
          </p>

          <div className="mt-6 flex-1 overflow-x-auto rounded-2xl bg-white p-4 shadow-sm ring-1 ring-border/40 sm:p-5">
            <table className="w-full min-w-[300px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border text-muted">
                  <th scope="col" className="pb-3 pr-2 font-medium">
                    Serviço
                  </th>
                  <th scope="col" className="pb-3 pr-2 font-medium">
                    Aplicação
                  </th>
                  <th scope="col" className="pb-3 font-medium">
                    Manutenção
                  </th>
                </tr>
              </thead>
              <tbody>
                {siteConfig.lashServices.map((service) => (
                  <tr key={service.id} className="border-b border-border/70 last:border-0">
                    <td className="py-3.5 pr-2 align-middle">
                      <a
                        href={whatsappUrl(siteConfig.messages[service.messageKey])}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-ink underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        {service.name}
                        <span className="sr-only">
                          {' '}
                          — consultar {service.application} no WhatsApp
                        </span>
                      </a>
                    </td>
                    <td className="py-3.5 pr-2 align-middle whitespace-nowrap font-medium text-primary">
                      {service.application}
                    </td>
                    <td className="py-3.5 align-middle text-muted">{service.maintenance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <a
            href={whatsappUrl(siteConfig.messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 inline-flex w-full gap-2"
          >
            <IconWhatsApp className="h-5 w-5" />
            Consultar valores no WhatsApp
          </a>
        </div>

        {/* Cuidado */}
        <div className="flex h-full flex-col justify-center rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-soft)] ring-1 ring-border/60 sm:p-8 lg:p-9">
          <p className="eyebrow">Beleza também é autocuidado</p>
          <h3 className="mt-3 font-serif text-[1.85rem] leading-tight text-ink sm:text-[2.05rem]">
            Seu momento de <em className="italic text-primary">cuidado.</em>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">
            Um atendimento pensado para entender suas preferências e valorizar sua beleza.
          </p>

          <ul className="mt-5 space-y-2.5">
            {carePoints.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                <span className="mt-0.5 inline-flex rounded-full bg-surface p-0.5 text-primary">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={whatsappUrl(siteConfig.messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-border px-5 text-sm font-medium text-primary transition-colors hover:border-primary/40 hover:bg-surface"
          >
            Quero agendar meu horário
          </a>
        </div>
      </div>
    </section>
  )
}
