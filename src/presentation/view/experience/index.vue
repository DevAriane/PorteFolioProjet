<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ExperienceCard from '@/presentation/common/commonView/ExperienceCard.vue';
import { X, CheckCircle2, Award } from '@lucide/vue';

const { t } = useI18n({ useScope: 'global' });

interface Experience {
  id: string;
  titleKey: string;
  companyKey: string;
  periodKey: string;
  roleKey: string;
  summaryKey: string;
  contextKey: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 'boolean',
    titleKey: 'exp.boolean.title',
    companyKey: 'exp.boolean.company',
    periodKey: 'exp.boolean.period',
    roleKey: 'exp.boolean.role',
    summaryKey: 'exp.boolean.summary',
    contextKey: 'exp.boolean.context',
    technologies: ['Flutter', 'React Native', 'TypeScript', 'Laravel', 'API REST', 'Git', 'GitHub/GitLab']
  },
  {
    id: 'resandpay',
    titleKey: 'exp.resandpay.title',
    companyKey: 'exp.resandpay.company',
    periodKey: 'exp.resandpay.period',
    roleKey: 'exp.resandpay.role',
    summaryKey: 'exp.resandpay.summary',
    contextKey: 'exp.resandpay.context',
    technologies: ['React Native', 'TypeScript', 'API REST', 'Laravel', 'Git', 'GitHub', 'VS Code']
  },
  {
    id: 'delivery',
    titleKey: 'exp.delivery.title',
    companyKey: 'exp.delivery.company',
    periodKey: 'exp.delivery.period',
    roleKey: 'exp.delivery.role',
    summaryKey: 'exp.delivery.summary',
    contextKey: 'exp.delivery.context',
    technologies: ['PHP', 'Laravel', 'API REST', 'MySQL', 'Postman', 'Git', 'GitHub']
  }
];

const selectedExp = ref<Experience | null>(null);

const openModal = (exp: Experience) => {
  selectedExp.value = exp;
};

const closeModal = () => {
  selectedExp.value = null;
};
</script>

<template>
  <section id="experiences" class="py-5 bg-slate-50/50 dark:bg-[#070D1F] transition-colors duration-300 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-[#0052FF] dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <Award class="w-4 h-4" />
          <span>{{ t('parcourspro') }}</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t('experiences_title') }}
        </h2>
        <p class="text-base text-slate-600 dark:text-slate-400">
          {{ t('experiences_subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ExperienceCard 
          v-for="exp in experiences" 
          :key="exp.id"
          :title="t(exp.titleKey)"
          :company="t(exp.companyKey)"
          :period="t(exp.periodKey)"
          :role="t(exp.roleKey)"
          :summary="t(exp.summaryKey)"
          :technologies="exp.technologies"
          @click="openModal(exp)"
        />
      </div>

    </div>

    <Teleport to="body">
      <div v-if="selectedExp" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
        
        <div class="bg-white dark:bg-[#0A1128] border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative space-y-6">
          
          <button 
            @click="closeModal" 
            class="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X class="w-5 h-5" />
          </button>

          <div class="space-y-2 pr-10">
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-[#0052FF]/10 text-[#0052FF] dark:text-blue-400">
              {{ t(selectedExp.periodKey) }}
            </span>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">
              {{ t(selectedExp.titleKey) }}
            </h3>
            <p class="text-sm font-medium text-[#7C3AED]">
              {{ t(selectedExp.roleKey) }} • <span class="text-slate-600 dark:text-slate-400">{{ t(selectedExp.companyKey) }}</span>
            </p>
          </div>

          <div class="space-y-2">
            <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-400">{{ t('context') }}</h4>
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {{ t(selectedExp.contextKey) }}
            </p>
          </div>

          <div class="space-y-3">
            <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-400">{{ t('missions_title') }}</h4>
            <ul class="space-y-2">
              <li v-for="(mission, idx) in [1, 2, 3]" :key="idx" class="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle2 class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{{ t('mission_default') }}</span>
              </li>
            </ul>
          </div>

          <div class="space-y-2">
            <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-400">{{ t('technologies_title') }}</h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(tech, idx) in selectedExp.technologies" 
                :key="idx"
                class="px-3 py-1 rounded-lg text-xs font-medium bg-blue-50 dark:bg-blue-950/40 text-[#0052FF] dark:text-blue-300 border border-blue-100 dark:border-blue-900/50"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
            <button 
              @click="closeModal" 
              class="px-6 py-2.5 rounded-xl bg-[#0052FF] hover:bg-[#0040cc] text-white font-medium text-sm transition-colors shadow-lg shadow-blue-500/20"
            >
              {{ t('close') }}
            </button>
          </div>

        </div>
      </div>
    </Teleport>
  </section>
</template>