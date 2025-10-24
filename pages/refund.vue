<template>
  <div class="site-root">
    <SiteHeader />
    <main class="container policy-content">
      <h1>Refund Policy</h1>
      <p>Last updated: October 24, 2025</p>

      <h2>Commission Fee</h2>
      <p>The 15% commission fee charged by Connect Pro AI is <strong>non-refundable</strong>.</p>

      <h2>Contact</h2>
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
