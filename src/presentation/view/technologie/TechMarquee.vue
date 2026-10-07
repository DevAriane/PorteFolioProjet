<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { type TechItem, technologies } from './interface';

const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <section class="py-10 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-[#0A1128] dark:via-slate-900/40 dark:to-[#0A1128] overflow-hidden transition-colors duration-300">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center space-y-3">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        {{ t('skills_title') }}
      </h2>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
        {{ t('skills_subtitle') }}
      </p>
    </div>

    <div class="relative w-full overflow-hidden flex items-center py-6">
      
      <div class="absolute left-0 z-10 h-full w-28 sm:w-40 bg-gradient-to-r from-white dark:from-[#0A1128] to-transparent pointer-events-none"></div>
      <div class="absolute right-0 z-10 h-full w-28 sm:w-40 bg-gradient-to-l from-white dark:from-[#0A1128] to-transparent pointer-events-none"></div>

      <div class="flex animate-marquee gap-6 whitespace-nowrap min-w-max px-4">
        
        <div 
          v-for="(tech, index) in [...technologies, ...technologies]" 
          :key="index"
          class="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/80 shadow-sm transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-xl hover:border-[#0052FF]/50 dark:hover:border-blue-500/50"
        >
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0052FF]/10 to-[#7C3AED]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          <img 
            :src="tech.image" 
            :alt="tech.name" 
            class="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10"
          />

          <div class="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 pointer-events-none z-20 px-3 py-1 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold shadow-xl border border-slate-700/50 whitespace-nowrap">
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