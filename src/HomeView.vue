<script setup lang="ts">
import Presentation from './presentation/view/presentation/Presentation.vue';
import TechMarquee from './presentation/view/technologie/TechMarquee.vue';
import Index from './presentation/view/experience/index.vue';
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-[#0A1128] text-slate-900 dark:text-white transition-colors duration-300"> 
    <main class="pt-6 px-4 max-w-7xl mx-auto space-y-16 pb-24">
      <Presentation />
      <TechMarquee />
      <Index />
    </main>
  </div>
</template>