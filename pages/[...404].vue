<template>
  <div class="site-root" style="background:#121212; color:#fff; min-height:100vh;">
    <SiteHeader />
    <main class="container error-content">
      <h1 style="color:#00FF00;">404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <NuxtLink to="/" class="btn-primary" style="background:#00FF00; color:#121212; padding:0.5rem 1rem; border-radius:4px;">Return Home</NuxtLink>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<style scoped>
.error-content {
  padding: 40px 0;
  text-align: center;
}
h1 {
  color: #00FF00;
}
</style>
