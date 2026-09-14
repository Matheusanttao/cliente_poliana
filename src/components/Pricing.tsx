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
      <div className="container-site grid gap-6 lg:grid-cols-2 lg:gap-8 lg:items-stretch">
        <div className="rounded-[1.75rem] bg-surface p-6 sm:p-8 lg:p-10">
          <p className="eyebrow">Tabela</p>
          <h2 className="section-title mt-3 text-[2rem] sm:text-4xl">
            Serviços e <em className="italic text-primary">valores</em>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">
            Toque no nome do serviço para abrir o WhatsApp já com a mensagem preenchida.
          </p>

          <div className="mt-7 overflow-x-auto rounded-2xl bg-white/70 p-4 ring-1 ring-border/50 sm:p-5">
            <table className="w-full min-w-[320px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border text-muted">
                  <th scope="col" className="pb-3 pr-3 font-medium">
                    Serviço
                  </th>
                  <th scope="col" className="pb-3 pr-3 font-medium">
                    Aplicação
                  </th>
                  <th scope="col" className="pb-3 font-medium">
                    Manutenção
                  </th>
                </tr>
              </thead>
              <tbody>
                {siteConfig.lashServices.map((service) => (
                  <tr key={service.id} className="border-b border-border/80 last:border-0">
                    <td className="py-4 pr-3">
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
                    <td className="py-4 pr-3 whitespace-nowrap font-medium text-primary">
                      {service.application}
                    </td>
                    <td className="py-4 text-muted">{service.maintenance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <a
            href={whatsappUrl(siteConfig.messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-7 inline-flex w-full gap-2 sm:w-auto"
          >
            <IconWhatsApp className="h-5 w-5" />
            Consultar valores no WhatsApp
          </a>
        </div>

        <div className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-soft)] ring-1 ring-border/60">
          <div className="aspect-[5/3] overflow-hidden lg:aspect-auto lg:h-52">
            <img
              src={siteConfig.images.spoolies}
              alt="Escovinhas rosadas usadas no design de cílios"
              className="h-full w-full object-cover object-center"
              loading="lazy"
              width={537}
              height={648}
            />
          </div>
          <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
            <p className="eyebrow">Beleza também é autocuidado</p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-[2.1rem]">
              Seu momento de <em className="italic text-primary">cuidado.</em>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65 sm:text-base">
              Um atendimento pensado para entender suas preferências e valorizar sua beleza.
            </p>
            <ul className="mt-5 space-y-2.5">
              {carePoints.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                  <span className="mt-0.5 inline-flex text-primary">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
