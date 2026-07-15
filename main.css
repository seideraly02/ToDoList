<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ArrowUpRight, Gem, MapPin, Sparkles } from 'lucide-vue-next'
import { CONTACTS } from '@/config/site'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="section-space bg-ink text-cream">
    <div class="page-container">
      <div class="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <div class="relative min-h-[520px]">
          <div
            class="absolute inset-x-0 top-0 h-[86%] overflow-hidden rounded-[2.7rem] bg-[#2b2723] p-8 sm:p-11"
          >
            <div class="absolute inset-0 bg-noise opacity-40" />
            <MapPin class="relative text-[#c8aa8b]" :size="35" />
            <strong
              class="relative mt-24 block max-w-sm font-display text-6xl font-medium leading-[.88]"
            >
              China based.
              <span class="block text-white/30">Global vision.</span>
            </strong>
            <Gem
              class="absolute bottom-10 right-10 text-white/10"
              :size="155"
              :stroke-width=".8"
            />
          </div>

          <div
            class="absolute bottom-0 right-0 w-[68%] rounded-[2rem] bg-rose p-6 text-white shadow-soft sm:p-8"
          >
            <Sparkles :size="22" />
            <strong class="mt-8 block font-display text-5xl leading-none">4</strong>
            <span class="mt-2 block text-xs font-extrabold uppercase tracking-[.15em] text-white/70">
              {{ t('about.factThreeLabel') }}
            </span>
          </div>
        </div>

        <div>
          <p class="section-kicker text-[#d9bfa7]">{{ t('about.kicker') }}</p>
          <h2 class="section-title text-cream">{{ t('about.title') }}</h2>
          <p class="mt-7 max-w-2xl text-base font-medium leading-8 text-white/55 sm:text-lg">
            {{ t('about.text') }}
          </p>

          <dl class="mt-10 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 sm:grid-cols-3">
            <div class="bg-ink p-6">
              <dt class="font-display text-5xl">{{ t('about.factOne') }}</dt>
              <dd class="mt-2 text-xs font-bold uppercase tracking-wider text-white/45">
                {{ t('about.factOneLabel') }}
              </dd>
            </div>
            <div class="bg-ink p-6">
              <dt class="font-display text-5xl">{{ t('about.factTwo') }}</dt>
              <dd class="mt-2 text-xs font-bold uppercase tracking-wider text-white/45">
                {{ t('about.factTwoLabel') }}
              </dd>
            </div>
            <div class="bg-ink p-6">
              <dt class="font-display text-4xl">{{ t('about.factThree') }}</dt>
              <dd class="mt-2 text-xs font-bold uppercase tracking-wider text-white/45">
                {{ t('about.factThreeLabel') }}
              </dd>
            </div>
          </dl>

          <a
            :href="CONTACTS.instagram"
            target="_blank"
            rel="noopener"
            class="mt-8 inline-flex items-center gap-2 text-sm font-extrabold"
          >
            @zulfiya.buyer
            <ArrowUpRight :size="17" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
