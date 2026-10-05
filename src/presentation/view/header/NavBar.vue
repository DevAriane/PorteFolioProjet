<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';
defineProps <
{
    title: string;
    link: string;
}
    > ();

    const {t}=useI18n({useScope:'global'})


</script>

<template>
    <RouterLink :to="link">
        <p>{{ title }}</p>
    </RouterLink>
</template>