import type { Component } from 'vue'

export type LocaleCode = 'ru' | 'kk'

export interface NavigationItem {
  labelKey: string
  href: string
}

export interface Direction {
  id: 'china' | 'turkey' | 'armenia' | 'jewelry'
  titleKey: string
  textKey: string
  groupKey: string
  whatsappText: string
  icon: Component
  accent: string
  surface: string
  number: string
}

export interface Benefit {
  titleKey: string
  textKey: string
  icon: Component
}

export interface ProcessStep {
  titleKey: string
  textKey: string
}
