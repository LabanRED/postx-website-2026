<script setup>
import { computed } from 'vue'
import { activeDevice } from '../../composables/useDevicePreview.js'

defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const isMobileMode = computed(() => activeDevice.value === 'mobile')
const isTabletMode = computed(() => activeDevice.value === 'tablet')
const isDesktopMode = computed(() => activeDevice.value === 'desktop')
</script>

<template>
  <div
    class="w-full grid gap-6 font-poppins"
    :class="
      isMobileMode
        ? 'grid-cols-1'
        : isTabletMode
          ? 'grid-cols-1 md:grid-cols-2'
          : isDesktopMode
            ? 'grid-cols-3'
            : 'grid-cols-1 md:grid-cols-3'
    "
  >
    <div
      v-for="item in items"
      :key="item.title"
      class="rounded-[30px] border border-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col items-start text-left"
      style="background: linear-gradient(180deg, rgba(88, 228, 255, 0.08) 0%, rgba(88, 228, 255, 0.22) 100%);"
      :class="
        isMobileMode
          ? 'p-7 gap-4'
          : isDesktopMode || isTabletMode
            ? 'p-8 lg:p-10 gap-5'
            : 'p-7 md:p-8 lg:p-10 gap-4 md:gap-5'
      "
    >
      <!-- Icon -->
      <img
        :src="item.icon"
        :alt="item.title"
        loading="lazy"
        class="w-12 h-12 lg:w-14 lg:h-14 object-contain select-none"
      />

      <!-- Heading -->
      <h3
        class="font-poppins font-medium text-black tracking-tight leading-[1.25]"
        :class="
          isMobileMode
            ? 'text-[22px]'
            : isDesktopMode || isTabletMode
              ? 'text-xl lg:text-[24px]'
              : 'text-[22px] md:text-xl lg:text-[24px]'
        "
      >
        {{ item.title }}
      </h3>

      <!-- Description -->
      <p class="text-neutral-800 leading-[1.65]">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>
