<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { contacts } from './interface';

const { t } = useI18n({ useScope: 'global' });

</script>

<template>
  <section id="contact" class="py-16 bg-white dark:bg-[#0A1128] transition-colors duration-300">
    
    <div class="text-center max-w-2xl mx-auto mb-12 space-y-3">
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
        {{ t('contact_section_title') }}
      </h2>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400">
        {{ t('contact_section_subtitle') }}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
      
      <a 
        v-for="(contact, index) in contacts" 
        :key="index"
        :href="contact.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative flex items-center justify-between p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        :class="contact.borderHoverClass"
      >
        <div class="flex items-center gap-4">
          <div :class="['p-3.5 rounded-xl transition-transform duration-300 group-hover:scale-110 flex-shrink-0', contact.colorClass]">

            <img :src="contact.image" alt="image" srcset="" class="w-15 h-15">
          </div>

          <div class="space-y-1">
            <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#0052FF] dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
              {{ t(`${contact.nameKey}.name`) }}
            </h3>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-1">
              {{ t(`${contact.descKey}.desc`) }}
            </p>
          </div>
        </div>

        <div class="pl-3 text-slate-400 group-hover:text-[#0052FF] dark:group-hover:text-blue-400 transition-colors">
          <ExternalLink class="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>

      </a>

    </div>

  </section>
</template>