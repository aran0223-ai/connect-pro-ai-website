<template>
  <footer class="site-footer">
    <div class="container">
      <nav class="legal-links">
        <NuxtLink to="/terms">Terms</NuxtLink>
        <NuxtLink to="/privacy">Privacy</NuxtLink>
        <NuxtLink to="/refund">Refund</NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: var(--color-background);
  border-top: 1px solid var(--color-accent);
  padding: 2rem 0;
}
</style>
