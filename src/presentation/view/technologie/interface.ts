import typescript from '../../../assets/ts-logo-512.png';
import vue from '../../../assets/vuedotjs.png';
import react from '../../../assets/react.png';
import flutter from '../../../assets/flutter.png';
import dart from '../../../assets/dart.png';
import laravel from '../../../assets/laravel.png';
import php from '../../../assets/php.png';
import node from '../../../assets/node-js.png';
import firebase from '../../../assets/firebase.png';
import mysql from '../../../assets/mysql.png';
import mongodb from '../../../assets/mongo.png';
import docker from '../../../assets/docker.png';
import git from '../../../assets/git.png';
import github from '../../../assets/github.png';
import jira from '../../../assets/jira.png';
import claude from '../../../assets/claude.png';
import chatgpt from '../../../assets/chatgpt.png';
import gemini from '../../../assets/gemini.png';

export interface TechItem {
  name: string;
  image: string; 
  bgClass: string;
}


export const technologies: TechItem[] = [
  { name: 'TypeScript', image:typescript, bgClass: 'bg-[#3178C6]/10 border-[#3178C6]/30' },
  { name: 'Vue.js 3', image: vue, bgClass: 'bg-emerald-500/10 border-emerald-500/30' },
  { name: 'React', image: react, bgClass: 'bg-cyan-500/10 border-cyan-500/30' },
  { name: 'Flutter', image: flutter, bgClass: 'bg-sky-500/10 border-sky-500/30' },
  { name: 'Dart', image: dart, bgClass: 'bg-blue-500/10 border-blue-500/30' },
  { name: 'Laravel', image: laravel, bgClass: 'bg-red-500/10 border-red-500/30' },
  { name: 'PHP', image: php, bgClass: 'bg-indigo-500/10 border-indigo-500/30' },
  { name: 'Node.js', image: node, bgClass: 'bg-green-500/10 border-green-500/30' },
  { name: 'Firebase', image: firebase, bgClass: 'bg-amber-500/10 border-amber-500/30' },
  { name: 'MySQL', image: mysql, bgClass: 'bg-blue-600/10 border-blue-600/30' },
  { name: 'MongoDB', image: mongodb, bgClass: 'bg-emerald-600/10 border-emerald-600/30' },
  { name: 'Docker', image: docker, bgClass: 'bg-sky-600/10 border-sky-600/30' },
  { name: 'Git', image: git, bgClass: 'bg-orange-500/10 border-orange-500/30' },
  { name: 'GitHub', image: github, bgClass: 'bg-slate-500/10 border-slate-500/30' },
  { name: 'Jira', image:jira, bgClass: 'bg-blue-700/10 border-blue-700/30' },
  { name: 'Claude AI', image: claude, bgClass: 'bg-amber-600/10 border-amber-600/30' },
  { name: 'ChatGPT', image:chatgpt, bgClass: 'bg-teal-500/10 border-teal-500/30' },
  { name: 'Gemini', image: gemini, bgClass: 'bg-blue-400/10 border-blue-400/30' }
];