<template>
  <div class="site-root">
    <SiteHeader />

    <main>
      <Hero />

      <section class="content-section">
        <div class="container">
          <div class="pricing-card card">
            <h2>Simple, Performance-Based Pricing</h2>
            <p class="lead">We charge a transparent <strong>15% commission</strong> on successful matches.</p>
            <p class="muted">No upfront fees. Pay only when you find the right provider.</p>
          </div>

          <div class="legal-links card">
            <h3>Legal Information</h3>
            <div class="links">
              <NuxtLink to="/terms">Terms & Conditions</NuxtLink>
              <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
              <NuxtLink to="/refund">Refund Policy</NuxtLink>
            </div>
            <p class="muted">Service operated by <strong>Aran Jallal</strong></p>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from '../components/SiteHeader.vue'
import Hero from '../components/Hero.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<style scoped>
.pricing-card {
  margin-bottom: 2rem;
  background: linear-gradient(180deg, rgba(0,255,0,0.03), rgba(0,255,0,0.01));
  border: 1px solid rgba(0,255,0,0.08);
}
.pricing-card h2 { color: var(--accent); margin-bottom: 1rem; }
.lead { font-size: 1.2rem; margin-bottom: 0.5rem; }

.legal-links { background: var(--panel); }
.legal-links h3 { margin-bottom: 1rem; }
.links { display: flex; gap: 1.5rem; margin: 1rem 0; }
.links a { color: var(--accent); text-decoration: none; }
.links a:hover { text-decoration: underline; }
</style>

<style src="~/assets/site.css"></style>

