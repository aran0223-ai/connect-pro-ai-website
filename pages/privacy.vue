<template>
  <div class="site-root">
    <SiteHeader />
    <main class="container policy-content">
      <h1>Privacy Policy</h1>
      <p>Last updated: October 24, 2025</p>

      <h2>1. Data Controller</h2>
      <p>The data controller responsible for this service is <strong>Aran Jallal</strong>.</p>

      <h2>2. Data Processing</h2>
      <p>All payment processing is handled by Paddle as our Merchant of Record (MoR).</p>

      <h2>3. Contact</h2>
      <p>
        Legal Entity: Aran Jallal (Sole Proprietor)<br>
        Email: liam@connect-pro-ai.net
      </p>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<style scoped>
.policy-content {
  padding: 40px 0;
  max-width: 800px;
  margin: 0 auto;
}
</style>
