<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ArrowUpRight, Instagram, MessageCircle, Phone } from 'lucide-vue-next'
import { CONTACTS } from '@/config/site'
import { createWhatsappLink } from '@/utils/links'

const { locale, t } = useI18n()

const whatsappLink = computed(() =>
  createWhatsappLink(
    locale.value === 'kk'
      ? 'Сәлеметсіз бе! Тауарға тапсырыс беру туралы кеңес алғым келеді.'
      : 'Здравствуйте! Хочу получить консультацию по заказу товара.',
  ),
)
</script>

<template>
  <section id="contacts" class="pb-16 pt-8 lg:pb-24">
    <div class="page-container">
      <div
        class="relative overflow-hidden rounded-[2.8rem] bg-ink p-7 text-cream sm:p-11 lg:p-16"
      >
        <div class="absolute inset-0 bg-noise opacity-30" />
        <div
          class="pointer-events-none absolute -right-20 -top-32 size-96 rounded-full border-[80px] border-rose/20"
        />

        <div class="relative max-w-4xl">
          <p class="section-kicker text-[#d9bfa7]">{{ t('contacts.kicker') }}</p>
          <h2
            class="font-display text-[clamp(3.3rem,7vw,6.5rem)] font-medium leading-[.88] tracking-[-.05em]"
          >
            {{ t('contacts.title') }}
          </h2>
          <p class="mt-7 max-w-2xl text-base font-semibold leading-7 text-white/55">
            {{ t('contacts.text') }}
          </p>

          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener"
              class="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#249f64] px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
            >
              <MessageCircle :size="19" />
              {{ t('contacts.whatsapp') }}
              <ArrowUpRight :size="17" />
            </a>
            <a
              :href="CONTACTS.instagram"
              target="_blank"
              rel="noopener"
              class="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 text-sm font-extrabold transition hover:bg-white/10"
            >
              <Instagram :size="19" />
              {{ t('contacts.instagram') }}
            </a>
          </div>

          <div class="mt-10 flex items-center gap-3 text-sm font-bold text-white/50">
            <Phone :size="17" />
            <span>{{ t('contacts.phoneLabel') }}: +7 702 464 64 41</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
