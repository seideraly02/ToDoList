<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { benefits } from '@/config/site'

const { t } = useI18n()
</script>

<template>
  <section class="section-space">
    <div class="page-container">
      <div class="section-heading">
        <div>
          <p class="section-kicker">{{ t('benefits.kicker') }}</p>
          <h2 class="section-title">{{ t('benefits.title') }}</h2>
        </div>
      </div>

      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="benefit in benefits"
          :key="benefit.titleKey"
          class="rounded-[1.8rem] border border-black/10 bg-white/55 p-7 transition duration-300 hover:-translate-y-2 hover:bg-white"
        >
          <span class="grid size-12 place-items-center rounded-2xl bg-sand">
            <component :is="benefit.icon" :size="23" :stroke-width="1.6" />
          </span>
          <h3 class="mt-12 text-lg font-extrabold">{{ t(benefit.titleKey) }}</h3>
          <p class="mt-3 text-sm font-semibold leading-6 text-black/50">
            {{ t(benefit.textKey) }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
