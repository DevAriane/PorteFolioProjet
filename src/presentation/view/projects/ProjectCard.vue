<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { type ProjectItem } from './interface';
import { ArrowUpRight, FolderGit2, Tag, ExternalLink } from '@lucide/vue';
import Visual from './Visual.vue';

defineProps<{
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}>();

const { t } = useI18n({ useScope: 'global' });

const viewWeblink = (url?: string) => {
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};
</script>

<template>
  <div
    class="group relative flex flex-col justify-between bg-white dark:bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0052FF]/40 cursor-pointer overflow-hidden"
    @click="onSelect(project)">
    <div
      class="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      :class="project.accentColor"></div>

    <div class="relative z-10 space-y-4">
      <div class="flex items-center justify-between">
        <div v-if="project.logo"
          class="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-700 text-[#0052FF] dark:text-blue-400 group-hover:scale-110 transition-transform">
          <img :src="project.logo" alt="logo" class="w-6 h-6" srcset="">
        </div>
        <div v-else
          class="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-700 text-[#0052FF] dark:text-blue-400 group-hover:scale-110 transition-transform">
          <FolderGit2 class="w-6 h-6" />
        </div>
        <span
          class="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
          {{ project.platform }}
        </span>
      </div>
<Visual :video-file="project.videoFile" :galery="project.galery" />

      <h3
        class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#0052FF] dark:group-hover:text-blue-400 transition-colors">
        {{ t(project.titleKey) }}
      </h3>

      <p class="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
        {{ t(project.descKey) }}
      </p>

      <div v-if="project.serviceLinks.length > 0" class="flex flex-wrap gap-1.5 pt-1">
        <span v-for="service in project.serviceLinks.slice(0, 3)" :key="service.name"
          class="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-blue-50/60 dark:bg-blue-950/40 text-[#0052FF] dark:text-blue-300 border border-blue-200/40 dark:border-blue-800/40">
          {{ service.name.split(' ')[0] }}
        </span>
      </div>

 <div class="flex items-center justify-between text-xs">
  
  <span class="font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
    {{ project.company }}
  </span>

  <div v-if="project.company === 'OWNER'" class="flex items-center">
    
    <div v-if="project.platform === 'Mobile'" class="inline-flex items-center gap-1.5 font-semibold text-[#0052FF] dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer group/link">
      <svg class="w-3.5 h-3.5 transform group-hover/link:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
      </svg>
      <span>{{ t('download_apk') }}</span>
    </div>

    <div @click.stop="viewWeblink(project.webUrl)" v-else class="inline-flex items-center gap-1.5 font-semibold text-[#7C3AED] dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer group/link">
      <svg class="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
      </svg>
      <span>{{ t('view_web_link') }}</span>
    </div>

  </div>

  <div v-else class="inline-flex items-center gap-1.5 font-medium px-2.5 py-1 rounded-lg bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/20">
    <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
    </svg>
    <span>{{ t('confidential') }}</span>
  </div>

</div>


    </div>


  </div>
</template>