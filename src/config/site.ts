import heroImage from '../assets/images/hero-poliana.jpg'
import heroOverlay from '../assets/images/hero-overlay-olho.jpg'
import gallery1 from '../assets/images/galeria-01.jpg'
import gallery2 from '../assets/images/galeria-02.jpg'
import gallery3 from '../assets/images/galeria-03.jpg'
import spooliesImage from '../assets/images/escovinhas-rosas.jpg'

export const siteConfig = {
  brand: {
    name: 'Design Aganete',
    title: 'DESIGN AGANETE',
    subtitle: 'LASH & BEAUTY',
  },
  whatsapp: {
    display: '(31) 99286-6047',
    international: '5531992866047',
  },
  address: {
    street: 'Rua Romeiro Gomes Viera, 27',
    neighborhood: 'Bairro Mangueiras',
    full: 'Rua Romeiro Gomes Viera, 27 — Bairro Mangueiras',
  },
  /** Ex.: '@design.aganete' — deixe vazio para ocultar na interface. */
  instagram: '',
  appointmentNote: 'Atendimento com hora marcada',
  images: {
    hero: {
      src: heroImage,
      model: 'Modelo',
    },
    heroOverlay: {
      src: heroOverlay,
      model: 'Modelo',
    },
    spoolies: {
      src: spooliesImage,
      model: 'Modelo',
    },
  },
  messages: {
    general:
      'Olá, Design Aganete! Vim pelo site e gostaria de agendar um horário. Pode me informar a disponibilidade?',
    fox: 'Olá, Design Aganete! Vim pelo site e tenho interesse no Fox de R$ 100,00. Quais horários estão disponíveis?',
    volumeBossGirl:
      'Olá, Design Aganete! Vim pelo site e tenho interesse no Volume Boss Girl de R$ 100,00. Quais horários estão disponíveis?',
    volumeBrasileiro:
      'Olá, Design Aganete! Vim pelo site e tenho interesse no Volume Brasileiro de R$ 90,00. Quais horários estão disponíveis?',
    doubt:
      'Olá, Design Aganete! Vim pelo site e gostaria de tirar uma dúvida sobre os serviços de cílios.',
  },
  lashServices: [
    {
      id: 'fox',
      name: 'Fox',
      image: gallery1,
      imagePosition: 'object-[center_42%]',
      application: 'R$ 100,00',
      maintenance: 'R$ 85,00',
      messageKey: 'fox' as const,
      effect: 'Alongado e marcante',
      bestFor: 'Quem busca alongar o olhar com efeito felino.',
      details:
        'Mais comprimento nas pontas externas, abrindo e alongando o olhar com elegância. Ideal para quem busca efeito felino.',
    },
    {
      id: 'volume-boss-girl',
      name: 'Volume Boss Girl',
      image: gallery2,
      imagePosition: 'object-[center_38%]',
      application: 'R$ 100,00',
      maintenance: 'R$ 85,00',
      messageKey: 'volumeBossGirl' as const,
      effect: 'Volume intenso',
      bestFor: 'Quem gosta de cílios cheios e com presença.',
      details:
        'Leques densos para um resultado poderoso, dramático e bem definido. Ideal para quem gosta de cílios com presença.',
    },
    {
      id: 'volume-brasileiro',
      name: 'Volume Brasileiro',
      image: gallery3,
      imagePosition: 'object-[center_45%]',
      application: 'R$ 90,00',
      maintenance: 'R$ 85,00',
      messageKey: 'volumeBrasileiro' as const,
      effect: 'Volume suave',
      bestFor: 'Quem prefere um visual cheio com naturalidade.',
      details:
        'Volume equilibrado e versátil, com acabamento delicado e efeito sofisticado no dia a dia.',
    },
  ],
  /** Adicione depoimentos reais aqui. Enquanto vazio, a seção de convite aparece. */
  testimonials: [] as ReadonlyArray<{ name: string; text: string }>,
  careTips: [
    'Evite molhar os cílios nas primeiras 24 horas após a aplicação.',
    'Não use demaquilante oleoso na região dos olhos.',
    'Evite esfregar, puxar ou dormir com o rosto pressionado sobre os cílios.',
    'Escove com cuidado usando a escovinha indicada, quando orientado.',
  ],
  prepTips: [
    'Venha com os cílios limpos e sem máscara.',
    'Evite cafeína em excesso se isso costuma deixar você mais agitada.',
    'Reserve o horário com antecedência pelo WhatsApp.',
    'Tire dúvidas sobre o efeito desejado antes do atendimento.',
  ],
  faqs: [
    {
      question: 'Qual técnica combina comigo?',
      answer:
        'A escolha depende do efeito que você deseja. Converse com a Design Aganete para avaliar as opções e o formato do seu olhar.',
    },
    {
      question: 'Como funciona a manutenção?',
      answer:
        'O prazo e o valor variam conforme a técnica e as condições dos fios. Consulte a Design Aganete para receber a orientação adequada.',
    },
    {
      question: 'Como reservar meu horário?',
      answer:
        'Toque em um dos botões de WhatsApp, informe o serviço desejado e consulte os horários disponíveis.',
    },
    {
      question: 'O procedimento dói?',
      answer:
        'Em geral é confortável. A Design Aganete trabalha com delicadeza e orienta você durante todo o atendimento.',
    },
    {
      question: 'Posso usar maquiagem depois?',
      answer:
        'Sim, com cuidado. Prefira produtos sem óleo na região dos olhos e siga as orientações de pós-aplicação.',
    },
    {
      question: 'Quanto tempo dura o efeito?',
      answer:
        'A duração varia conforme a técnica, os cuidados e o ciclo natural dos fios. A Design Aganete indica a melhor rotina de manutenção para o seu caso.',
    },
  ],
  nav: [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Técnicas', href: '#tecnicas' },
  ],
} as const

export function whatsappUrl(text: string): string {
  return `https://wa.me/${siteConfig.whatsapp.international}?text=${encodeURIComponent(text)}`
}

export function mapsSearchUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.full)}`
}

export function instagramUrl(): string | null {
  const handle = siteConfig.instagram.trim()
  if (!handle) return null
  const clean = handle.replace(/^@/, '')
  return `https://instagram.com/${clean}`
}
