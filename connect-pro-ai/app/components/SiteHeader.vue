<template>
  <header class="site-header">
    <div class="container">
      <div class="brand">
  <span>Connect Pro AI</span>
      </div>
      <nav class="nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/terms">Terms</NuxtLink>
        <NuxtLink to="/privacy">Privacy</NuxtLink>
        <NuxtLink to="/refund">Refunds</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.site-header {
  background: var(--bg);
  border-bottom: 1px solid rgba(255,255,255,0.04);
  position: sticky;
  top: 0;
  z-index: 50;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.brand {
  font-weight: 800;
  font-size: 20px;
  color: var(--accent);
  letter-spacing: 0.04em;
  text-shadow: 0 0 12px var(--razer-green);
}
.brand .logo { width: 40px; height: 40px; margin-right: 12px; border-radius: 8px; box-shadow: 0 0 12px var(--razer-green); }
.nav a {
  margin-left: 16px;
  color: var(--accent);
  text-decoration: none;
  font-weight: 700;
  transition: color 160ms, text-shadow 160ms;
}
.nav a:hover { color: var(--accent-strong); text-shadow: 0 0 12px var(--razer-green); }
</style>
