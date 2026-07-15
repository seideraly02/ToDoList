<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ArrowUpRight, Heart, Instagram, MessageCircle, Play } from 'lucide-vue-next'
import { CONTACTS } from '@/config/site'

const { t } = useI18n()
</script>

<template>
  <section class="section-space">
    <div class="page-container">
      <div
        class="relative overflow-hidden rounded-[2.8rem] bg-[linear-gradient(135deg,#6f3a8e,#bd526f_52%,#d79758)] p-7 text-white sm:p-11 lg:p-16"
      >
        <div
          class="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full border-[90px] border-white/10"
        />

        <div class="relative grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <span
              class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur"
            >
              <Instagram :size="16" />
              {{ t('social.label') }}
            </span>

            <h2
              class="mt-8 max-w-3xl font-display text-[clamp(3.5rem,7vw,6.8rem)] font-medium leading-[.84] tracking-[-.055em]"
            >
              {{ t('social.title') }}
            </h2>

            <p class="mt-7 max-w-xl text-base font-semibold leading-7 text-white/65">
              {{ t('social.text') }}
            </p>

            <a
              :href="CONTACTS.instagram"
              target="_blank"
              rel="noopener"
              class="mt-8 inline-flex h-13 items-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-ink transition hover:-translate-y-0.5"
            >
              <Instagram :size="18" />
              {{ t('social.action') }}
              <ArrowUpRight :size="17" />
            </a>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div
              class="aspect-[4/5] rotate-[-4deg] rounded-[2rem] bg-white/15 p-5 backdrop-blur"
            >
              <Play :size="30" />
              <div class="mt-24 font-display text-4xl">New arrivals</div>
              <div class="mt-5 flex items-center gap-2 text-sm font-bold text-white/60">
                <Heart :size="17" /> 12K community
              </div>
            </div>
            <div
              class="mt-12 aspect-[4/5] rotate-[5deg] rounded-[2rem] bg-black/25 p-5 backdrop-blur"
            >
              <MessageCircle :size="30" />
              <div class="mt-24 font-display text-4xl">Direct contact</div>
              <div class="mt-5 text-sm font-bold text-white/60">
                @zulfiya.buyer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
