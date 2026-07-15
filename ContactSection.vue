<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Asterisk } from 'lucide-vue-next'

const { t } = useI18n()

const items = [
  'ticker.china',
  'ticker.turkey',
  'ticker.armenia',
  'ticker.jewelry',
  'ticker.wholesale',
  'ticker.retail',
]
</script>

<template>
  <div class="overflow-hidden border-y border-black/10 bg-white/55 py-4">
    <div class="flex min-w-max items-center gap-8 px-5">
      <template v-for="group in 2" :key="group">
        <template v-for="item in items" :key="`${group}-${item}`">
          <span class="text-sm font-extrabold uppercase tracking-[.14em]">
            {{ t(item) }}
          </span>
          <Asterisk :size="17" class="text-rose" />
        </template>
      </template>
    </div>
  </div>
</template>
