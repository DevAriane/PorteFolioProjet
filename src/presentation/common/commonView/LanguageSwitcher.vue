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
  if(val === null ) return;
  
    const newLocale = val as SupportedLocales
    await loadLanguagaAsync(newLocale)
  
}

</script>

<template>
  <Select :model-value="locale" @update:model-value="(val) => { if (typeof val === 'string') onLanguageChange(val) }" class=" border none" >
    <SelectTrigger class="w-[180px]">
      <SelectValue>
        <div class="flex items-center gap-2">
          <p v-if="locale === 'fr-FR'" class="text-sm font-medium leading-none">fr</p>
          <p v-if="locale === 'en-US'" class="text-sm font-medium leading-none">en</p>
          <span>{{ locale === 'fr-FR' ? t('french') : t('english') }}</span>
        </div>
      </SelectValue>
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="fr-FR">
        <div class="flex items-center gap-2 cursor-pointer">
          <img :src="FR" alt="FR" class="w-5 h-5 rounded-full object-cover" />
          <span>{{ t('french') }}</span>
        </div>
      </SelectItem>

      <SelectItem value="en-US">
        <div class="flex items-center gap-2 cursor-pointer">
          <img :src="GB" alt="GB" class="w-5 h-5 rounded-full object-cover" />
          <span>{{ t('english') }}</span>
        </div>
      </SelectItem>
    </SelectContent>
  </Select>
</template>