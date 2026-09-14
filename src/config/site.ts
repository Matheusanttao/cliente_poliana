import heroImage from '../assets/images/hero-poliana.jpg'
import heroOverlay from '../assets/images/hero-overlay-olho.jpg'
import gallery1 from '../assets/images/galeria-01.jpg'
import gallery2 from '../assets/images/galeria-02.jpg'
import gallery3 from '../assets/images/galeria-03.jpg'
import spooliesImage from '../assets/images/escovinhas-rosas.jpg'

export const siteConfig = {
  brand: {
    name: 'Poliana',
    title: 'POLIANA',
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
  /** Ex.: '@poliana.lash' — deixe vazio para ocultar na interface. */
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
    gallery: [
      { src: gallery1, model: 'Volume Fox', price: 'R$ 100,00', messageKey: 'fox' as const },
      {
        src: gallery2,
        model: 'Volume Boss Girl',
        price: 'R$ 100,00',
        messageKey: 'volumeBossGirl' as const,
      },
      {
        src: gallery3,
        model: 'Volume Brasileiro',
        price: 'R$ 90,00',
        messageKey: 'volumeBrasileiro' as const,
      },
    ],
    spoolies: {
      src: spooliesImage,
      model: 'Modelo',
    },
  },
  messages: {
    general:
      'Olá, Poliana! Vim pelo site e gostaria de agendar um horário. Pode me informar a disponibilidade?',
    fox: 'Olá, Poliana! Vim pelo site e tenho interesse no Fox de R$ 100,00. Quais horários estão disponíveis?',
    volumeBossGirl:
      'Olá, Poliana! Vim pelo site e tenho interesse no Volume Boss Girl de R$ 100,00. Quais horários estão disponíveis?',
    volumeBrasileiro:
      'Olá, Poliana! Vim pelo site e tenho interesse no Volume Brasileiro de R$ 90,00. Quais horários estão disponíveis?',
    doubt:
      'Olá, Poliana! Vim pelo site e gostaria de tirar uma dúvida sobre os serviços de cílios.',
  },
  lashServices: [
    {
      id: 'fox',
      name: 'Fox',
      application: 'R$ 100,00',
      maintenance: 'Consulte',
      messageKey: 'fox' as const,
      effect: 'Alongado e marcante',
      bestFor: 'Quem busca alongar o olhar com efeito felino.',
      details:
        'Mais comprimento nas pontas externas, abrindo e alongando o olhar com elegância.',
    },
    {
      id: 'volume-boss-girl',
      name: 'Volume Boss Girl',
      application: 'R$ 100,00',
      maintenance: 'Consulte',
      messageKey: 'volumeBossGirl' as const,
      effect: 'Volume intenso',
      bestFor: 'Quem gosta de cílios cheios e com presença.',
      details:
        'Leques densos para um resultado poderoso, dramático e bem definido.',
    },
    {
      id: 'volume-brasileiro',
      name: 'Volume Brasileiro',
      application: 'R$ 90,00',
      maintenance: 'Consulte',
      messageKey: 'volumeBrasileiro' as const,
      effect: 'Volume suave',
      bestFor: 'Quem prefere um visual cheio com naturalidade.',
      details:
        'Volume equilibrado, com acabamento delicado e efeito sofisticado no dia a dia.',
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
        'A escolha depende do efeito que você deseja. Converse com a Poliana para avaliar as opções e o formato do seu olhar.',
    },
    {
      question: 'Como funciona a manutenção?',
      answer:
        'O prazo e o valor variam conforme a técnica e as condições dos fios. Consulte a Poliana para receber a orientação adequada.',
    },
    {
      question: 'Como reservar meu horário?',
      answer:
        'Toque em um dos botões de WhatsApp, informe o serviço desejado e consulte os horários disponíveis.',
    },
    {
      question: 'O procedimento dói?',
      answer:
        'Em geral é confortável. A Poliana trabalha com delicadeza e orienta você durante todo o atendimento.',
    },
    {
      question: 'Posso usar maquiagem depois?',
      answer:
        'Sim, com cuidado. Prefira produtos sem óleo na região dos olhos e siga as orientações de pós-aplicação.',
    },
    {
      question: 'Quanto tempo dura o efeito?',
      answer:
        'A duração varia conforme a técnica, os cuidados e o ciclo natural dos fios. A Poliana indica a melhor rotina de manutenção para o seu caso.',
    },
  ],
  nav: [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Inspirações', href: '#inspiracoes' },
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
