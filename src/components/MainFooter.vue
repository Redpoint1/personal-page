<template>
  <footer class="site-footer">
    <div class="footer-content">
      <span class="copyright"
        ><b>{{ author }}</b> &copy; {{ copyright }}</span
      >
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const author = computed(() => import.meta.env.VUE_APP_AUTHOR)
const copyright = computed(() => new Date().getFullYear())
</script>

<style scoped>
.site-footer {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
}

.footer-content {
  width: 100%;
  max-width: 72rem;
  box-sizing: border-box;
  margin: 0 auto;
  color: var(--muted);
  text-align: center;
}
</style>
