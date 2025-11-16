<template>
  <div class="site-root" style="background:#121212; color:#fff; min-height:100vh;">
    <SiteHeader />
    <main class="container about-content">
      <h1 style="color:#00FF00;">About Connect Pro AI</h1>
      <p>We're an AI-powered platform connecting businesses with verified service providers.</p>
      <div class="team">
        <h2 style="color:#00FF00;">Our Team</h2>
        <div class="team-member">
          <h3>Liam Smith</h3>
          <p>Brand & Operations</p>
        </div>
        <div class="team-member">
          <h3>Aran Jallal</h3>
          <p>Legal Entity & Proprietor</p>
        </div>
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
.about-content {
  padding: 40px 0;
  max-width: 800px;
  margin: 0 auto;
}
h1, h2 {
  color: #00FF00;
}
.team {
  margin-top: 2rem;
}
.team-member {
  margin: 1rem 0;
}
</style>
