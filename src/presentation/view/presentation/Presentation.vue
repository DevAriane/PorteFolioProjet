<script setup lang="ts">
import photo from '../../../assets/photos.jpeg'
import { useI18n } from 'vue-i18n';
import CardBadge from '@/presentation/common/commonView/CardBadge.vue';
import { CodeXml } from '@lucide/vue';
import { Server } from '@lucide/vue';
import { Database } from '@lucide/vue';
import { Cloud } from '@lucide/vue';
import { BugPlay } from '@lucide/vue';
import { Palette } from '@lucide/vue';
import { Compass } from '@lucide/vue';
import type { Component } from 'vue';
import { MapPin } from '@lucide/vue';
import { Globe } from '@lucide/vue';
import { BadgeCheck } from '@lucide/vue';

const { t } = useI18n({ useScope: 'global' });

interface Card {
    title: String;
    icon: Component;
    colorText: String;
    backColor: String;
}

interface Motion {
    title: String;
    icon: Component;
}

const arrayMotion : Motion[]=[
    {title:t('localization'), icon:MapPin},
        {title:t('available'), icon:BadgeCheck},
                {title:t('friendly'), icon: Globe},


];

const arrayCard: Card[] = [
    { title: t('frontend'), icon: CodeXml, colorText: '#0052FF', backColor: "#EFF6FF" },
    { title: t('backend'), icon: Server, colorText: '#10B981', backColor: "#ECFDF5" },
    { title: t('database'), icon: Database, colorText: '#7C3AED', backColor: "#F5F3FF" },
    { title: t('cloud'), icon: Cloud, colorText: '#0284C7', backColor: "#F0F9FF" },
    { title: t('tester'), icon: BugPlay, colorText: '#FFFBEB', backColor: "#FFF7ED" },
    { title: t('uiux'), icon: Palette, colorText: '#DB2777', backColor: "#FDF2F8" },
    { title: t('team'), icon: Compass, colorText: '#D97706', backColor: "#FFFBEB" }

];

</script>

<template>

    <div>
        <div><img :src="photo" alt="photo" srcset=""></div>

        <div>
            <p>{{ t('space') }}</p>
        </div>

        <div>
            <p>{{ t('iam', { name: "ATEUMO ARIANE JUANITA" }) }}</p>
            <p>DevAriane</p>
        </div>

        <div v-for="arr in arrayCard" class="inline-flex">
        <CardBadge title="arr.title" colorText="arr.colorText" backColor="arr.backColor" :icon="arr.icon" />
        </div>

        <div>
            <p>{{ t('function') }}</p>
        </div>

        <div>
            <p>{{ t('description') }} </p>
        </div>

    </div>

</template>