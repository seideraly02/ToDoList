<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Instagram, Menu, MessageCircle, X } from 'lucide-vue-next'
import { CONTACTS, navigation } from '@/config/site'
import { createWhatsappLink } from '@/utils/links'
import type { LocaleCode } from '@/types'

const { locale, t } = useI18n()
const isMenuOpen = ref(false)

const whatsappLink = computed(() =>
  createWhatsappLink(
    locale.value === 'kk'
      ? 'Сәлеметсіз бе! Zulfiya Buyer қызметтері туралы білгім келеді.'
      : 'Здравствуйте! Хочу узнать подробнее об услугах Zulfiya Buyer.',
  ),
)

const setLocale = (value: LocaleCode) => {
  locale.value = value
  localStorage.setItem('zulfiya-locale', value)
  document.documentElement.lang = value === 'kk' ? 'kk' : 'ru'
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-black/5 bg-cream/85 backdrop-blur-xl"
  >
    <div
      class="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 lg:px-8"
    >
      <a
        class="flex items-center gap-3"
        href="#top"
        aria-label="Zulfiya Buyer"
        @click="closeMenu"
      >
        <span
          class="grid size-11 place-items-center rounded-2xl bg-ink font-display text-2xl text-cream"
        >
          Z
        </span>
        <span class="leading-tight">
          <strong class="block text-sm font-extrabold tracking-tight">
            {{ t('meta.brand') }}
          </strong>
          <small
            class="block max-w-[190px] truncate text-[10px] font-semibold uppercase tracking-[0.12em] text-black/45"
          >
            {{ t('meta.descriptor') }}
          </small>
        </span>
      </a>

      <nav class="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          class="text-sm font-semibold text-black/60 transition hover:text-black"
        >
          {{ t(item.labelKey) }}
        </a>
      </nav>

      <div class="hidden items-center gap-2 lg:flex">
        <div class="flex rounded-xl border border-black/10 bg-white/50 p-1">
          <button
            v-for="code in (['ru', 'kk'] as LocaleCode[])"
            :key="code"
            type="button"
            class="rounded-lg px-3 py-2 text-xs font-extrabold uppercase transition"
            :class="
              locale === code
                ? 'bg-ink text-white'
                : 'text-black/45 hover:text-black'
            "
            @click="setLocale(code)"
          >
            {{ code }}
          </button>
        </div>

        <a
          :href="CONTACTS.instagram"
          target="_blank"
          rel="noopener"
          class="grid size-11 place-items-center rounded-xl border border-black/10 bg-white/50 transition hover:bg-white"
          aria-label="Instagram"
        >
          <Instagram :size="18" />
        </a>

        <a
          :href="whatsappLink"
          target="_blank"
          rel="noopener"
          class="inline-flex h-11 items-center gap-2 rounded-xl bg-ink px-5 text-sm font-bold text-white transition hover:-translate-y-0.5"
        >
          <MessageCircle :size="17" />
          {{ t('nav.write') }}
        </a>
      </div>

      <button
        type="button"
        class="grid size-11 place-items-center rounded-xl border border-black/10 bg-white/70 lg:hidden"
        :aria-label="isMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
        :aria-expanded="isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
      >
        <X v-if="isMenuOpen" :size="20" />
        <Menu v-else :size="20" />
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-200"
      enter-from-class="-translate-y-3 opacity-0"
      leave-active-class="transition duration-150"
      leave-to-class="-translate-y-3 opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="border-t border-black/5 bg-cream px-5 pb-6 pt-4 lg:hidden"
      >
        <nav class="grid gap-1">
          <a
            v-for="item in navigation"
            :key="item.href"
            :href="item.href"
            class="rounded-xl px-4 py-3 text-sm font-bold hover:bg-white/70"
            @click="closeMenu"
          >
            {{ t(item.labelKey) }}
          </a>
        </nav>

        <div class="mt-4 flex items-center gap-2">
          <button
            v-for="code in (['ru', 'kk'] as LocaleCode[])"
            :key="code"
            type="button"
            class="h-11 flex-1 rounded-xl text-xs font-extrabold uppercase"
            :class="
              locale === code
                ? 'bg-ink text-white'
                : 'border border-black/10 bg-white/60'
            "
            @click="setLocale(code)"
          >
            {{ code }}
          </button>
          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener"
            class="grid size-11 place-items-center rounded-xl bg-[#1f9d61] text-white"
            aria-label="WhatsApp"
          >
            <MessageCircle :size="19" />
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
