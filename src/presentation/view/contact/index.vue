<script setup lang="ts">
import AppBoutton from '@/presentation/common/commonView/AppBoutton.vue';
import { CreditCard } from '@lucide/vue';
import { useI18n } from 'vue-i18n';
import ContactSection from './ContactSection.vue';

const {t}= useI18n({useScope:'global'});
</script>

<template>
    <div>
                <AppBoutton :title="t('getcontact')" mode="plein" :icon="CreditCard" />

                <div><p>{{ t('letconnect') }}</p></div>

                <div><p>{{ t('descriptionconnect') }}</p></div>

                <ContactSection/>



    </div>
</template>