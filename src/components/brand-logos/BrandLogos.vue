<script setup>
import { computed, ref } from 'vue'
import { activeDevice } from '../../composables/useDevicePreview.js'

const logoModules = import.meta.glob('../../images/brand-logos/*.webp', {
  eager: true,
  import: 'default',
})

const logos = Object.entries(logoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const fileName = path.split('/').pop()?.replace('.webp', '') ?? 'Brand'
    return {
      name: fileName.replace(/-/g, ' '),
      src,
    }
  })

const isExpanded = ref(false)
const isMobileMode = computed(() => activeDevice.value === 'mobile')
const isDesktopOrTabletMode = computed(
  () => activeDevice.value === 'desktop' || activeDevice.value === 'tablet'
)
</script>

<template>
  <section
    class="w-full font-poppins"
    :class="
      isMobileMode
        ? 'px-4 py-8'
        : isDesktopOrTabletMode
          ? 'px-4 sm:px-6 lg:px-8 py-12 lg:py-14'
          : 'px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-14'
    "
  >
    <div class="max-w-[1600px] mx-auto flex flex-col items-center">
      <!-- Heading -->
      <h2
        class="font-poppins text-center tracking-tight leading-[1.35]"
        :class="
          isMobileMode
            ? 'text-[18px] mb-6'
            : isDesktopOrTabletMode
              ? 'text-2xl lg:text-[28px] mb-8'
              : 'text-[18px] md:text-2xl lg:text-[28px] mb-6 md:mb-8'
        "
      >
        <span class="block text-primary font-medium">Trusted by 500+</span>
        <span class="block text-black font-normal">dealers country wide.</span>
      </h2>

      <!-- Infinite Marquee with Left/Right Edge Fade -->
      <div
        v-if="!isExpanded"
        class="w-full overflow-hidden relative brand-fade-mask"
      >
        <div
          class="flex w-max items-center animate-brand-marquee hover:[animation-play-state:paused]"
          :class="
            isMobileMode
              ? 'gap-8'
              : isDesktopOrTabletMode
                ? 'gap-12 lg:gap-16'
                : 'gap-8 md:gap-12 lg:gap-16'
          "
        >
          <!-- First set -->
          <div
            v-for="logo in logos"
            :key="`first-${logo.name}`"
            class="flex items-center justify-center shrink-0"
          >
            <img
              :src="logo.src"
              :alt="logo.name"
              loading="lazy"
              class="w-auto object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 select-none"
              :class="
                isMobileMode
                  ? 'h-[48px] max-w-[140px]'
                  : isDesktopOrTabletMode
                    ? 'h-[56px] lg:h-[60px] max-w-[180px]'
                    : 'h-[48px] md:h-[56px] lg:h-[60px] max-w-[140px] md:max-w-[180px]'
              "
            />
          </div>

          <!-- Duplicate set for seamless loop -->
          <div
            v-for="logo in logos"
            :key="`second-${logo.name}`"
            aria-hidden="true"
            class="flex items-center justify-center shrink-0"
          >
            <img
              :src="logo.src"
              :alt="logo.name"
              loading="lazy"
              class="w-auto object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 select-none"
              :class="
                isMobileMode
                  ? 'h-[48px] max-w-[140px]'
                  : isDesktopOrTabletMode
                    ? 'h-[56px] lg:h-[60px] max-w-[180px]'
                    : 'h-[48px] md:h-[56px] lg:h-[60px] max-w-[140px] md:max-w-[180px]'
              "
            />
          </div>
        </div>
      </div>

      <!-- Expanded All-Brands Grid (toggled via chevron) -->
      <div
        v-else
        class="w-full grid items-center justify-items-center gap-6"
        :class="
          isMobileMode
            ? 'grid-cols-3'
            : isDesktopOrTabletMode
              ? 'grid-cols-4 md:grid-cols-6 lg:grid-cols-8'
              : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'
        "
      >
        <div
          v-for="logo in logos"
          :key="`grid-${logo.name}`"
          class="flex items-center justify-center p-2"
        >
          <img
            :src="logo.src"
            :alt="logo.name"
            loading="lazy"
            class="h-[52px] w-auto max-w-[160px] object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 select-none"
          />
        </div>
      </div>

      <!-- Down Chevron Toggle -->
      <button
        type="button"
        class="mt-6 p-2 text-neutral-500 hover:text-primary transition-colors cursor-pointer focus:outline-none"
        :aria-expanded="isExpanded"
        :aria-label="isExpanded ? 'Collapse brand logos' : 'View all brand logos'"
        @click="isExpanded = !isExpanded"
      >
        <svg
          class="w-5 h-5 transition-transform duration-300"
          :class="{ 'rotate-180': isExpanded }"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
  </section>
</template>

<style scoped>
.brand-fade-mask {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 12%,
    black 88%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 12%,
    black 88%,
    transparent 100%
  );
}

@keyframes brand-marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-brand-marquee {
  animation: brand-marquee 80s linear infinite;
}
</style>
