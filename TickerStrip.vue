import { CONTACTS } from '@/config/site'

export const createWhatsappLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${CONTACTS.whatsappPhone}?text=${encodedMessage}`
}
