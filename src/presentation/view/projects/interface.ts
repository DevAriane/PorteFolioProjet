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

  language: 'TypeScript' | 'PHP' | 'JavaScript' | 'Dart';
  frameworks: string[];       
  architecture: string[];     
  database: string[];         
  cloudDevOps: string[];      
  platform: 'Mobile' | 'Web' | 'Full-Stack' | 'Desktop';
  hasFigma: boolean;          

  serviceLinks: ProjectServiceLink[];

  tags: string[];
  date: string;
  accentColor: string;
}