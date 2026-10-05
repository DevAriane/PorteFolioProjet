<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { Sun , Moon} from '@lucide/vue';
import { useThemeStore } from '../commonfunction/theme';
const themeStore = useThemeStore();

</script>

<template>
    
    <Button @click="themeStore.toggleTheme">
    {{ themeStore.theme === 'ligth' }}
        <Sun/>
     : 
        <Moon/>
    
    </Button>
</template>