<script setup lang="ts">
import { type Component } from 'vue';

const props = defineProps<{
  title: string;
  colorText: string;
  backColor: string;
  icon: Component;
}>();
</script>

<template>
  <div 
    class="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 transition-all duration-300"
    :style="{ backgroundColor: props.backColor }"
  >
    <component 
      v-if="props.icon" 
      :is="props.icon" 
      class="w-5 h-5 flex-shrink-0"
      :style="{ color: props.colorText }"
    />
    
    <p 
      class="text-sm font-semibold tracking-wide"
      :style="{ color: props.colorText }"
    >
      {{ props.title }}
    </p>
  </div>
</template>