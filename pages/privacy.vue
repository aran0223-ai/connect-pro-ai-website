<template>
  <div class="site-root">
    <SiteHeader />
    <main class="container policy-content">
      <h1>Privacy Policy</h1>
      <p>Last updated: October 24, 2025</p>

      <h2>1. Data Controller</h2>
      <p>The data controller responsible for this service is <strong>Aran Jallal</strong>. All data processing activities are conducted in compliance with applicable privacy laws.</p>

      <h2>2. Payment Processing</h2>
      <p>All payment processing is handled by Paddle as our Merchant of Record (MoR). Please refer to Paddle's privacy policy for information about how they process your payment data.</p>

      <h2>3. Data Collection</h2>
      <p>We collect and process only the necessary information required to facilitate business connections and process payments.</p>

      <h2>4. Contact</h2>
      <p>For privacy-related inquiries:<br>
      Contact: Liam Smith<br>
      Email: liam@connect-pro-ai.net</p>
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
h1 { margin-bottom: 1rem; }
</style>
