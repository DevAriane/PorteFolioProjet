<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SUPPORTED_LOCALES, type SupportedLocales, loadLanguagaAsync } from '@/i18n';
import FR from '../../../assets/FR.png';
import GB from '../../../assets/GB.png';

const { locale ,t} = useI18n({ useScope: 'global' });

async function onLanguageChange(event: Event) {
  const target = event.target as HTMLSelectElement
  const newLocale = target.value as SupportedLocales
  await loadLanguagaAsync(newLocale)
}

</script>

<template>
  <div>
    <select name="" id="" :value="locale" @change="onLanguageChange">
      <option value="fr-FR">
      <div>
      <img :src="FR" alt="FR">
      <p>{{ t('french') }}</p>
      </div>
      </option>

            <option value="en-US">
      <div>
      <img :src="GB" alt="GB">
      <p>{{t('english')}}</p>
      </div>
      </option>
    </select>
  </div>
</template>