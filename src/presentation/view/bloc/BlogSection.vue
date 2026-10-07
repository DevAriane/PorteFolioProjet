<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import BlogDetail from './BlogDetail.vue';
import type { ArticleData } from './interface.ts';
import TagBadge from '@/presentation/common/commonView/TagBadge.vue';
import { ArrowRight, Clock } from '@lucide/vue';
import { articles } from './interface.ts';

const { t } = useI18n({ useScope: 'global' });
const selectedArticle = ref<ArticleData | null>(null);


</script>

<template>
  <div>
    <BlogDetail 
      v-if="selectedArticle" 
      :article="selectedArticle" 
      @back="selectedArticle = null" 
    />

    <section v-else id="blog" class="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#0A1128]/40 transition-colors duration-300">
      <div class="max-w-6xl mx-auto space-y-16">
        
        <div class="text-center max-w-2xl mx-auto space-y-4">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {{ t('blog_title') }}
          </h2>
          <p class="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('blog_subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article 
            v-for="article in articles" 
            :key="article.id"
            class="group relative flex flex-col justify-between bg-white dark:bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-500/40 cursor-pointer"
            @click="selectedArticle = article"
          >
            <div class="space-y-4">
              <div class="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span class="flex items-center gap-1">
                  <Clock class="w-3.5 h-3.5 text-[#0052FF]" />
                  {{ article.readTime }}
                </span>
                <span>•</span>
                <span>{{ article.date }}</span>
              </div>

              <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#0052FF] dark:group-hover:text-blue-400 transition-colors leading-snug">
                {{ t(article.titleKey) }}
              </h3>

              <p class="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                {{ t(article.ctxKey) }}
              </p>

              <div class="flex flex-wrap gap-2 pt-2">
                <TagBadge v-for="tag in article.tags.slice(0, 3)" :key="tag" :label="tag" />
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span class="text-sm font-semibold text-[#0052FF] dark:text-blue-400 group-hover:underline flex items-center gap-1.5">
                {{ t('read_more') }}
                <ArrowRight class="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </span>
            </div>
          </article>
        </div>

      </div>
    </section>
  </div>
</template>