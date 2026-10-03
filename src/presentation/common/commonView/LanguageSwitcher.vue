<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SUPPORTED_LOCALES ,type SupportedLocales, loadLanguagaAsync  } from '@/i18n';

const {locale}=useI18n({useScope:'global'});

async function onLanguageChange(event: Event) {
  const target = event.target as HTMLSelectElement
  const newLocale = target.value as SupportedLocales
  await loadLanguagaAsync(newLocale)
}

</script>

<template>

</template>