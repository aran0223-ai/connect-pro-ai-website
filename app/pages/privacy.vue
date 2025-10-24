<template>
  <div class="container">
    <div class="card section-content">
      <h1>Privacy Policy</h1>

      <p>The data controller responsible for this service is <strong>Aran Jallal</strong>.</p>

      <h2>Merchant of Record</h2>
      <p>Payments and transaction processing are handled by <strong>Paddle</strong>, which acts as the Merchant of Record (MoR) for purchases made through this service. Paddle processes payments on behalf of the Provider and handles billing, invoicing, and local tax collection where applicable.</p>

      <h2>What we collect</h2>
      <p>We collect information necessary to provide the service and complete transactions. Any personal data collected is processed in accordance with applicable data protection laws.</p>

      <h2>Contact</h2>
      <p>For privacy-related requests or questions, contact the data controller: <strong>Aran Jallal</strong>.</p>
    </div>
  </div>
</template>
<template>
  <div class="site-root">
    <SiteHeader />
    <main class="container policy-content">
      <h1>Privacy Policy</h1>
      <p>Last updated: October 24, 2025</p>

      <h2>1. Introduction</h2>
      <p>Connect Pro AI ("we" or "us"), operated by Liam Smith, is committed to protecting your privacy. This policy explains how we handle your personal data in compliance with GDPR and applicable data protection laws.</p>

      <h2>2. Data We Collect</h2>
      <p>We collect and process only essential data:</p>
      <ul>
        <li>Email addresses for communication</li>
        <li>Business profile information</li>
        <li>Publicly available business data</li>
      </ul>

      <h2>3. Payment Data Handling</h2>
      <p>All financial transactions are processed by Paddle as our Merchant of Record. We do not:</p>
      <ul>
        <li>Store credit card information</li>
        <li>Process financial data directly</li>
        <li>Handle payment security (managed by Paddle)</li>
      </ul>

      <h2>4. GDPR Compliance</h2>
      <p>Paddle handles all payment-related GDPR compliance. For other data:</p>
      <ul>
        <li>You have the right to access your data</li>
        <li>You can request data deletion</li>
        <li>You can opt out of communications</li>
      </ul>

      <h2>5. Data Usage</h2>
      <p>We use your data solely for:</p>
      <ul>
        <li>Facilitating service provider matches</li>
        <li>Essential business communications</li>
        <li>Service improvement and analytics</li>
      </ul>

      <h2>6. Data Protection</h2>
      <p>We implement appropriate security measures to protect your information and:</p>
      <ul>
        <li>Use encrypted connections</li>
        <li>Regularly update security protocols</li>
        <li>Limit data access to essential personnel</li>
      </ul>

      <h2>7. Contact Information</h2>
      <p>For privacy concerns:</p>
      <p>Data Protection Officer<br>
      Connect Pro AI<br>
      Email: privacy@connect-pro-ai.net</p>
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
p { margin: 1rem 0; }
</style>