<script setup lang="ts">
import { type Component } from 'vue';

const props = defineProps<{
  title: string;
 
  icon: Component;
}>();
</script>

<template>
  <div 
    class="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl shadow-sm  dark:border-slate-800 transition-all duration-300"
  >
    <component 
      v-if="props.icon" 
      :is="props.icon" 
      class="w-5 h-5 flex-shrink-0"
      
    />
    
    <p 
      class="text-sm font-semibold tracking-wide"
    
    >
      {{ props.title }}
    </p>
  </div>
</template>