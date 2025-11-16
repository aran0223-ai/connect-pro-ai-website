<template>
  <div class="site-root" style="background:#121212; color:#fff; min-height:100vh;">
    <SiteHeader />
    <main class="container policy-content">
      <h1 style="color:#00FF00;">Refund Policy</h1>
      <p>Last updated: October 24, 2025</p>

      <h2>1. Commission Fee</h2>
      <p>The 15% commission fee charged by Connect Pro AI is <strong>non-refundable</strong>.</p>

      <h2>2. Service Quality</h2>
      <p>Liability for service quality rests solely with the Provider, not the legal entity, <strong>Aran Jallal</strong>.</p>

      <h2>3. Contact</h2>
      <p>
        Legal Entity: Aran Jallal (Sole Proprietor)<br>
        Email: <a href="mailto:liam@connect-pro-ai.net" style="color:#00FF00;">liam@connect-pro-ai.net</a>
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
h1, h2 {
  color: #00FF00;
}
a {
  color: #00FF00;
  text-decoration: underline;
}
</style>
