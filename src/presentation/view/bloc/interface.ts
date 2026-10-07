export interface ArticleData {
  id: string;
  titleKey: string;
  date: string;
  readTime: string;
  tags: string[];
  ctxKey: string;
  archKey: string;
  chalKey: string;
  resKey: string;
}

export const articles: ArticleData[] = [
  {
    id: 'resandpay',
    titleKey: 'resandpay_blog_title',
    date: 'Mars 2026',
    readTime: '6 min de lecture',
    tags: ['React Native', 'TypeScript', 'Redux', 'Laravel', 'MySQL', 'Firebase'],
    ctxKey: 'resandpay_ctx',
    archKey: 'resandpay_arch',
    chalKey: 'resandpay_chal',
    resKey: 'resandpay_res'
  },
  {
    id: 'mamacare',
    titleKey: 'mamacare_blog_title',
    date: 'Juin 2026',
    readTime: '8 min de lecture',
    tags: ['React Native', 'Expo', 'Laravel', 'MongoDB Atlas', 'Firebase Auth'],
    ctxKey: 'mamacare_ctx',
    archKey: 'mamacare_arch',
    chalKey: 'mamacare_chal',
    resKey: 'mamacare_res'
  }
];