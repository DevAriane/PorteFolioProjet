<script setup lang="ts">
import { RouterLink } from 'vue-router';
defineProps<{
  title: string;
  link: string;
}>();
</script>

<template>
  <RouterLink :to="link" class="group relative py-2">
    <p class="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-[#0052FF] dark:group-hover:text-[#0052FF] transition-colors">
      {{ title }}
    </p>
  </RouterLink>
</template>