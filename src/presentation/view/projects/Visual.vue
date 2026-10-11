<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

const props = defineProps<{
  videoFile?: File | string;
  galery?: string[];
  intervalTime?: number;
}>();

const videoSrc = computed(() => {
  if (!props.videoFile) return null;
  if (typeof props.videoFile === 'string') return props.videoFile;
  return URL.createObjectURL(props.videoFile);
});

const currentIndex = ref(0);
let timer: ReturnType<typeof setInterval> | null = null;
const interval = props.intervalTime || 3500;

const startCarousel = () => {
  if (props.galery && props.galery.length > 1) {
    timer = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % props.galery!.length;
    }, interval);
  }
};

const stopCarousel = () => {
  if (timer) clearInterval(timer);
};

onMounted(() => {
  startCarousel();
});

onUnmounted(() => {
  stopCarousel();
  if (props.videoFile && typeof props.videoFile !== 'string' && videoSrc.value) {
    URL.revokeObjectURL(videoSrc.value);
  }
});
</script>

<template>
  <div 
    v-if="videoSrc || (galery && galery.length > 0)"
    class="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-900/80 flex items-center justify-center group"
    @mouseenter="stopCarousel"
    @mouseleave="startCarousel"
  >
    <div v-if="videoSrc" class="w-full h-full">
      <video 
        :src="videoSrc"
        controls
        autoplay
        muted
        loop
        playsinline
        class="w-full h-full object-cover"
      ></video>
    </div>

    <div v-else-if="galery && galery.length > 0" class="relative w-full h-full">
      <transition-group name="fade" tag="div" class="w-full h-full">
        <div 
          v-for="(img, index) in galery" 
          :key="img"
          v-show="index === currentIndex"
          class="absolute inset-0 w-full h-full"
        >
          <img 
            :src="img" 
            alt="Aperçu du projet" 
            class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0A1128]/40 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </transition-group>

      <div v-if="galery.length > 1" class="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5 z-10">
        <button 
          v-for="(_, index) in galery" 
          :key="index"
          @click.stop="currentIndex = index"
          class="h-1.5 rounded-full transition-all duration-300"
          :class="currentIndex === index ? 'w-5 bg-[#0052FF]' : 'w-1.5 bg-white/60 hover:bg-white'"
          :aria-label="`Slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>