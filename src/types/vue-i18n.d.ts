import frFr from '../i18n/locales/fr-FR.json';
import { datetimeFormats } from '@/i18n/rules/datetime';
import { numberFormats } from '@/i18n/rules/number';

type MessageSchema = typeof frFr

declare module 'vue-i18n' {
    export interface DefineDateTimeFormat {
        short: { year: string; month: string; day: string }
        long: { year: string; month: string; day: string; hour: string; minute: string; hour12?: boolean }
    }

    export interface DefineNumberFormat {
        currency: { style: string; currency: string; notation?: string }
    }

    export interface DefineLocaleMessage extends MessageSchema { }
}