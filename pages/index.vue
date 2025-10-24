<template>
  <div class="site-root">
    <SiteHeader />
    <Hero />
    <main>
      <section class="pricing-section">
        <h2 class="accent-text">Transparent Pricing</h2>
        <p class="pricing-highlight">15% Commission</p>
        <p>One-time fee on initial contract value</p>
      </section>
    </main>
    <footer class="site-footer">
      <div class="container">
        <div class="legal-links">
          <NuxtLink to="/terms">Terms of Service</NuxtLink>
          <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
          <NuxtLink to="/refund">Refund Policy</NuxtLink>
        </div>
        <p class="legal-entity">
          Operated by Aran Jallal
        </p>
      </div>
    </footer>
  </div>
</template>
