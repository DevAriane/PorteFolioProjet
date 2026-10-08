<script setup lang="ts">
import { ref } from 'vue';
import { Filter } from '@lucide/vue';

defineProps<{
  selectedCategory: string;
  categories: string[];
}>();

defineEmits<{
  (e: 'select', category: string): void;
}>();
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-4">
    <button
      v-for="cat in categories"
      :key="cat"
      @click="$emit('select', cat)"
      class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm"
      :class="selectedCategory === cat 
        ? 'bg-[#0052FF] text-white shadow-blue-500/25' 
        : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'"
    >
      {{ cat }}
    </button>
  </div>
</template>