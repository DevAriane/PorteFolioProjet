<script setup lang="ts">
import AppBoutton from '@/presentation/common/commonView/AppBoutton.vue';
import { Send } from '@lucide/vue'; 
import { useI18n } from 'vue-i18n';
import ContactSection from './ContactSection.vue';
import AmazingContact from './AmazingContact.vue';

const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <section id="contact-page" class="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0A1128] transition-colors duration-300 min-h-screen">
    
    <div class="max-w-5xl mx-auto space-y-16">
      
      <div class="text-center max-w-2xl mx-auto space-y-4">
    

        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          {{ t('letconnect') }}
        </h1>

        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {{ t('descriptionconnect') }}
        </p>

      </div>

      <div class="w-full">
        <ContactSection />
      </div>

      <div class="w-full">
        <AmazingContact />
      </div>

    </div>

  </section>
</template>