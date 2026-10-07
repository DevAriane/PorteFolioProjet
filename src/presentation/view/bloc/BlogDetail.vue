<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ArrowLeft, CheckCircle2, Layers, Cpu, AlertTriangle, Trophy, Clock } from '@lucide/vue';
import TagBadge from '@/presentation/common/commonView/TagBadge.vue';
import type { ArticleData } from './interface';

defineProps<{
  article: ArticleData;
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
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all shadow-sm"
        >
          <ArrowLeft class="w-4 h-4 text-[#0052FF]" />
          {{ t('back_to_articles') }}
        </button>
      </div>

      <header class="space-y-6 border-b border-slate-200/80 dark:border-slate-800/80 pb-8">
        <div class="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span class="flex items-center gap-1">
            <Clock class="w-3.5 h-3.5 text-[#0052FF]" />
            {{ article.readTime }}
          </span>
          <span>•</span>
          <span>{{ article.date }}</span>
        </div>

        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {{ t(article.titleKey) }}
        </h1>

        <div class="flex flex-wrap gap-2 pt-2">
          <TagBadge v-for="tag in article.tags" :key="tag" :label="tag" />
        </div>
      </header>

      <div class="space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
        
        <section class="space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <div class="p-2.5 rounded-2xl bg-blue-500/10 text-[#0052FF]">
              <Layers class="w-6 h-6" />
            </div>
            {{ t('project_context') }}
          </h2>
          <div class="bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
            <p class="text-base sm:text-lg leading-relaxed">
              {{ t(article.ctxKey) }}
            </p>
          </div>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <div class="p-2.5 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Cpu class="w-6 h-6" />
            </div>
            {{ t('system_architecture') }}
          </h2>
          <div class="bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
            <p class="text-base sm:text-lg leading-relaxed">
              {{ t(article.archKey) }}
            </p>
          </div>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <div class="p-2.5 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <AlertTriangle class="w-6 h-6" />
            </div>
            {{ t('technical_challenges') }}
          </h2>
          <div class="bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm whitespace-pre-line leading-relaxed">
            {{ t(article.chalKey) }}
          </div>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <div class="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Trophy class="w-6 h-6" />
            </div>
            {{ t('key_results') }}
          </h2>
          <div class="bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex items-start gap-4">
            <CheckCircle2 class="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
            <p class="text-base sm:text-lg leading-relaxed">
              {{ t(article.resKey) }}
            </p>
          </div>
        </section>

      </div>

    </div>
  </article>
</template>