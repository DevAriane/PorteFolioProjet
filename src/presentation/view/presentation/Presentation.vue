<script setup lang="ts">
import photo from '../../../assets/photos.jpeg'
import { useI18n } from 'vue-i18n';
import CardBadge from '@/presentation/common/commonView/CardBadge.vue';
import Motion from '@/presentation/common/commonView/motion.vue';
import AppBoutton from '@/presentation/common/commonView/AppBoutton.vue';

import { 
  CodeXml, 
  Server, 
  Database, 
  Cloud, 
  BugPlay, 
  Palette, 
  Compass, 
  MapPin, 
  Globe, 
  BadgeCheck, 
  CreditCard, 
  Download, 
  ArrowDown 
} from '@lucide/vue';
import { computed, type Component } from 'vue';

const { t } = useI18n({ useScope: 'global' });

const arrayMotion = computed(()=>[
    { title: t('localization'), icon: MapPin },
    { title: t('available'), icon: BadgeCheck },
    { title: t('friendly'), icon: Globe },
]);

const arrayCard = computed(()=>[
    { title: t('frontend'), icon: CodeXml, colorText: '#0052FF', backColor: "#EFF6FF" },
    { title: t('backend'), icon: Server, colorText: '#10B981', backColor: "#ECFDF5" },
    { title: t('database'), icon: Database, colorText: '#7C3AED', backColor: "#F5F3FF" },
    { title: t('cloud'), icon: Cloud, colorText: '#0284C7', backColor: "#F0F9FF" },
    { title: t('tester'), icon: BugPlay, colorText: '#D97706', backColor: "#FFF7ED" },
    { title: t('uiux'), icon: Palette, colorText: '#DB2777', backColor: "#FDF2F8" },
    { title: t('team'), icon: Compass, colorText: '#7C3AED', backColor: "#FAF5FF" }
]);

const downloadsFunction = () => {
};
</script>

<template>
  <section class="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0A1128] text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden flex flex-col justify-between">
    
    <div class="absolute top-20 left-1/4 w-72 h-72 bg-[#0052FF]/10 dark:bg-[#0052FF]/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
    <div class="absolute bottom-10 right-1/4 w-80 h-80 bg-[#7C3AED]/10 dark:bg-[#7C3AED]/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 my-auto">
      
      <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
        
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#0052FF] animate-ping"></span>
          <span class="text-xs sm:text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300 uppercase">
            {{ t('space') }}
          </span>
        </div>

        <div class="space-y-2">
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            {{ t('iam', { name: "ATEUMO ARIANE JUANITA" }) }}
          </h1>
          <p class="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#0052FF] to-[#7C3AED] bg-clip-text text-transparent">
            DevAriane | Full-Stack Software Engineer & QA
          </p>
        </div>

        <p class="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300">
          {{ t('function') }}
        </p>

        <p class="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          {{ t('description') }}
        </p>

        <div class="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-2">
          <div v-for="(arr, index) in arrayCard" :key="index" class="transform hover:-translate-y-1 transition-transform duration-200">
            <CardBadge 
              :title="arr.title" 
              :colorText="arr.colorText" 
              :backColor="arr.backColor" 
              :icon="arr.icon" 
            />
          </div>
        </div>

        <div class="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm">
          <div v-for="(val, index) in arrayMotion" :key="index">
            <Motion :title="val.title" :icon="val.icon" />
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
          <RouterLink to="/contact/index">
            <AppBoutton :title="t('getcontact')" mode="plein" :icon="CreditCard" />
          </RouterLink>
          
          <a 
            href="/src/assets/CV_2026-09-30_ARIANE JUANITA_ATEUMO_TesteuSE_Développeur_d_Application_QA.pdf" 
            download="CV_ARIANE_JUANITA_ATEUMO.pdf"
          >
            <AppBoutton :title="t('downloadscv')" mode="vide" :icon="Download" @click="downloadsFunction" />
          </a>
        </div>

      </div>

      <div class="lg:col-span-5 flex justify-center">
        <div class="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 group">
          
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#0052FF] to-[#7C3AED] rotate-3 scale-105 opacity-40 blur-xl group-hover:rotate-6 transition-transform duration-500"></div>
          
          <div class="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-900">
            <img 
              :src="photo" 
              alt="ATEUMO ARIANE JUANITA" 
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

        </div>
      </div>

    </div>

    <div class="flex flex-col items-center justify-center pt-10 pb-4 space-y-2 opacity-75 hover:opacity-100 transition-opacity cursor-pointer mx-auto">
      <span class="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 tracking-wider">
        {{ t('scrolltoexplore') }}
      </span>
      <ArrowDown class="w-5 h-5 text-[#0052FF] animate-bounce" />
    </div>

  </section>
</template>