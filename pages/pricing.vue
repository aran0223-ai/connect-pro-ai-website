<template>
  <div class="site-root">
    <SiteHeader />
    <main class="container pricing-content">
      <h1>Simple, Transparent Pricing</h1>
      <div class="pricing-card">
        <h2>15% Commission</h2>
        <p>One-time fee on initial contract value</p>
        <ul>
          <li>No monthly fees</li>
          <li>No hidden costs</li>
          <li>Pay only on success</li>
        </ul>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<style scoped>
.pricing-content {
  padding: 40px 0;
  text-align: center;
}
.pricing-card {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid var(--color-accent);
  border-radius: 8px;
}
</style>
