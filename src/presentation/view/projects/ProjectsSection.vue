<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { projectsData } from './projectsData';
import { type ProjectItem } from './interface';
import ProjectCard from './ProjectCard.vue';
import ProjectFilters from './ProjectFilters.vue';
import ProjectDetail from './ProjectDetail.vue';
import { FolderGit2 } from '@lucide/vue';

const { t } = useI18n({ useScope: 'global' });
const selectedProject = ref<ProjectItem | null>(null);
const selectedFilter = ref('all');

const categories = [
  { key: 'all', labelKey: 'filter_all' },
  { key: 'Mobile', labelKey: 'filter_mobile' },
  { key: 'Full-Stack', labelKey: 'filter_fullstack' },
  { key: 'TypeScript', labelKey: 'filter_typescript' },
  { key: 'Laravel', labelKey: 'filter_laravel' },
  { key: 'App-in-App', labelKey: 'filter_app_in_app' },
  { key: 'MongoDB', labelKey: 'filter_mongodb' },
  { key: 'Docker', labelKey: 'filter_docker' },
  { key: 'COMPANY', labelKey: 'company' },
  { key: 'OWNER', labelKey: 'owner' }
];

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'all') return projectsData;
  
  return projectsData.filter(p => 
    p.platform === selectedFilter.value || 
    p.language === selectedFilter.value || 
    p.frameworks.some(f => f.toLowerCase().includes(selectedFilter.value.toLowerCase())) ||
    p.architecture.some(a => a.toLowerCase().includes(selectedFilter.value.toLowerCase())) ||
    p.database.some(d => d.toLowerCase().includes(selectedFilter.value.toLowerCase())) ||
    p.cloudDevOps.some(c => c.toLowerCase().includes(selectedFilter.value.toLowerCase())) ||
    p.company === selectedFilter.value
  );
});
</script>

<template>
  <div>
    <ProjectDetail 
      v-if="selectedProject" 
      :project="selectedProject" 
      @back="selectedProject = null" 
    />

    <section v-else id="projects" class="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0A1128] transition-colors duration-300">
      <div class="max-w-6xl mx-auto space-y-12">
        
        <div class="text-center max-w-2xl mx-auto space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-[#0052FF] dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/40">
            <FolderGit2 class="w-3.5 h-3.5" />
            <span>Portfolio</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {{ t('projects_title') }}
          </h2>
          <p class="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('projects_subtitle') }}
          </p>
        </div>

        <ProjectFilters 
          :categories="categories" 
          :selectedCategory="selectedFilter" 
          @select="(key) => selectedFilter = key" 
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          <ProjectCard 
            v-for="project in filteredProjects" 
            :key="project.id" 
            :project="project" 
            @select="(proj) => selectedProject = proj" 
          />
        </div>

      </div>
    </section>
  </div>
</template>