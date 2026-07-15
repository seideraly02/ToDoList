<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { processSteps } from '@/config/site'

const { t } = useI18n()
</script>

<template>
  <section id="process" class="section-space bg-white/45">
    <div class="page-container">
      <div class="section-heading">
        <div>
          <p class="section-kicker">{{ t('process.kicker') }}</p>
          <h2 class="section-title">{{ t('process.title') }}</h2>
        </div>
      </div>

      <div class="mt-12 border-t border-black/10">
        <article
          v-for="(step, index) in processSteps"
          :key="step.titleKey"
          class="grid gap-5 border-b border-black/10 py-7 sm:grid-cols-[90px_1fr_1fr] sm:items-start sm:gap-8 sm:py-9"
        >
          <span class="font-display text-3xl text-rose">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <h3 class="font-display text-3xl font-medium">
            {{ t(step.titleKey) }}
          </h3>
          <p class="text-sm font-semibold leading-7 text-black/50 sm:text-base">
            {{ t(step.textKey) }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
