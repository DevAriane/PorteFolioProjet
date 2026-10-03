<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './presentation/common/commonView/LanguageSwitcher.vue';
const { t, locale, d ,n } = useI18n({
  useScope: 'global'
});

const now=ref<Date>(new Date());
  const money=ref<number>(1000);

</script>

<template>
  <header>

  </header>

  <main>
    <h1>{{ locale }}</h1>

    <LanguageSwitcher/>

    <p>{{ t('current') }} : {{ d(now , 'long') }}</p>

    <p>{{ t('money') }} {{ n(money, 'currency') }}</p>

    <h1>{{t('greet') }}</h1>

    <h2>{{ t('car') }} </h2>
    <p>{{ t('car', 0) }}</p>
    <p>{{ t('car', 1) }} </p>
    <p>{{ t('car', 2) }} </p>
    <p>{{ t('car', 3) }} </p>
    <p>{{ t('car', 4) }}</p>

    <h2>{{ t('apple') }}</h2>
    <p>{{ t('apple', 0) }} </p>
    <p>{{ t('apple', 1) }} </p>
    <p>{{ t('apple', { count: 10 }, 10) }} </p>
    <p>{{ t('apple', 10) }} </p>

    <h2>{{ t('banana') }}</h2>
    <p>{{ t('banana', 0) }} </p>
    <p>{{ t('banana', 1) }}</p>
    <p>{{ t('banana', { n: 1 }, 1) }} </p>
    <p>{{ t('banana', { n: 'too many' }, 100) }} </p>


  </main>
</template>

<style scoped></style>
