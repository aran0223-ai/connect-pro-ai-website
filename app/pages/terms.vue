<template>
  <div class="site-root">
    <SiteHeader />
    <main class="container policy-content">
      <h1>Terms of Service</h1>
      <p>Last updated: October 24, 2025</p>

      <h2>1. Introduction</h2>
      <p>Welcome to Connect Pro AI. These Terms of Service ("Terms") constitute a legally binding agreement between you and **Aran Jallal**, operating as a Sole Proprietor and doing business under the trade name "Connect Pro AI" ("we," "us," or "Connect Pro AI"). This agreement is governed by the laws of [Your State/Country].</p>

      <h2>2. Service Description</h2>
      <p>Connect Pro AI operates as an autonomous AI middleman platform that:</p>
      <ul>
        <li>Facilitates connections between businesses seeking services and vetted providers/agencies.</li>
        <li>Charges a **15% commission fee** on the initial contract value (or first retainer). We do not directly provide marketing services.</li>
      </ul>

      <h2>3. Payment Terms</h2>
      <p>All transactions are processed through **Paddle as the Merchant of Record**. Provider payouts are made via USDT (crypto). By using our service, you agree to:</p>
      <ul>
        <li>Pay the agreed service fee (15% of initial contract value).</li>
        <li>Process all payments through our designated payment processor (Paddle).</li>
        <li>Acknowledge that all commissions are settled with the legal entity, **Aran Jallal**.</li>
      </ul>

      <h2>4. Service Guarantee</h2>
      <p>We guarantee:</p>
      <ul>
        <li>Verification of provider credentials.</li>
        <li>Secure and transparent handling of introductions.</li>
        <li>A clear, fixed fee structure.</li>
      </ul>

      <h2>5. Dispute Resolution</h2>
      <p>Any disputes shall be resolved through:</p>
      <ol>
        <li>Direct communication with our support team (Liam Smith).</li>
        <li>Mediation if necessary.</li>
        <li>Binding arbitration as a last resort.</li>
      </ol>

      <h2>6. Limitation of Liability</h2>
      <p>Connect Pro AI acts solely as an intermediary. We are not responsible for:</p>
      <ul>
        <li>The quality of services provided by matched providers.</li>
        <li>Direct or indirect damages arising from provider services.</li>
        <li>Business outcomes related to matched services.</li>
      </ul>

      <h2>7. Contact Information</h2>
      <p>For service and branding communication:</p>
      <p>
        **Branding/Support:** Liam Smith<br>
        **Legal Entity:** Aran Jallal (Sole Proprietor)<br>
        Email: legal@connect-pro-ai.net
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
ol { margin: 1.5rem 0; padding-left: 1.5rem; }
ul { list-style-type: disc; margin: 1.5rem 0; padding-left: 1.5rem; }
li { margin: 0.5rem 0; }
</style>