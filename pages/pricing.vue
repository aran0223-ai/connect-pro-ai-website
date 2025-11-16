<template>
  <div class="site-root" style="background:#121212; color:#fff; min-height:100vh;">
    <SiteHeader />
    <main class="container pricing-content">
      <h1 style="color:#00FF00;">Simple, Transparent Pricing</h1>
      <div class="pricing-card">
        <h2 style="color:#00FF00;">15% Commission</h2>
        <p>One-time fee on initial contract value</p>
        <ul>
          <li>No monthly fees</li>
          <li>No hidden costs</li>
          <li>Pay only on success</li>
        </ul>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<style scoped>
.pricing-content {
  padding: 40px 0;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
.pricing-card {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #00FF00;
  border-radius: 8px;
}
h1, h2 {
  color: #00FF00;
}
ul {
  list-style-type: disc;
  margin: 1.5rem 0;
  padding-left: 1.5rem;
  text-align: left;
}
li {
  margin: 0.5rem 0;
}
</style>
