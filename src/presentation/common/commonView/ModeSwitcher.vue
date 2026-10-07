<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { Sun, Moon } from '@lucide/vue';
import { useThemeStore } from '../commonfunction/theme';

const themeStore = useThemeStore();

console.log("valeur du theme", themeStore.theme);
</script>

<template>
  <Button 
    variant="outline" 
    size="icon"
    @click="themeStore.toggleTheme"
    class="rounded-full w-10 h-10 bg-white dark:bg-[#0A1128] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
  >
    <Sun v-if="themeStore.theme === 'light'" class="w-5 h-5 text-amber-500" />
    
    <Moon v-if="themeStore.theme === 'dark'" class="w-5 h-5 text-[#0052FF]" />
  </Button>
</template>