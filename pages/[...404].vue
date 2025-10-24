<template>
  <div class="site-root">
    <SiteHeader />
    <main class="container error-content">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <NuxtLink to="/" class="btn-primary">Return Home</NuxtLink>
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
</style>
