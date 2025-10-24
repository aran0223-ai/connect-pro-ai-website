<template>
  <div class="site-root">
    <SiteHeader />
    <slot />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<style>
.site-root {
  min-height: 100vh;
  background: #121212;
  color: #ffffff;
}
</style>
