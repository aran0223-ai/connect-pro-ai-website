<template>
  <div class="site-root" style="background:#121212; color:#fff; min-height:100vh;">
    <SiteHeader />
    <main class="container policy-content">
      <h1 style="color:#00FF00;">Privacy Policy</h1>
      <p>Last updated: October 24, 2025</p>

      <h2>1. Data Controller</h2>
      <p>The data controller responsible for this service is <strong>Aran Jallal</strong>.</p>

      <h2>2. Payment Processing</h2>
      <p>All payment processing is handled by Paddle as our Merchant of Record (MoR).</p>

      <h2>3. Data Collection</h2>
      <p>We collect only necessary information required to facilitate business connections and process payments.</p>

      <h2>4. Contact</h2>
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
