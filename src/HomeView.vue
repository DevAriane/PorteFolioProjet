<script setup lang="ts">
import Header from './presentation/view/header/Header.vue';
import Presentation from './presentation/view/presentation/Presentation.vue';
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-[#0A1128] text-slate-900 dark:text-white transition-colors duration-300">
    <Header />
    
    <main class="pt-0 px-4 max-w-7xl mx-auto">
    <Presentation/>
    </main>
  </div>
</template>