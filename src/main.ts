import './assets/main.css'
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { i18n } from './i18n/index.ts';
import { router } from './routes/router.ts';
import { useThemeStore } from './presentation/common/commonfunction/theme.ts';

const app = createApp(App);
const pinia = createPinia();

app.use(i18n);
app.use(pinia);

const themeStore= useThemeStore();
themeStore.applyThemeClass();

app.use(router);
app.mount('#app');
