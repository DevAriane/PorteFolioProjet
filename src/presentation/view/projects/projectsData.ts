import { type ProjectItem } from './interface';

export const projectsData: ProjectItem[] = [
  {
    id: 'resandpay',
    titleKey: 'project_resandpay_title',
    descKey: 'project_resandpay_desc',
    longDescKey: 'project_resandpay_long',
    language: 'TypeScript',
    frameworks: ['React Native', 'Laravel', 'Redux'],
    architecture: ['App-in-App (Dual-Core)', 'Microservices'],
    database: ['MySQL', 'Firebase Realtime'],
    cloudDevOps: ['GitLab CI/CD', 'Render', 'Docker'],
    platform: 'Full-Stack',
    hasFigma: true,
    serviceLinks: [
      { name: 'Jira (Scrum)', url: 'https://jira.atlassian.net/' },
      { name: 'Expo Dashboard', url: 'https://expo.dev/' },
      { name: 'Firebase Console', url: 'https://console.firebase.google.com/' },
      { name: 'Render API', url: 'https://render.com/' },
      { name: 'Figma Prototyping', url: 'https://www.figma.com/' }
    ],
    tags: ['React Native', 'Redux', 'Laravel', 'MySQL'],
    date: 'Mars 2026',
    accentColor: 'from-[#0052FF]/20 to-purple-600/20'
  },
  {
    id: 'mamacare',
    titleKey: 'project_mamacare_title',
    descKey: 'project_mamacare_desc',
    longDescKey: 'project_mamacare_long',
    language: 'TypeScript',
    frameworks: ['React Native', 'Expo 54.0', 'Laravel 11'],
    architecture: ['Three-Tier Architecture'],
    database: ['MongoDB Atlas'],
    cloudDevOps: ['Render', 'GitLab CI/CD'],
    platform: 'Mobile',
    hasFigma: true,
    serviceLinks: [
      { name: 'Jira Board', url: 'https://jira.atlassian.net/' },
      { name: 'MongoDB Atlas', url: 'https://cloud.mongodb.com/' },
      { name: 'Firebase Auth', url: 'https://console.firebase.google.com/' },
      { name: 'Render Backend', url: 'https://render.com/' }
    ],
    tags: ['React Native', 'Expo', 'MongoDB Atlas', 'Laravel'],
    date: 'Juin 2026',
    accentColor: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 'boolean',
    titleKey: 'project_boolean_title',
    descKey: 'project_boolean_desc',
    longDescKey: 'project_boolean_long',
    language: 'TypeScript',
    frameworks: ['Flutter', 'React Native', 'Laravel'],
    architecture: ['MVC'],
    database: ['MySQL', 'SQLite'],
    cloudDevOps: ['GitHub Actions', 'Vercel'],
    platform: 'Full-Stack',
    hasFigma: false,
    serviceLinks: [
      { name: 'GitHub Repo', url: 'https://github.com/' },
      { name: 'SonarQube QA', url: 'https://www.sonarsource.com/' }
    ],
    tags: ['Flutter', 'QA Testing', 'Laravel', 'TypeScript'],
    date: 'Octobre 2026',
    accentColor: 'from-blue-500/20 to-cyan-500/20'
  }
];