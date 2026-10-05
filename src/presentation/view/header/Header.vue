<script setup lang="ts">
import Logo from './logo.vue';
import { useI18n } from 'vue-i18n';
import NavBar from './NavBar.vue';
import LanguageSwitcher from '@/presentation/common/commonView/LanguageSwitcher.vue';
import ModeSwitcher from '@/presentation/common/commonView/ModeSwitcher.vue';


const { t } = useI18n({ useScope: 'global' });
interface nav {
    title: string;
    link: string;
}

const navTab: nav[] = [
    { title: t('home'), link: "/" },
    { title: t('projects'), link: "" },
    { title: t('blog'), link: "" },
    { title: t('contacts'), link: "" }
]

</script>

<template>
    <div>
        <div>
            <Logo />
        </div>

        <div>

            <div v-for="nav in navTab" >
                <NavBar :title="nav.title" :link="nav.link" />
            </div>


            <LanguageSwitcher/>

            <ModeSwitcher/>

        </div>
    </div>
</template>