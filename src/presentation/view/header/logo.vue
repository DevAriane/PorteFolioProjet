<script setup lang="ts">
import logo from '@/assets/devariane.png'; 
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="w-10 h-10 flex-shrink-0">
      <img :src="logo" alt="Logo DevAriane" class="w-full h-full object-contain" />
    </div>
    
    <span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
      Dev<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-[#7C3AED]">Ariane</span>
    </span>
  </div>
</template>