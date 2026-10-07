import Linkedin from '../../../assets/linkedin.png';
import Github from '../../../assets/github.png';
import Gitlab from '../../../assets/gitlab.png';
import Whatsapp from '../../../assets/whatzapp.png';
import Wakatime from '../../../assets/wakatime.png';
import Mail from '../../../assets/gmail.png';

export interface ContactCard {
  nameKey: string;
  descKey: string;
  image:string;
  url: string;
  colorClass: string;
  borderHoverClass: string;
}

export const contacts: ContactCard[] = [
  {
    nameKey: 'contacts.linkedin',
    descKey: 'contacts.linkedin',
    image: Linkedin,
    url: 'https://www.linkedin.com/in/ariane-juanita-ateumo-40637b366/', 
    colorClass: 'text-[#0A66C2] bg-blue-500/10',
    borderHoverClass: 'hover:border-[#0A66C2]'
  },
  {
    nameKey: 'contacts.github',
    descKey: 'contacts.github',
    image: Github,
    url: 'https://github.com/DevAriane', 
    colorClass: 'text-slate-900 dark:text-white bg-slate-500/10',
    borderHoverClass: 'hover:border-slate-700 dark:hover:border-slate-300'
  },
  {
    nameKey: 'contacts.gitlab',
    descKey: 'contacts.gitlab',
    image: Gitlab,
    url: 'https://gitlab.com/DevAriane', 
    colorClass: 'text-[#FC6D26] bg-orange-500/10',
    borderHoverClass: 'hover:border-[#FC6D26]'
  },
  {
    nameKey: 'contacts.wakatime',
    descKey: 'contacts.wakatime',
    image: Wakatime,
    url: 'https://wakatime.com/dashboard', 
    colorClass: 'text-[#E53935] bg-red-500/10',
    borderHoverClass: 'hover:border-[#E53935]'
  },
  {
    nameKey: 'contacts.gmail',
    descKey: 'arianeateumo@gmail.com',
    image: Mail,
    url: 'mailto:arianeateumo@gmail.com', 
    colorClass: 'text-[#EA4335] bg-red-500/10',
    borderHoverClass: 'hover:border-[#EA4335]'
  },
  {
    nameKey: 'contacts.whatsapp',
    descKey: 'contacts.whatsapp',
    image: Whatsapp,
    url: 'https://wa.me/237671092083', 
    colorClass: 'text-[#25D366] bg-emerald-500/10',
    borderHoverClass: 'hover:border-[#25D366]'
  }
];