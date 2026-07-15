<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ArrowUpRight, MessageCircle } from 'lucide-vue-next'
import { directions } from '@/config/site'
import { createWhatsappLink } from '@/utils/links'

const { t } = useI18n()
</script>

<template>
  <section id="directions" class="section-space">
    <div class="page-container">
      <div class="section-heading">
        <div>
          <p class="section-kicker">{{ t('directions.kicker') }}</p>
          <h2 class="section-title">{{ t('directions.title') }}</h2>
        </div>
        <p class="section-copy">{{ t('directions.intro') }}</p>
      </div>

      <div class="mt-12 grid gap-4 lg:grid-cols-2">
        <article
          v-for="direction in directions"
          :key="direction.id"
          class="group relative isolate min-h-[390px] overflow-hidden rounded-[2.25rem] p-7 shadow-[0_20px_70px_rgba(20,16,12,.07)] sm:p-9"
          :style="{ backgroundColor: direction.surface }"
        >
          <div
            class="pointer-events-none absolute -bottom-24 -right-20 -z-10 size-72 rounded-full border-[62px] opacity-20 transition duration-500 group-hover:scale-110"
            :style="{ borderColor: direction.accent }"
          />

          <div class="flex items-start justify-between">
            <span
              class="grid size-14 place-items-center rounded-2xl bg-white/35 backdrop-blur"
              :style="{ color: direction.accent }"
            >
              <component :is="direction.icon" :size="27" :stroke-width="1.6" />
            </span>
            <span
              class="font-display text-6xl leading-none opacity-20"
              :style="{ color: direction.accent }"
            >
              {{ direction.number }}
            </span>
          </div>

          <div class="mt-20 max-w-md">
            <p
              class="text-xs font-extrabold uppercase tracking-[.16em] opacity-55"
              :style="{ color: direction.accent }"
            >
              {{ t(direction.groupKey) }}
            </p>
            <h3 class="mt-3 font-display text-5xl font-medium leading-none">
              {{ t(direction.titleKey) }}
            </h3>
            <p class="mt-5 text-sm font-semibold leading-6 text-black/55 sm:text-base">
              {{ t(direction.textKey) }}
            </p>
          </div>

          <a
            :href="createWhatsappLink(direction.whatsappText)"
            target="_blank"
            rel="noopener"
            class="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
          >
            <MessageCircle :size="17" />
            {{ t('directions.action') }}
            <ArrowUpRight :size="16" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
