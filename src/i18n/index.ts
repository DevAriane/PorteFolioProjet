import { createI18n } from "vue-i18n";
import { numberFormats } from "./rules/number";
import { datetimeFormats } from "./rules/datetime";
import defaultMessage from './locales/fr-FR.json';

export const SUPPORTED_LOCALES=['fr-FR','en-US'] as const;
export  type  SupportedLocales = typeof SUPPORTED_LOCALES[number];

export const i18n=createI18n({
    legacy:false,
    locale:'fr-FR',
    fallbackLocale:'en-US',
    numberFormats,
    datetimeFormats,
    messages:{
        'fr-FR':defaultMessage
    }
});

export async function loadLanguagaAsync(locale:SupportedLocales): Promise<void> {
    const currentLocale = i18n.global.locale.value
    if( currentLocale  === locale) return;

    if(!i18n.global.availableLocales.includes(locale)){
        const messages = await import(`./locales/${locale}.json`);
        i18n.global.setLocaleMessage(locale, messages.default);
    }

    i18n.global.locale.value= locale;
    document.querySelector('html')?.setAttribute('lang',locale);
    
}