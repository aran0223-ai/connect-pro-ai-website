<template>
  <div class="section-content container">
    <h2 id="services">What we do</h2>
    <p>
      Connect Pro AI helps businesses acquire customers by automating lead
      outreach, matching them with vetted providers, and tracking handoffs.
    </p>

    <div class="cards">
      <div class="card">
        <h3>Referral Automation</h3>
        <p>Automate invites, reminders, and reward distribution.</p>
      </div>
      <div class="card">
        <h3>Tracking & Analytics</h3>
        <p>Understand where referrals come from and measure conversion.</p>
      </div>
      <div class="card">
        <h3>Integrations</h3>
        <p>Connect with your CRM, email, and payment stacks.</p>
      </div>
    </div>

    <h2 id="about">About Connect Pro AI</h2>
    <p>
      Built to make lead brokerage reliable and simple. We focus on usability
      and measurable growth for small and medium businesses.
    </p>

    <h2 id="contact">Contact</h2>
    <p>
      Email us at <a href="mailto:liam@connect-pro-ai.net">liam@connect-pro-ai.net</a> and we'll get back within one
      business day.
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.section-content { padding: 40px 0; }
.cards { display: flex; gap: 16px; margin-top: 20px; }
.card { background: #fff; border: 1px solid #eee; padding: 16px; border-radius: 8px; flex: 1; }
@media (max-width: 800px) { .cards { flex-direction: column; } }
</style>
