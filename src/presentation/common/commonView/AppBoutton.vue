<script setup lang="ts">
import { type Component } from 'vue';
import Button from '@/components/ui/button/Button.vue';

const props = defineProps<{
  title: string;
  mode: 'plein' | 'vide' | string; 
  icon: Component;
}>();
</script>

<template>
  <Button
    :class="[
      'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 cursor-pointer',
      props.mode === 'plein'
        ? 'bg-[#0052FF] hover:bg-[#0040cc] text-white shadow-lg shadow-blue-500/25 border border-transparent'
        : 'bg-white dark:bg-[#0A1128] border-2 border-[#0052FF] text-[#0052FF] dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800'
    ]"
  >
    <component 
      v-if="props.icon" 
      :is="props.icon" 
      class="w-5 h-5 flex-shrink-0" 
    />
    
    <span>{{ props.title }}</span>
  </Button>
</template>