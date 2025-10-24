<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>© 2025 Connect Pro AI — Liam Smith</div>
      <div class="links">
        <a href="/privacy" rel="noopener">Privacy Policy</a>
        <a href="/terms" rel="noopener">Terms</a>
        <a href="/refund" rel="noopener">Refunds</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.site-footer { border-top: 1px solid rgba(255,255,255,0.04); padding: 24px 0; background: var(--bg); color: var(--text); }
.footer-inner { max-width: 960px; margin: 0 auto; display:flex; justify-content:space-between; align-items:center; padding:0 16px; }
.links a { margin-left: 12px; color: var(--teal); text-decoration:none; font-weight:600 }
.links a:hover { color: var(--teal-strong); }
</style>
