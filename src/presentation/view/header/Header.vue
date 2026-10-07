<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Logo from './logo.vue';
import NavBar from './NavBar.vue';
import LanguageSwitcher from '@/presentation/common/commonView/LanguageSwitcher.vue';
import ModeSwitcher from '@/presentation/common/commonView/ModeSwitcher.vue';

const { t } = useI18n({ useScope: 'global' });
const isMobileMenuOpen = ref<boolean>(false);

const navTab = computed(() => [
  { title: t('home'), link: "/" },
  { title: t('projects'), link: "#projects" },
  { title: t('blog'), link: "/blog/section" },
  { title: t('contacts'), link: "/contact/index" }
]);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0A1128]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      
      <div class="flex items-center">
        <Logo />
      </div>

      <div class="hidden md:flex items-center gap-8">
        <nav class="flex items-center gap-6">
          <div v-for="(nav, index) in navTab" :key="index">
            <NavBar :title="nav.title" :link="nav.link" />
          </div>
        </nav>

        <div class="h-5 w-[1px] bg-slate-200 dark:bg-slate-700"></div>

        <div class="flex items-center gap-3">
          <LanguageSwitcher />
          <ModeSwitcher />
        </div>
      </div>

      <div class="flex items-center gap-3 md:hidden">
        <ModeSwitcher />
        <button @click.stop="toggleMobileMenu" class="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

    </div>

    <div v-if="isMobileMenuOpen" class="md:hidden bg-white dark:bg-[#0A1128] border-b border-slate-200 dark:border-slate-800 px-4 pt-4 pb-6 space-y-4 shadow-xl relative z-50">
      <div class="flex flex-col space-y-3">
        <div v-for="(nav, index) in navTab" :key="index" @click="isMobileMenuOpen = false">
          <NavBar :title="nav.title" :link="nav.link" />
        </div>
      </div>
      <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <span class="text-sm text-slate-500 dark:text-slate-400">Langue</span>
        <LanguageSwitcher />
      </div>
    </div>
  </header>

  <div 
    v-if="isMobileMenuOpen" 
    @click="isMobileMenuOpen = false" 
    class="fixed inset-0 z-40 bg-transparent md:hidden"
  ></div>
</template>