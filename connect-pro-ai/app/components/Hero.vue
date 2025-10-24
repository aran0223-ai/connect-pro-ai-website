<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-text">
        <h1>Autonomous AI Brokerage for High-Value Leads.</h1>
        <p class="hero-subtitle">AI-powered lead brokerage that matches you with vetted service providers. Payments and compliance handled by Paddle.</p>
        <p class="hero-price"><strong>15% Commission</strong></p>
        <div class="hero-features">
          <p class="feature"><span class="checkmark">✓</span> AI-powered outreach & provider matching</p>
          <p class="feature"><span class="checkmark">✓</span> Vetted providers and secure payments via Paddle</p>
          <p class="feature"><span class="checkmark">✓</span> Only pay on successful handoff — 15% commission</p>
        </div>
        <div class="hero-cta">
          <a class="primary" href="/#contact">Get Started</a>
          <a class="secondary" href="/#services">How It Works</a>
        </div>
      </div>
      <div class="hero-image">
        <!-- Inline SVG illustration representing connections / handoffs (keeps imagery on-brand) -->
        <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="false" role="img" aria-label="Illustration showing connected nodes representing lead handoffs">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0%" stop-color="#00FFFF" stop-opacity="0.18" />
              <stop offset="100%" stop-color="#00E5E5" stop-opacity="0.06" />
            </linearGradient>
          </defs>
          <rect width="600" height="400" rx="12" fill="rgba(255,255,255,0.02)" />
          <g transform="translate(40,40)">
            <circle cx="60" cy="60" r="18" fill="url(#g)" stroke="#00FFFF" stroke-opacity="0.9" stroke-width="2" />
            <circle cx="260" cy="40" r="14" fill="url(#g)" stroke="#00FFFF" stroke-opacity="0.75" stroke-width="2" />
            <circle cx="420" cy="120" r="22" fill="url(#g)" stroke="#00FFFF" stroke-opacity="0.6" stroke-width="2" />
            <line x1="60" y1="60" x2="260" y2="40" stroke="#00FFFF" stroke-opacity="0.12" stroke-width="6" stroke-linecap="round" />
            <line x1="260" y1="40" x2="420" y2="120" stroke="#00FFFF" stroke-opacity="0.08" stroke-width="6" stroke-linecap="round" />
          </g>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  background: linear-gradient(180deg, #f7fbff 0%, #ffffff 100%);
  padding: 40px 0;
}
.hero-inner {
  display: flex;
  gap: 20px;
  align-items: center;
}
.hero-text h1 {
  margin: 0 0 12px;
  font-size: 32px;
}
.hero-text p { margin: 0 0 16px; }
.hero-subtitle {
  font-size: 1.2rem;
  color: #374151;
  max-width: 540px;
}
.hero-features {
  margin: 24px 0;
}
.feature {
  margin: 8px 0;
  display: flex;
  align-items: center;
  color: #374151;
}
.checkmark {
  color: #0b5fff;
  margin-right: 8px;
  font-weight: bold;
}
.hero-cta {
  margin-top: 32px;
}
.primary {
  background: #0b5fff;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 6px;
}
.secondary {
  margin-left: 8px;
  background: transparent;
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 6px;
}
.hero-image img { max-width: 480px; width: 100%; height: auto; display:block; }
@media (max-width: 700px) {
  .hero-inner { flex-direction: column; }
  .hero-image { order: -1; }
}
  .hero-text { color: var(--text); }
  .hero-price { margin-top: 10px; font-size: 1.2rem; color: var(--teal); font-weight: 800; }
  .primary { background: var(--teal); color: var(--bg); border-radius: 8px; padding: 10px 14px; text-decoration:none; }
  .primary:hover { background: var(--teal-strong); }
  .secondary { background: transparent; color: var(--text); border: 1px solid rgba(255,255,255,0.08); padding: 8px 12px; border-radius:8px; }
  .secondary:hover { border-color: rgba(255,255,255,0.14); }
</style>
