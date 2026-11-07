import { type ProjectItem,type Fonction } from './interface';
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
import back1 from '../../../assets/back1.png';
import back2 from '../../../assets/back2.png';
import back3 from '../../../assets/back3.png';
import back4 from '../../../assets/back5.png';
import back5 from '../../../assets/back5.png';
import logoResa from '../../../assets/logoResa.png';
import resa from '../../../assets/resa.jpeg';
import resa1 from '../../../assets/resa1.jpeg';
import resa2 from '../../../assets/resa2.jpeg';
import resa3 from '../../../assets/resa3.jpeg';
import resa4 from '../../../assets/resa4.jpeg';
import resa5 from '../../../assets/resa5.jpeg';
import delivery1 from '../../../assets/delivery1.png';
import delivery2 from '../../../assets/delivery2.png';
import delivery3 from '../../../assets/delivery3.png';
import stayora from '../../../assets/stayora.jpeg';
import stayora1 from '../../../assets/stayora1.jpeg';
import stayora2 from '../../../assets/stayora2.jpeg';
import stayora3 from '../../../assets/stayora3.jpeg';
import stayora4 from '../../../assets/stayora4.jpeg';
import stayora5 from '../../../assets/stayora5.jpeg';

export const projectsData: ProjectItem[] = [
  {
    id: 'resandpay',
    titleKey: 'project_resandpay_title',
    descKey: 'project_resandpay_desc',
    longDescKey: 'resandpay_restaurant_desc',
    language: 'TypeScript',
    frameworks: ['React Native', 'Redux'],
    architecture: ['App-in-App (Dual-Core)', 'Microservices'],
    database: ['MySQL', 'Firebase Realtime'],
    cloudDevOps: [],
    date:'30/04/2026',
    platform: 'Full-Stack',
    hasFigma: true,
  galery:[
resa,resa1,resa2,resa3,resa4,resa5
  ],
    company:"COMPANY",
    tags: ['React Native', 'Redux', 'MySQL'],
    accentColor: 'from-[#0052FF]/20 to-purple-600/20',
    logo:logoResa,
    fonction:[
      {
        id:"1",
        textKey:'universe_switch'
      },
       {
        id:"2",
        textKey:'dedicated_navigation'
      },
      {
        id:"3",
        textKey:'restaurants_discovery'
      },
       {
        id:"4",
        textKey:'menu_consultation'
      },
      {
        id:"5",
        textKey:'cart_management'
      },
         {
        id:"6",
        textKey:'table_booking'
      },
      {
        id:"7",
        textKey:'integrated_payment'
      },
        {
        id:"8",
        textKey:'order_tracking'
      },
       {
        id:"9",
        textKey:'realtime_notifications'
      },
       {
        id:"10",
        textKey:'business_rules_history'
      }


    ]
  },
    {
    id: 'backend_livraison',
    titleKey: 'delivery_backend',
    descKey: 'user_management_api',
    longDescKey: 'delivery_backend_detailed_desc',
    language: 'PHP',
    frameworks: ['Laravel', 'Livewire'],
    architecture: ['MVC'],
    database: ['MySQL'],
    cloudDevOps: [],
    platform: 'Backend',
    hasFigma: true,
    date:"20/12/2025",
  galery:[
delivery1,delivery2,delivery3
  ],
    company:"COMPANY",
    tags: ['React Native', 'Redux', 'MySQL'],
    accentColor: 'from-[#0052FF]/20 to-purple-600/20',
    logo:logoResa,
    fonction:[
      {
        id:'1',
        textKey:'user_management'
      },
      {
        id:'2',
        textKey:'vendor_management'
      },
       {
        id:'3',
        textKey:'product_classification'
      },
      {
        id:'4',
        textKey:'customer_orders'
      },
       {
        id:'5',
        textKey:'external_deliveries'
      },
      {
        id:'6',
        textKey:'driver_assignment'
      },
      {
        id:'7',
        textKey:'dynamic_pricing'
      },
      {
        id:'8',
        textKey:'payment_invoicing'
      },
       {
        id:'9',
        textKey:'realtime_tracking'
      },
      {
        id:'10',
        textKey:'api_webhooks'
      },

    ]
  },
  {
    id: 'mamacare_frontend',
    titleKey: 'project_mamacare_title',
    descKey: 'project_mamacare_desc',
    longDescKey: 'mamacare_description',
    language: 'TypeScript',
    frameworks: ['React Native', 'Expo 54.0'],
    architecture: ['Three-Tier Architecture'],
    database: ['MongoDB Atlas'],
    cloudDevOps: ['Render', 'GitLab CI/CD'],
    platform: 'Mobile',
    date:"30/07/2026",
    hasFigma: true,
    apk:'https://drive.google.com/file/d/1ZNZ4Gptm4n48MNPdZPWvNXr2x8tH5Ki8/view?usp=sharing',
    serviceLinks: [
      { name: 'Jira Board', url: 'https://jira.atlassian.net/' },
      { name: 'MongoDB Atlas', url: 'https://cloud.mongodb.com/v2/69fa8e001f2aeda491524334#/clusters' },
      { name: 'Firebase Auth', url: 'https://console.firebase.google.com/u/0/project/mamacare-15a8c/settings/general/android:com.mamacare' },
      { name: 'Render Backend', url: 'https://dashboard.render.com/web/srv-d7v3s5jtqb8s73f470j0' }
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
    logo:mamacare,
    fonction:[
      {
        id:'1', textKey:'pregnancy_tracking'
      },
       {
        id:'2', textKey:'child_tracking'
      },
       {
        id:'3', textKey:'vaccination'
      },
       {
        id:'4', textKey:'education_nutrition'
      }
   
    ],
  },
   {
    id: 'mamacare-backend',
    titleKey: 'mamacare.title',
    descKey: 'mamacare.shortDescription',
    longDescKey: 'mamacare_backend_description',
    language: 'PHP',
    frameworks: ['Laravel','Livewire'],
    architecture: ['MVC'],
    database: ['MongoDB Atlas'],
    cloudDevOps: ['Render', 'GitLab CI/CD'],
    platform: 'Web',
    date:"30/07/2026",
    hasFigma: true,
     webUrl:'https://mamacare-backend-xyhh.onrender.com',
    serviceLinks: [
       {
      name: "Live Demo",
      url: "https://mamacare-backend-xyhh.onrender.com",
      icon: "globe"
    },
    {
      name: "GitLab Repository",
      url: "https://gitlab.com/mamacare/mamacare_backend",
      icon: "gitlab"
    },
      { name: 'Jira Board', url: 'https://jira.atlassian.net/' },
      { name: 'MongoDB Atlas', url: 'https://cloud.mongodbcomv269fa8e001f2aeda491524334#clusters' },
      { name: 'Firebase Auth', url: 'https:/consolefirebasegooglecomu0projectmamacare-15a8csettings/general/android:com.mamacare' },
      { name: 'Render Backend', url: 'https://dashboard.render.com/web/srv-d7v3s5jtqb8s73f470j0' }
    ],
    galery:[
     back1,back2,back3,back4,back5
    ],
    company:"OWNER",
    tags: ['MongoDB Atlas', 'Laravel'],
    accentColor: 'from-purple-500/20 to-pink-500/20',
    logo:mamacare,
       fonction:[
      {
        id:'1', textKey:'secure_auth'
      },
       {
        id:'2', textKey:'admin_dashboard'
      },
       {
        id:'3', textKey:'multichannel_notifications'
      },
       {
        id:'4', textKey:'healthcare_professionals_space'
      }
   
    ],
    email:"admin@gmail.com",
    password:'admin2026'
  },
   {
      id: 'Stayora',
  titleKey: 'Stayora',
  descKey: 'stayora_summary',
  longDescKey: 'stayora_detailed_desc',
    language: 'Dart',
    frameworks: ['Flutter', 'Get X', 'ObjectBox'],
    architecture: ['MVC'],
    database: ['ObjectBox'],
    cloudDevOps: ['Github'],
    platform: 'Mobile',
    date:'30/06/2026',
    hasFigma: true,
   apk:'https://drive.google.com/file/d/1aEFwE2V0bcmj_rKYS4_qZyHwgGIBG9xl/view?usp=sharing',
    company:"OWNER",
    tags: ['Flutter', 'Get X', 'ObjectBox', ],
accentColor: 'from-[#163F3A]/30 to-[#54D3C2]/30',
     galery: [
      stayora1,stayora2,stayora3,stayora4,stayora5,
  ],
   logo:stayora ,
   fonction:[
    {
      id:"1",
      textKey:'hotel_browsing_search'
    },
     {
      id:"2",
      textKey:'favorites_management'
    },
     {
      id:"3",
      textKey:'date_selection_booking'
    },
     {
      id:"4",
      textKey:'booking_history'
    },
     {
      id:"5",
      textKey:'objectbox_persistence'
    },
     {
      id:"6",
      textKey:'getx_navigation'
    },
     {
      id:"7",
      textKey:'provider_state_management'
    },
    {
      id:"8",
      textKey:'advanced_search'
    },
     {
      id:"9",
      textKey:'modular_reactive_ui'
    }
   ]
  },

  {
      id: 'Foodgo',
  titleKey: 'projects.foodgo.title',
  descKey: 'projects.foodgo.shortDescription',
  longDescKey: 'delivery_mobile_detailed_desc',
    language: 'TypeScript',
    frameworks: ['React Native', 'Expo 54.0', 'Node.JS'],
    architecture: ['Three-Tier Architecture'],
    database: ['Node.JS'],
    cloudDevOps: ['Github'],
    platform: 'Mobile',
    date:'30/04/2025',
    hasFigma: true,
   apk:'https://expo.dev/accounts/ariane_ateumo/projects/projet/builds/32c93ecb-03b7-4d05-b1b6-5756887ce524',
    company:"OWNER",
    tags: ['React Native', 'Expo', 'Node.JS', 'FireBase'],
    accentColor: 'from-green-700/30 to-emerald-700/30',
     galery: [
  food1,food2,food3,food4,food5,food6,food7
  ],
   logo: foodgo,
   fonction:[
    {
      id:"1",
      textKey:'multi_role_account'
    },
     {
      id:"2",
      textKey:'client_addresses'
    },
     {
      id:"3",
      textKey:'vendor_product_catalog'
    },
     {
      id:"4",
      textKey:'cart_and_ordering'
    },
     {
      id:"5",
      textKey:'mobile_payment'
    },
     {
      id:"6",
      textKey:'realtime_tracking'
    },
     {
      id:"7",
      textKey:'push_notifications'
    },
    {
      id:"8",
      textKey:'vendor_mobile_space'
    },
     {
      id:"9",
      textKey:'driver_mobile_space'
    },
     {
      id:"10",
      textKey:'history_and_ratings'
    },
   ]
  },
  {
  id: "foodly-kitchen-01",
  titleKey: "projects.foodly.title",
  descKey: "projects.foodly.desc",
  longDescKey: "order_restaurant_manage_desc",

  language: "TypeScript",
  frameworks: ["Vue 3", "Pinia", "Vue Router", "Tailwind CSS", "shadcn-vue", "Lucide Icons"],
  architecture: ["Composition API", "Component-Driven", "Reactive Store Pattern"],
  database: ["Local State Management", "Pinia Persisted State"],
  cloudDevOps: ["Vercel"],
  platform: "Web",
  hasFigma: false,
    date:'30/09/2026',
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
   fonction:[
    {
      id:"1",
      textKey:'menu_categories_management'
    },
     {
      id:"2",
      textKey:'order_processing'
    },
     {
      id:"3",
      textKey:'sales_modes'
    },
     {
      id:"4",
      textKey:'price_ranges'
    },
    {
      id:"5",
      textKey:'search_suggestions'
    },
     {
      id:"6",
      textKey:'item_statistics'
    },
     {
      id:"7",
      textKey:'modular_architecture'
    },
     {
      id:"8",
      textKey:'reactive_interface'
    },
    {
      id:"9",
      textKey:'static_typing'
    },
     {
      id:"10",
      textKey:'modern_project_structure'
    },
    
   ]
},
 {
id: "expense-tracker-app",
  titleKey: "projects.expense.title",
  descKey: "projects.expense.desc",
  longDescKey: "depense_app_desc",

  language: "TypeScript",
  frameworks: ["Vue 3", "Pinia", "Vue Router", "Tailwind CSS", "shadcn-vue", "Lucide Icons"],
  architecture: ["Composition API", "Component-Driven", "Reactive Store Pattern"],
  database: ["Local State Management", "Pinia Persisted State"],
  cloudDevOps: ["Vercel"],
  platform: "Web",
  hasFigma: false,
date:"30/09/2026",
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
   fonction:[
    {
      id:'1',
      textKey:'add_expense'
    },
     {
      id:'2',
      textKey:'expense_list'
    },
     {
      id:'3',
      textKey:'delete_with_confirmation'
    },
     {
      id:'4',
      textKey:'automatic_totals'
    },
     {
      id:'5',
      textKey:'filtering_and_search'
    },
     {
      id:'6',
      textKey:'data_persistence'
    },
     {
      id:'7',
      textKey:'table_sorting'
    },
     {
      id:'8',
      textKey:'dark_mode'
    },
     {
      id:'9',
      textKey:'form_validation'
    },
     {
      id:'10',
      textKey:'modular_architecture'
    }
   ]
},

 
];