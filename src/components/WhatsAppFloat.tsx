import { siteConfig, whatsappUrl } from '../config/site'
import { IconWhatsApp } from './Icons'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(siteConfig.messages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-offset-4 sm:right-7 sm:bottom-7 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-3 sm:text-sm sm:font-medium"
      aria-label="Abrir conversa no WhatsApp"
    >
      <IconWhatsApp className="h-6 w-6" />
      <span className="hidden pr-1 sm:inline">WhatsApp</span>
    </a>
  )
}
