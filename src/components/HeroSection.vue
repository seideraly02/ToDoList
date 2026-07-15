<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  ArrowDownRight,
  ArrowUpRight,
  Diamond,
  Instagram,
  MessageCircle,
  Package,
  ShoppingBag,
  Sparkles,
} from 'lucide-vue-next'
import { CONTACTS } from '@/config/site'
import { createWhatsappLink } from '@/utils/links'

const { locale, t } = useI18n()

const groupLink = computed(() =>
  createWhatsappLink(
    locale.value === 'kk'
      ? 'Сәлеметсіз бе! Өзекті WhatsApp топтарына сілтеме алғым келеді.'
      : 'Здравствуйте! Хочу получить ссылки на актуальные WhatsApp-группы.',
  ),
)
</script>

<template>
  <section id="top" class="relative overflow-hidden pb-14 pt-10 lg:pb-24 lg:pt-20">
    <div
      class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(182,109,118,.18),transparent_30rem),radial-gradient(circle_at_90%_30%,rgba(163,106,67,.16),transparent_32rem)]"
    />

    <div
      class="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.03fr_.97fr] lg:px-8"
    >
      <div>
        <span class="section-pill">
          <Sparkles :size="15" />
          {{ t('hero.badge') }}
        </span>

        <h1
          class="mt-6 max-w-4xl font-display text-[clamp(4.2rem,9vw,8.4rem)] font-medium leading-[0.82] tracking-[-0.065em]"
        >
          {{ t('hero.titleBefore') }}
          <em class="block pr-2 text-rose">{{ t('hero.titleAccent') }}</em>
        </h1>

        <p
          class="mt-8 max-w-xl text-base font-medium leading-7 text-black/55 sm:text-lg"
        >
          {{ t('hero.text') }}
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            :href="groupLink"
            target="_blank"
            rel="noopener"
            class="primary-button"
          >
            <MessageCircle :size="18" />
            {{ t('hero.primary') }}
            <ArrowUpRight :size="17" />
          </a>
          <a
            :href="CONTACTS.instagram"
            target="_blank"
            rel="noopener"
            class="secondary-button"
          >
            <Instagram :size="18" />
            {{ t('hero.secondary') }}
          </a>
        </div>

        <dl class="mt-10 grid max-w-xl grid-cols-3 gap-3">
          <div class="stat-card">
            <dt class="font-display text-4xl leading-none">12K+</dt>
            <dd class="mt-2 text-[11px] font-bold uppercase tracking-wider text-black/45">
              {{ t('hero.statFollowers') }}
            </dd>
          </div>
          <div class="stat-card">
            <dt class="font-display text-4xl leading-none">4</dt>
            <dd class="mt-2 text-[11px] font-bold uppercase tracking-wider text-black/45">
              {{ t('hero.statYears') }}
            </dd>
          </div>
          <div class="stat-card">
            <dt class="font-display text-3xl leading-none">B2B<br />B2C</dt>
            <dd class="mt-2 text-[11px] font-bold uppercase tracking-wider text-black/45">
              {{ t('hero.statFormats') }}
            </dd>
          </div>
        </dl>
      </div>

      <div class="relative mx-auto min-h-[560px] w-full max-w-[590px] lg:min-h-[670px]">
        <div
          class="absolute left-[4%] top-[4%] h-[72%] w-[76%] rotate-[-5deg] overflow-hidden rounded-[2.7rem] bg-[#191715] p-8 text-cream shadow-soft sm:p-10"
        >
          <div class="absolute inset-0 bg-noise opacity-50" />
          <div
            class="absolute -right-24 -top-20 size-80 rounded-full border-[70px] border-white/5"
          />
          <p class="relative text-xs font-bold uppercase tracking-[0.22em] text-white/50">
            Zulfiya Buyer
          </p>
          <Diamond class="relative mt-16 text-[#d9bfa7]" :size="82" :stroke-width="1" />
          <p class="relative mt-10 max-w-[280px] font-display text-5xl leading-[.9]">
            China <span class="text-white/30">·</span> Türkiye
            <span class="text-white/30">·</span> Armenia
          </p>
          <div
            class="relative mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-white/70"
          >
            <ShoppingBag :size="15" />
            Wholesale / Retail
          </div>
        </div>

        <div
          class="absolute bottom-[4%] right-0 w-[58%] rotate-[7deg] rounded-[2.2rem] bg-[#d8bca2] p-6 shadow-soft sm:p-8"
        >
          <div class="flex items-start justify-between gap-3">
            <span
              class="grid size-12 place-items-center rounded-2xl bg-black/10"
            >
              <Package :size="23" />
            </span>
            <ArrowDownRight class="text-black/35" :size="28" />
          </div>
          <strong class="mt-12 block font-display text-4xl leading-none">
            {{ t('hero.noteTitle') }}
          </strong>
          <p class="mt-4 text-sm font-semibold leading-6 text-black/55">
            {{ t('hero.noteText') }}
          </p>
        </div>

        <div
          class="absolute right-[4%] top-[14%] grid size-24 animate-float place-items-center rounded-full border border-black/10 bg-cream shadow-soft"
        >
          <Sparkles :size="31" class="text-rose" />
        </div>

        <div
          class="absolute bottom-[17%] left-0 rounded-2xl border border-black/10 bg-white/80 px-5 py-4 shadow-soft backdrop-blur"
        >
          <strong class="block font-display text-3xl">546+</strong>
          <span class="text-[10px] font-extrabold uppercase tracking-[.16em] text-black/45">
            Instagram posts
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
