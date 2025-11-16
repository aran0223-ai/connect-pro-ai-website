<template>
  <footer class="site-footer">
    <div class="container footer-links">
      <NuxtLink to="/" class="footer-link">Home</NuxtLink>
      <NuxtLink to="/about" class="footer-link">About</NuxtLink>
      <NuxtLink to="/terms" class="footer-link">Terms</NuxtLink>
      <NuxtLink to="/privacy" class="footer-link">Privacy</NuxtLink>
      <NuxtLink to="/refund" class="footer-link">Refund</NuxtLink>
    </div>
    <div class="container copyright">
      &copy; {{ new Date().getFullYear() }} Connect Pro AI. All rights reserved.
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #1a1a1a;
  border-top: 1px solid #00FF00;
  padding: 2rem 0 1rem 0;
  color: #fff;
  text-align: center;
}
.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.footer-link {
  color: #00FF00;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: color 0.2s;
}
.footer-link:hover {
  color: #00A300;
}
</style>
