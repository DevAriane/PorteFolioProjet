<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { type TechItem, technologies } from './interface';
const { t } = useI18n({ useScope: 'global' });

</script>
<template>
  <section class="py-16 bg-white dark:bg-[#0A1128] overflow-hidden transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center space-y-3">
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
        {{ t('skills_title') }}
      </h2>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400">
        {{ t('skills_subtitle') }}
      </p>
    </div>

    <div class="relative w-full overflow-hidden flex items-center py-6">
      
      <div class="absolute left-0 z-10 h-full w-24 bg-gradient-to-r from-white dark:from-[#0A1128] to-transparent pointer-events-none"></div>
      <div class="absolute right-0 z-10 h-full w-24 bg-gradient-to-l from-white dark:from-[#0A1128] to-transparent pointer-events-none"></div>

      <div class="flex animate-marquee gap-6 whitespace-nowrap min-w-max px-4">
        
        <div 
          v-for="(tech, index) in [...technologies, ...technologies]" 
          :key="index"
          class="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-sm hover:shadow-xl bg-slate-50 dark:bg-slate-900/60"
          :class="tech.bgClass"
        >
          <img 
            :src="tech.image" 
            :alt="tech.name" 
            class="w-9 h-9 sm:w-11 sm:h-11 object-contain transition-transform duration-300 group-hover:rotate-6"
          />

          <div class="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 px-2.5 py-1 rounded-md bg-slate-900 dark:bg-slate-800 text-white text-xs font-medium shadow-lg whitespace-nowrap">
            {{ tech.name }}
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
</style>