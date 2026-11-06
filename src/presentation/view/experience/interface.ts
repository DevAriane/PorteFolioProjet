export interface Experience {
  id: string;
  titleKey: string;
  companyKey: string;
  periodKey: string;
  roleKey: string;
  summaryKey: string;
  contextKey: string;
  technologies: string[];
  mission:Mission[];
}

interface Mission{
  id:String;
  missionKey:String;
}

export const experiences: Experience[] = [
  {
    id: 'boolean',
    titleKey: 'exp.boolean.title',
    companyKey: 'exp.boolean.company',
    periodKey: 'exp.boolean.period',
    roleKey: 'exp.boolean.role',
    summaryKey: 'exp.boolean.summary',
    contextKey: 'exp.boolean.context',
    technologies: ['Flutter', 'React Native', 'TypeScript','Dart', 'Laravel', 'API REST', 'Git', 'GitHub'],
    mission:[
      {
        id:"1",
        missionKey:'dev_web_mobile'
      },
       {
        id:"2",
        missionKey:'tests_fonctionnels'
      },
       {
        id:"3",
        missionKey:'gestion_anomalies'
      },
       {
        id:"4",
        missionKey:'deploiements'
      },
      {
        id:"5",
        missionKey:'verification_installation'
      },
       {
        id:"6",
        missionKey:'resolution_incidents'
      }
    ]
  },
  {
    id: 'resandpay',
    titleKey: 'exp.resandpay.title',
    companyKey: 'exp.resandpay.company',
    periodKey: 'exp.resandpay.period',
    roleKey: 'exp.resandpay.role',
    summaryKey: 'exp.resandpay.summary',
    contextKey: 'exp.resandpay.context',
    technologies: ['React Native', 'TypeScript', 'API REST', 'Laravel', 'Git', 'GitHub', 'VS Code'],
     mission:[
      {
        id:"1",
        missionKey:'dev_react_native'
      },
       {
        id:"2",
        missionKey:'dev_api_laravel'
      },
        {
        id:"3",
        missionKey:'gestion_echanges_backend'
      },
        {
        id:"4",
        missionKey:'integration_firebase_notifs'
      },
       {
        id:"5",
        missionKey:'tests_api_postman'
      },
       {
        id:"5",
        missionKey:'livraison_amelioration_continue'
      }

     ]
  },
  {
    id: 'delivery',
    titleKey: 'exp.delivery.title',
    companyKey: 'exp.delivery.company',
    periodKey: 'exp.delivery.period',
    roleKey: 'exp.delivery.role',
    summaryKey: 'exp.delivery.summary',
    contextKey: 'exp.delivery.context',
    technologies: ['PHP', 'Laravel', 'API REST', 'MySQL', 'Postman', 'Git', 'GitHub'],
     mission:[
       {
        id:"1",
        missionKey:'dev_backend_laravel'
      },
      {
        id:"2",
        missionKey:'conception_modelisation_mysql'
      },
       {
        id:"3",
        missionKey:'creation_integration_api'
      },
      {
        id:"4",
        missionKey:'gestion_roles_autorisations'
      },
       {
        id:"5",
        missionKey:'tests_api_postman'
      },
        {
        id:"6",
        missionKey:'verification_coherence_donnees'
      },
     ]
  }
];