import { ref } from "vue";
import type { SupportedLocales } from "@/i18n";
import { defineStore } from "pinia";

const currentLocale=ref<SupportedLocales>('fr-FR');

export const useLocalState=defineStore('langue',()=>{
    const setLocalState = (newLocale : SupportedLocales)=>{
        currentLocale.value=newLocale;
    }

    return{
        currentLocale,
        setLocalState
    }
});

