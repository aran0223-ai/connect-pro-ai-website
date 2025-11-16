<template>
  <div class="site-root" style="background:#121212; color:#fff; min-height:100vh;">
    <SiteHeader />
    <main class="container home-content">
      <section class="hero">
        <h1 style="color:#00FF00;">Connect Pro AI</h1>
        <p>AI-Powered Business Connections</p>
        <p class="pricing-highlight" style="color:#00FF00;">15% Commission</p>
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
.home-content {
  padding: 40px 0;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
.hero h1 {
  color: #00FF00;
}
.pricing-highlight {
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
}
</style>
