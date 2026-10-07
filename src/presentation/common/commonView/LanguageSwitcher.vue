<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SUPPORTED_LOCALES, type SupportedLocales, loadLanguagaAsync } from '@/i18n';
import FR from '../../../assets/FR.png';
import GB from '../../../assets/GB.png';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const { locale, t } = useI18n({ useScope: 'global' });

async function onLanguageChange(val: string | null) {
  if (val === null) return;
  
  const newLocale = val as SupportedLocales;
  await loadLanguagaAsync(newLocale);
}
</script>

<template>
  <Select 
    :model-value="locale" 
    @update:model-value="(val) => { if (typeof val === 'string') onLanguageChange(val) }"
  >
    <!-- Trigger avec support du mode sombre -->
    <SelectTrigger class="w-[140px] sm:w-[180px] bg-white dark:bg-[#0A1128] text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 focus:ring-[#0052FF]">
      <SelectValue>
        <div class="flex items-center gap-2">
          <p v-if="locale === 'fr-FR'" class="text-sm font-medium leading-none">fr</p>
          <p v-if="locale === 'en-US'" class="text-sm font-medium leading-none">en</p>
          <span>{{ locale === 'fr-FR' ? t('french') : t('english') }}</span>
        </div>
      </SelectValue>
    </SelectTrigger>

    <SelectContent class="bg-white dark:bg-[#0A1128] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-xl">
      <SelectItem value="fr-FR" class="focus:bg-slate-100 dark:focus:bg-slate-800 cursor-pointer">
        <div class="flex items-center gap-2">
          <img :src="FR" alt="FR" class="w-5 h-5 rounded-full object-cover" />
          <span>{{ t('french') }}</span>
        </div>
      </SelectItem>

      <SelectItem value="en-US" class="focus:bg-slate-100 dark:focus:bg-slate-800 cursor-pointer">
        <div class="flex items-center gap-2">
          <img :src="GB" alt="GB" class="w-5 h-5 rounded-full object-cover" />
          <span>{{ t('english') }}</span>
        </div>
      </SelectItem>
    </SelectContent>
  </Select>
</template>