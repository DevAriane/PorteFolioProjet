import { type ProjectItem } from './interface';
import Restaurant from '../../../assets/Restaurant.png'

export const projectsData: ProjectItem[] = [
  {
    id: 'resandpay',
    titleKey: 'project_resandpay_title',
    descKey: 'project_resandpay_desc',
    longDescKey: 'project_resandpay_long',
    language: 'TypeScript',
    frameworks: ['React Native', 'Redux'],
    architecture: ['App-in-App (Dual-Core)', 'Microservices'],
    database: ['MySQL', 'Firebase Realtime'],
    cloudDevOps: [],
    platform: 'Full-Stack',
    hasFigma: true,
    serviceLinks: [
      { name: 'Jira (Scrum)', url: '' },
      { name: 'Expo Dashboard', url: '' },
      { name: 'Firebase Console', url: '' },
      { name: 'Render API', url: '' },
      { name: 'Figma Prototyping', url: '' }
    ],
    company:"COMPANY",
    tags: ['React Native', 'Redux', 'MySQL'],
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
    company:"OWNER",
    tags: ['React Native', 'Expo', 'MongoDB Atlas', 'Laravel'],
    accentColor: 'from-purple-500/20 to-pink-500/20'
  },
  {
  id: "foodly-kitchen-01",
  titleKey: "projects.foodly.title",
  descKey: "projects.foodly.desc",
  longDescKey: "projects.foodly.longDesc",

  language: "TypeScript",
  frameworks: ["Vue 3", "Pinia", "Vue Router", "Tailwind CSS", "shadcn-vue", "Lucide Icons"],
  architecture: ["Composition API", "Component-Driven", "Reactive Store Pattern"],
  database: ["Local State Management", "Pinia Persisted State"],
  cloudDevOps: ["Vercel"],
  platform: "Web",
  hasFigma: false,

  serviceLinks: [
    {
      name: "Live Demo",
      url: "https://order-estaurant-manage.vercel.app",
      icon: "globe"
    },
    {
      name: "GitHub Repository",
      url: "https://github.com/arianejuanita-lgtm/Order-estaurant-manage",
      icon: "github"
    }
  ],
  company: "OWNER",
  webUrl:"https://order-estaurant-manage.vercel.app",

  tags: ["Food Delivery", "Web App", "UI/UX", "Responsive", "Filters & Search"],
  accentColor: "#F5BE18",
  galery: [
    // "/images/foodly-menu.png",
    // "/images/foodly-filters.png",
    // "/images/foodly-cart.png"
  ],
   logo: Restaurant,
}
 
];