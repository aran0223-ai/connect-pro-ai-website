<template>
  <div class="site-root">
    <SiteHeader />
    <main>
      <section class="hero">
        <h1>Connect Pro AI</h1>
        <p>AI-Powered Business Connections</p>
      </section>
      <section class="pricing">
        <h2>Simple Pricing</h2>
        <p class="pricing-highlight">15% Commission</p>
        <p>One-time fee on initial contract value</p>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<style scoped>
.hero {
  padding: 4rem 0;
  text-align: center;
  background: var(--color-background);
}
.pricing {
  padding: 2rem 0;
  text-align: center;
}
</style>
