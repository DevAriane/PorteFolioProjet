<script setup lang="ts">
import { type Component } from 'vue';
import { Briefcase, Calendar, MapPin, ChevronRight } from '@lucide/vue';
import { useI18n } from 'vue-i18n';

const {t}=useI18n({useScope:'global'});

defineProps<{
  title: string;
  company: string;
  period: string;
  role: string;
  summary: string;
  technologies: string[];
  icon?: Component;
}>();

defineEmits(['click']);
</script>

<template>
  <div 
    @click="$emit('click')"
    class="group relative bg-white dark:bg-[#0A1128]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-[#0052FF]/50 dark:hover:border-[#7C3AED]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
  >
    <div>
      <div class="flex items-start justify-between gap-4 mb-4">
        <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#0052FF] dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
          <Briefcase class="w-6 h-6" />
        </div>
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
          <Calendar class="w-3.5 h-3.5 text-[#0052FF]" />
          {{ period }}
        </span>
      </div>

      <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#0052FF] transition-colors">
        {{ title }}
      </h3>
      <p class="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
        {{ role }} • <span class="text-[#7C3AED] font-semibold">{{ company }}</span>
      </p>

      <p class="text-sm text-slate-500 dark:text-slate-400 mt-3 line-clamp-3 leading-relaxed">
        {{ summary }}
      </p>
    </div>

    <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
      <div class="flex flex-wrap gap-1.5 mb-4">
        <span 
          v-for="(tech, index) in technologies" 
          :key="index"
          class="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300"
        >
          {{ tech }}
        </span>
      </div>

      <div class="flex items-center justify-between text-sm font-semibold text-[#0052FF] dark:text-blue-400 group-hover:translate-x-1 transition-transform">
        <span>{{ t('view_details') }}</span>
        <ChevronRight class="w-4 h-4" />
      </div>
    </div>
  </div>
</template>