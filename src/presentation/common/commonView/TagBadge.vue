<script setup lang="ts">
import { Tag } from '@lucide/vue';

defineProps<{
  label: string;
}>();
</script>

<template>
  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-[#0052FF] dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40 transition-colors">
    <Tag class="w-3 h-3 text-[#0052FF]" />
    {{ label }}
  </span>
</template>