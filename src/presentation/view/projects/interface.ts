export interface ProjectServiceLink {
  name: string;      
  url: string;       
  icon?: string;     
}

export interface ProjectItem {
  id: string;
  titleKey: string;           
  descKey: string;            
  longDescKey?: string;       
  date?:Date;
  language: 'TypeScript' | 'PHP' | 'JavaScript' | 'Dart';
  frameworks: string[];       
  architecture: string[];     
  database: string[];         
  cloudDevOps: string[];      
  platform: 'Mobile' | 'Web' | 'Full-Stack' | 'Desktop';
  hasFigma: boolean;          
webUrl?: string;
  serviceLinks?: ProjectServiceLink[];
  company:string;
  videoFile?: File;
  tags: string[];
  accentColor: string;
  apk?:File | Blob | String;
  galery?:string[];
  logo?:string;
}