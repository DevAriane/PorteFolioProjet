export interface Experience {
  id: string;
  titleKey: string;
  companyKey: string;
  periodKey: string;
  roleKey: string;
  summaryKey: string;
  contextKey: string;
  technologies: string[];
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
    technologies: ['Flutter', 'React Native', 'TypeScript', 'Laravel', 'API REST', 'Git', 'GitHub/GitLab']
  },
  {
    id: 'resandpay',
    titleKey: 'exp.resandpay.title',
    companyKey: 'exp.resandpay.company',
    periodKey: 'exp.resandpay.period',
    roleKey: 'exp.resandpay.role',
    summaryKey: 'exp.resandpay.summary',
    contextKey: 'exp.resandpay.context',
    technologies: ['React Native', 'TypeScript', 'API REST', 'Laravel', 'Git', 'GitHub', 'VS Code']
  },
  {
    id: 'delivery',
    titleKey: 'exp.delivery.title',
    companyKey: 'exp.delivery.company',
    periodKey: 'exp.delivery.period',
    roleKey: 'exp.delivery.role',
    summaryKey: 'exp.delivery.summary',
    contextKey: 'exp.delivery.context',
    technologies: ['PHP', 'Laravel', 'API REST', 'MySQL', 'Postman', 'Git', 'GitHub']
  }
];