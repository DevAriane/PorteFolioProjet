<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import CardBadge from '@/presentation/common/commonView/CardBadge.vue';
import { BriefcaseBusiness, Users } from '@lucide/vue';

const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900/80 dark:via-[#0A1128] dark:to-purple-950/20 border border-slate-200/80 dark:border-slate-800/80 p-8 sm:p-12 shadow-sm transition-colors duration-300">
    
    <div class="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-24 -left-20 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative z-10 max-w-3xl space-y-6">
      
      <div class="space-y-2">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {{ t('contact_cta_title') }}
        </h2>
      </div>

      <div>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {{ t('contact_section_subtitle') }}
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-3 pt-2">
        <CardBadge 
          :title="t('openopportunities')" 
          :icon="BriefcaseBusiness" 
          colorText="#0052FF" 
          backColor="#EFF6FF"
        />

        <CardBadge 
          :title="t('availablecollaboration')" 
          :icon="Users" 
          colorText="#10B981" 
          backColor="#ECFDF5"
        />
      </div>

    </div>

  </div>
</template>