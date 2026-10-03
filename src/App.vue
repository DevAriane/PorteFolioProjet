<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
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
    <select name="langue" id="langue" v-model="locale">
    <option value="en-US">{{ $t('message.english') }}</option>
    <option value="fr-FR">{{ $t('message.french') }}</option>
    </select>

    <p>{{ $t('message.current') }} : {{ d(now , 'long') }}</p>

    <p>{{ $t('message.money') }} {{ n(money, 'currency') }}</p>

    <h1>{{ $t('message.greet') }}</h1>

    <h2>{{ $t('message.car') }} </h2>
    <p>{{ $t('message.car', 0) }}</p>
    <p>{{ $t('message.car', 1) }} </p>
    <p>{{ $t('message.car', 2) }} </p>
    <p>{{ $t('message.car', 3) }} </p>
    <p>{{ $t('message.car', 4) }}</p>

    <h2>{{ $t('message.apple') }}</h2>
    <p>{{ $t('message.apple', 0) }} </p>
    <p>{{ $t('message.apple', 1) }} </p>
    <p>{{ $t('message.apple', { count: 10 }, 10) }} </p>
    <p>{{ $t('message.apple', 10) }} </p>

    <h2>{{ $t('message.banana') }}</h2>
    <p>{{ $t('message.banana', 0) }} </p>
    <p>{{ $t('message.banana', 1) }}</p>
    <p>{{ $t('message.banana', { n: 1 }, 1) }} </p>
    <p>{{ $t('message.banana', { n: 'too many' }, 100) }} </p>


  </main>
</template>

<style scoped></style>
