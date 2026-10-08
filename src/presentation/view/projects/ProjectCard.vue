<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { type ProjectItem } from './interface';
import { ArrowUpRight, FolderGit2, Tag, ExternalLink } from '@lucide/vue';

defineProps<{
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}>();

const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <div 
    class="group relative flex flex-col justify-between bg-white dark:bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0052FF]/40 cursor-pointer overflow-hidden"
    @click="onSelect(project)"
  >
    <div class="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" :class="project.accentColor"></div>

    <div class="relative z-10 space-y-4">
      <div class="flex items-center justify-between">
        <div class="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-700 text-[#0052FF] dark:text-blue-400 group-hover:scale-110 transition-transform">
          <FolderGit2 class="w-6 h-6" />
        </div>
        <span class="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
          {{ project.platform }}
        </span>
      </div>

      <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#0052FF] dark:group-hover:text-blue-400 transition-colors">
        {{ t(project.titleKey) }}
      </h3>

      <p class="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
        {{ t(project.descKey) }}
      </p>

      <div v-if="project.serviceLinks.length > 0" class="flex flex-wrap gap-1.5 pt-1">
        <span 
          v-for="service in project.serviceLinks.slice(0, 3)" 
          :key="service.name"
          class="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-blue-50/60 dark:bg-blue-950/40 text-[#0052FF] dark:text-blue-300 border border-blue-200/40 dark:border-blue-800/40"
        >
          <ExternalLink class="w-2.5 h-2.5" />
          {{ service.name.split(' ')[0] }}
        </span>
      </div>
    </div>

    <div class="relative z-10 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
      <span class="text-xs font-semibold text-slate-400">{{ project.date }}</span>
      <span class="text-sm font-semibold text-[#0052FF] dark:text-blue-400 group-hover:underline flex items-center gap-1">
        {{ t('view_project') }}
        <ArrowUpRight class="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </span>
    </div>
  </div>
</template>