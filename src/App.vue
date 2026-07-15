<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import AboutSection from '@/components/AboutSection.vue'
import BenefitsSection from '@/components/BenefitsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import DirectionsSection from '@/components/DirectionsSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import SocialSection from '@/components/SocialSection.vue'
import TickerStrip from '@/components/TickerStrip.vue'
</script>

<template>
  <div class="min-h-screen bg-cream text-ink">
    <AppHeader />
    <main>
      <HeroSection />
      <TickerStrip />
      <DirectionsSection />
      <AboutSection />
      <BenefitsSection />
      <ProcessSection />
      <SocialSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
