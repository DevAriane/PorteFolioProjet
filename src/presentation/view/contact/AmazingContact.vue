<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const {t}=useI18n({useScope:'global'});

</script>

<template>

    <div>
    
        <div><p>{{ t('contact_cta_title') }}</p></div>

        <div><p>{{ t('contact_section_subtitle') }}</p></div>

    </div>

</template>