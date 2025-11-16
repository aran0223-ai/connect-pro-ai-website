<template>
  <div class="site-root" style="background:#121212; color:#fff; min-height:100vh;">
    <SiteHeader />
    <main class="container contact-content">
      <h1 style="color:#00FF00;">Contact Us</h1>
      <p>Email: <a href="mailto:liam@connect-pro-ai.net" style="color:#00FF00;">liam@connect-pro-ai.net</a></p>
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
h1 {
  color: #00FF00;
}
a {
  color: #00FF00;
  text-decoration: underline;
}
</style>
