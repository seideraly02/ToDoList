import {
  BadgeCheck,
  BriefcaseBusiness,
  Diamond,
  Gem,
  Globe2,
  HeartHandshake,
  PackageCheck,
  SearchCheck,
  Shirt,
  Sparkles,
} from 'lucide-vue-next'
import type {
  Benefit,
  Direction,
  NavigationItem,
  ProcessStep,
} from '@/types'

export const CONTACTS = {
  instagram: 'https://www.instagram.com/zulfiya.buyer/',
  whatsappPhone: '77024646441',
}

export const navigation: NavigationItem[] = [
  { labelKey: 'nav.directions', href: '#directions' },
  { labelKey: 'nav.about', href: '#about' },
  { labelKey: 'nav.process', href: '#process' },
  { labelKey: 'nav.contacts', href: '#contacts' },
]

export const directions: Direction[] = [
  {
    id: 'china',
    titleKey: 'directions.china.title',
    textKey: 'directions.china.text',
    groupKey: 'directions.china.group',
    whatsappText:
      'Здравствуйте! Хочу получить ссылку на группу с товарами из Китая.',
    icon: PackageCheck,
    accent: '#8C343B',
    surface: '#E9C3BD',
    number: '01',
  },
  {
    id: 'turkey',
    titleKey: 'directions.turkey.title',
    textKey: 'directions.turkey.text',
    groupKey: 'directions.turkey.group',
    whatsappText:
      'Здравствуйте! Хочу получить ссылку на группу с товарами и бизнес-направлением из Турции.',
    icon: Shirt,
    accent: '#1F5568',
    surface: '#BCD9E1',
    number: '02',
  },
  {
    id: 'armenia',
    titleKey: 'directions.armenia.title',
    textKey: 'directions.armenia.text',
    groupKey: 'directions.armenia.group',
    whatsappText:
      'Здравствуйте! Хочу получить ссылку на группу с товарами из Армении / Еревана.',
    icon: BriefcaseBusiness,
    accent: '#6C4D36',
    surface: '#D9C6AE',
    number: '03',
  },
  {
    id: 'jewelry',
    titleKey: 'directions.jewelry.title',
    textKey: 'directions.jewelry.text',
    groupKey: 'directions.jewelry.group',
    whatsappText:
      'Здравствуйте! Хочу получить ссылку на группу с золотом и натуральными бриллиантами.',
    icon: Diamond,
    accent: '#5D415D',
    surface: '#DCCADA',
    number: '04',
  },
]

export const benefits: Benefit[] = [
  {
    titleKey: 'benefits.market.title',
    textKey: 'benefits.market.text',
    icon: Globe2,
  },
  {
    titleKey: 'benefits.choice.title',
    textKey: 'benefits.choice.text',
    icon: SearchCheck,
  },
  {
    titleKey: 'benefits.trust.title',
    textKey: 'benefits.trust.text',
    icon: BadgeCheck,
  },
  {
    titleKey: 'benefits.support.title',
    textKey: 'benefits.support.text',
    icon: HeartHandshake,
  },
]

export const processSteps: ProcessStep[] = [
  {
    titleKey: 'process.steps.request.title',
    textKey: 'process.steps.request.text',
  },
  {
    titleKey: 'process.steps.selection.title',
    textKey: 'process.steps.selection.text',
  },
  {
    titleKey: 'process.steps.confirm.title',
    textKey: 'process.steps.confirm.text',
  },
  {
    titleKey: 'process.steps.delivery.title',
    textKey: 'process.steps.delivery.text',
  },
]

export const decorativeIcons = {
  gem: Gem,
  sparkle: Sparkles,
}
