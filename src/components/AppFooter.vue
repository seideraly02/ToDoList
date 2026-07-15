<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Instagram, MessageCircle } from 'lucide-vue-next'
import { CONTACTS } from '@/config/site'
import { createWhatsappLink } from '@/utils/links'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-black/10 py-8">
    <div
      class="page-container flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"
    >
      <a href="#top" class="flex items-center gap-3">
        <span
          class="grid size-10 place-items-center rounded-xl bg-ink font-display text-xl text-cream"
        >
          Z
        </span>
        <span>
          <strong class="block text-sm font-extrabold">{{ t('meta.brand') }}</strong>
          <small class="text-xs font-semibold text-black/40">{{ t('footer.note') }}</small>
        </span>
      </a>

      <p class="text-xs font-semibold text-black/40">
        © {{ year }} · {{ t('footer.rights') }}
      </p>

      <div class="flex gap-2">
        <a
          :href="CONTACTS.instagram"
          target="_blank"
          rel="noopener"
          class="grid size-10 place-items-center rounded-xl border border-black/10 bg-white/50"
          aria-label="Instagram"
        >
          <Instagram :size="17" />
        </a>
        <a
          :href="createWhatsappLink('Здравствуйте!')"
          target="_blank"
          rel="noopener"
          class="grid size-10 place-items-center rounded-xl border border-black/10 bg-white/50"
          aria-label="WhatsApp"
        >
          <MessageCircle :size="17" />
        </a>
      </div>
    </div>
  </footer>
</template>
