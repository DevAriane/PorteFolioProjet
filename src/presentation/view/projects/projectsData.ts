import { type ProjectItem } from './interface';
import Restaurant from '../../../assets/Restaurant.png';
import Depenselogo from '../../../assets/logoDepense.png';
import Depense from '../../../assets/depense.png';
import depense2 from '../../../assets/depense2.png';
import depense3 from '../../../assets/depense3.png';
import foodly1 from '../../../assets/foodly1.png';
import foodly2 from '../../../assets/foodly2.png';
import foodly3 from '../../../assets/foodly3.png';
import foodly4 from '../../../assets/foodly4.png';
import foodgo from '../../../assets/foodgo.png';
import food1 from '../../../assets/food1.jpeg';
import food2 from '../../../assets/food2.jpeg';
import food3 from '../../../assets/food3.jpeg';
import food4 from '../../../assets/food4.jpeg';
import food5 from '../../../assets/food5.jpeg';
import food6 from '../../../assets/food6.jpeg';
import food7 from '../../../assets/food7.jpeg';
import mamacare from '../../../assets/logomamacare.png';
import mam1 from '../../../assets/mam1.jpeg';
import mam2 from '../../../assets/mam2.jpeg';
import mam3 from '../../../assets/mam3.jpeg';
import mam4 from '../../../assets/mam4.jpeg';
import mam5 from '../../../assets/mam6.jpeg';
import mam6 from '../../../assets/mam6.jpeg';
import mam7 from '../../../assets/mam7.jpeg';
import mam8 from '../../../assets/mam8.jpeg';
import mam9 from '../../../assets/mam9.jpeg';
import mam10 from '../../../assets/mam10.jpeg';
import mam11 from '../../../assets/mam11.jpeg';
import mam12 from '../../../assets/mam12.jpeg';

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
    apk:'https://drive.google.com/file/d/1ZNZ4Gptm4n48MNPdZPWvNXr2x8tH5Ki8/view?usp=sharing',
    serviceLinks: [
      { name: 'Jira Board', url: 'https://jira.atlassian.net/' },
      { name: 'MongoDB Atlas', url: 'https://cloud.mongodb.com/' },
      { name: 'Firebase Auth', url: 'https://console.firebase.google.com/' },
      { name: 'Render Backend', url: 'https://render.com/' }
    ],
    galery:[
      mam1,
      mam2,
      mam3,
      mam4,
      mam5,
      mam6,
      mam7,
      mam8,
      mam9,
      mam10,
      mam11,
      mam12
    ],
    company:"OWNER",
    tags: ['React Native', 'Expo', 'MongoDB Atlas', 'Laravel'],
    accentColor: 'from-purple-500/20 to-pink-500/20',
    logo:mamacare
  },

  {
      id: 'Foodgo',
  titleKey: 'projects.foodgo.title',
  descKey: 'projects.foodgo.shortDescription',
  longDescKey: 'projects.foodgo.longDescription',
    language: 'TypeScript',
    frameworks: ['React Native', 'Expo 54.0', 'Node.JS'],
    architecture: ['Three-Tier Architecture'],
    database: ['Node.JS'],
    cloudDevOps: ['Github'],
    platform: 'Mobile',
    hasFigma: true,
   apk:'https://expo.dev/accounts/ariane_ateumo/projects/projet/builds/32c93ecb-03b7-4d05-b1b6-5756887ce524',
    company:"OWNER",
    tags: ['React Native', 'Expo', 'Node.JS', 'FireBase'],
    accentColor: 'from-green-700/30 to-emerald-700/30',
     galery: [
  food1,food2,food3,food4,food5,food6,food7
  ],
   logo: foodgo,
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
  foodly1,
  foodly2,
  foodly3,
  foodly4
  ],
   logo: Restaurant,
},
 {
"id": "expense-tracker-app",
  "titleKey": "projects.expense.title",
  "descKey": "projects.expense.desc",
  "longDescKey": "projects.expense.longDesc",

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
      url: "https://depense-plum.vercel.app",
      icon: "globe"
    },
    {
      name: "GitHub Repository",
      url: "https://github.com/arianejuanita-lgtm/Depense-",
      icon: "github"
    }
  ],
  company: "OWNER",
  webUrl:"https://depense-plum.vercel.app",

  tags: ["EXPENSE PLAN", "Web App", "UI/UX", "Responsive", "Filters & Search"],
  accentColor: "#1E40AF",
  galery: [
    Depense,
    depense2,
    depense3
  ],
   logo: Depenselogo,
},

 
];