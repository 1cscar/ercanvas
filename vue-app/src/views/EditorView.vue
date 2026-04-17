<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  const id = route.query.id
  const type = route.query.type || 'er'
  if (id) {
    window.location.href = `/app.html?id=${encodeURIComponent(id)}&type=${encodeURIComponent(type)}`
  } else {
    window.location.href = '/app.html'
  }
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center" style="background: var(--mac-bg);">
    <div class="flex flex-col items-center gap-3">
      <svg class="animate-spin" width="32" height="32" viewBox="0 0 24 24" fill="none" style="color: var(--mac-accent);">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" opacity="0.25"/>
        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <p style="color: var(--mac-subtext);">開啟編輯器中...</p>
    </div>
  </div>
</template>
