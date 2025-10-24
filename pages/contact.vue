<template>
  <div class="site-root">
    <SiteHeader />
    <main class="container contact-content">
      <h1>Contact Us</h1>
      <p>Email: liam@connect-pro-ai.net</p>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<style scoped>
.contact-content {
  padding: 40px 0;
  max-width: 600px;
  margin: 0 auto;
}
</style>
