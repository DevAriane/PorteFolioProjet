import './assets/main.css'
import { createI18n } from 'vue-i18n';

import { createApp } from 'vue';
import App from './App.vue';

const  datetimeFormats =  {
    'en-US': {
      long: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }
    },
        'fr-FR': {
      long: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12:false
      }
    }
  } as const;

  const numberFormats ={
    'en-US':{
        currency:{
            style:'currency',
            currency:'USD'
        }
    },
        'fr-FR':{
        currency:{
            style:'currency',
            currency:'EUR'
        }
    },
  } as const ;

const i18n = createI18n({
    legacy: false,
    locale: 'fr-FR',
    fallbackLocale: 'en-US',
    datetimeFormats,
    numberFormats,
    messages: {
        'fr-FR': {
            message: {
                greet: "bonjour le monde",
                car: 'voiture | voitures',
                apple: 'aucune pomme | une pomme  | {count} pommes',
                banana: 'aucune banane | {n} banane | {n} bananes',
                current:'Date et heure courante : ',
                money:'argent',
                french:'Francais',
                english:'Anglais'
            }
        },
        'en-US': {
            message: {
                greet: "hello world",
                car: 'car | cars',
                apple: 'no apples | one apple | {count} apples',
                banana: 'no bananas | {n} banana | {n} bananas',
                current:'current datetime :',
                money:'money',
                french:'French',
                english:'English'
            }
        }
    }
});
const app = createApp(App);
app.use(i18n);
app.mount('#app');
