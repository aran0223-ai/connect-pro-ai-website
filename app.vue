<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  --color-background: #121212;
  --color-accent: #00FF00;
  --color-text: #ffffff;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: var(--color-background);
  color: var(--color-text);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
