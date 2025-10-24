<template>
  <div class="site-root">
    <SiteHeader />
    <main class="container policy-content">
      <h1>Terms of Service</h1>
      <p>Last updated: October 24, 2025</p>

      <h2>1. Legal Entity</h2>
      <p>This service is a trade name operated by <strong>Aran Jallal</strong>, Sole Proprietor, doing business as "Connect Pro AI". All legal agreements and commissions are settled with the legal entity, <strong>Aran Jallal</strong>.</p>

      <h2>2. Service Description</h2>
      <p>Connect Pro AI operates as an autonomous AI middleman platform that: <ul><li>Facilitates connections between businesses seeking services and vetted providers/agencies.</li><li>Charges a 15% commission fee on the initial contract value (or first retainer). We do not directly provide marketing services.</li></ul></p>

      <h2>3. Payment Terms</h2>
      <p>All transactions are processed through Paddle as the Merchant of Record. Provider payouts are made via USDT (crypto). By using our service, you agree to: <ul><li>Pay the agreed service fee (15% of initial contract value).</li><li>Process all payments through our designated payment processor (Paddle).</li><li>Acknowledge that all commissions are settled with the legal entity, Aran Jallal.</li></ul></p>

      <h2>4. Service Guarantee</h2>
      <p>We guarantee: Verification of provider credentials; Secure and transparent handling of introductions; A clear, fixed fee structure.</p>

      <h2>5. Limitation of Liability</h2>
      <p>Connect Pro AI acts solely as an intermediary. We are not responsible for: The quality of services provided by matched providers; Direct or indirect damages arising from provider services; Business outcomes related to matched services.</p>

      <h2>6. Contact Information</h2>
      <p>
        Trading As: Liam Smith | AI Partner<br>
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
h1 { margin-bottom: 1rem; }
ul { list-style-type: disc; margin: 1.5rem 0; padding-left: 1.5rem; }
li { margin: 0.5rem 0; }
</style>
