import type { DateTimeFormats } from 'vue-i18n';

export const datetimeFormats : DateTimeFormats={
    'en-US':{
        short:{
            year:'numeric',
            month:'short',
            day:'numeric'
        },
      long: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }
    },
    'fr-FR':{
        short:{
            year:'numeric',
            month:'short',
            day:'numeric'
        },
      long: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12:false
      }
    },     
}