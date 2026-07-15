import { createI18n } from 'vue-i18n'
import ru from './locales/ru'
import kk from './locales/kk'
import type { LocaleCode } from '@/types'

const savedLocale = localStorage.getItem('zulfiya-locale') as LocaleCode | null
const initialLocale: LocaleCode = savedLocale === 'kk' ? 'kk' : 'ru'

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'ru',
  messages: {
    ru,
    kk,
  },
})
