<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { type ProjectItem } from './interface';
import { ArrowLeft, ExternalLink, Cpu, Database, Cloud } from '@lucide/vue';

defineProps<{
  project: ProjectItem;
  onBack: () => void;
}>();

const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <article class="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0A1128] min-h-screen transition-colors duration-300">
    <div class="max-w-4xl mx-auto space-y-12">
      
      <div>
        <button 
          @click="onBack"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-sm"
        >
          <ArrowLeft class="w-4 h-4 text-[#0052FF]" />
          {{ t('back_to_projects') }}
        </button>
      </div>

      <header class="space-y-6 border-b border-slate-200/80 dark:border-slate-800/80 pb-8">
        <div class="flex items-center gap-3 text-xs font-semibold text-[#0052FF] dark:text-blue-400">
          <span>{{ project.platform }}</span>
          <span>•</span>
          <span>{{ project?.date }}</span>
        </div>

        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t(project.titleKey) }}
        </h1>

        <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {{ t(project.longDescKey) }}
        </p>

        <div class="space-y-4">
  <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100 flex items-start gap-2">
    <span>{{ t('keyfeature') }}</span>
  </h3>

  <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <li 
      v-for="(value, idx) in project.fonction" 
      :key="idx"
      class="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-200 group"
    >
      <div class="mt-0.5 p-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-200 shrink-0">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <p class="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
        {{ t(String(value.textKey)) }}
      </p>
    </li>
  </ul>
</div>

        <div class="pt-4 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">{{ t('connected_services') }}</h4>
          <div class="flex flex-wrap gap-3">
            <a 
              v-for="service in project.serviceLinks" 
              :key="service.name"
              :href="service.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-[#0052FF] dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/60 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all shadow-sm"
            >
              <ExternalLink class="w-3.5 h-3.5" />
              <span>{{ service.name }}</span>
            </a>
          </div>
        </div>
      </header>

      <div class="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 space-y-3">
            <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Cpu class="w-5 h-5 text-[#0052FF]" />
              {{ t('tech_stack') }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="fw in project.frameworks" :key="fw" class="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {{ fw }}
              </span>
            </div>
          </div>

          <div class="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 space-y-3">
            <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Database class="w-5 h-5 text-purple-600" />
              {{ t('databases') }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="db in project.database" :key="db" class="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {{ db }}
              </span>
            </div>
          </div>
        </div>

        <div class="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 space-y-3">
          <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Cloud class="w-5 h-5 text-emerald-500" />
            {{ t('devops_cloud') }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="cloud in project.cloudDevOps" :key="cloud" class="px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              {{ cloud }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </article>
</template>