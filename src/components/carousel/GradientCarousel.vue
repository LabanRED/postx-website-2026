<script setup>
import { computed, ref } from 'vue'
import { activeDevice } from '../../composables/useDevicePreview.js'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const currentIndex = ref(0)

const isMobileMode = computed(() => activeDevice.value === 'mobile')
const isTabletMode = computed(() => activeDevice.value === 'tablet')
const isDesktopMode = computed(() => activeDevice.value === 'desktop')

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1
  }
}

const nextSlide = () => {
  if (currentIndex.value < props.items.length - 1) {
    currentIndex.value += 1
  }
}
</script>

<template>
  <div class="w-full font-poppins">
    <!-- Mobile Carousel View (< md or activeDevice === 'mobile') -->
    <div
      :class="
        isMobileMode
          ? 'block'
          : isTabletMode || isDesktopMode
            ? 'hidden'
            : 'block md:hidden'
      "
    >
      <div class="overflow-hidden">
        <div
          class="flex items-stretch transition-transform duration-300 ease-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="item in items"
            :key="`mobile-${item.title}`"
            class="w-full shrink-0 px-1 pb-4"
          >
            <div
              class="rounded-[30px] border border-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-[30px] flex flex-col gap-5 h-full"
              style="background: linear-gradient(180deg, #FFFFFF 0%, rgba(88, 228, 255, 0.1) 100%);"
            >
              <!-- Icon + Title -->
              <div class="flex items-center gap-4">
                <div class="w-[54px] h-[54px] rounded-full bg-[#00A5C5]/12 flex items-center justify-center shrink-0 text-primary">
                  <slot name="icon" :item="item" />
                </div>
                <h3 class="font-poppins font-medium text-[24px] text-black tracking-tight">
                  {{ item.title }}
                </h3>
              </div>

              <!-- Description -->
              <p class="text-neutral-700 leading-relaxed">
                {{ item.description }}
              </p>

              <!-- Bullet Points -->
              <ul class="space-y-3 mt-1">
                <li
                  v-for="bullet in item.bullets"
                  :key="bullet"
                  class="flex items-start gap-3 text-[14px] text-neutral-800 leading-snug"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Pagination Counter & Arrow Controls -->
      <div class="mt-4 px-1 flex items-center justify-between">
        <!-- Counter Pill: e.g. 1 - 4 -->
        <div class="border border-black rounded-full px-5 py-1.5 text-sm font-medium text-black select-none">
          {{ currentIndex + 1 }} - {{ items.length }}
        </div>

        <!-- Prev / Next Circular Buttons -->
        <div class="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            :disabled="currentIndex === 0"
            class="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer disabled:cursor-not-allowed"
            :class="
              currentIndex === 0
                ? 'border border-neutral-400 text-neutral-400 bg-transparent'
                : 'bg-black text-white hover:bg-primary'
            "
            @click="prevSlide"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next slide"
            :disabled="currentIndex === items.length - 1"
            class="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer disabled:cursor-not-allowed"
            :class="
              currentIndex === items.length - 1
                ? 'border border-neutral-400 text-neutral-400 bg-transparent'
                : 'bg-black text-white hover:bg-primary'
            "
            @click="nextSlide"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Desktop & Tablet Grid View (4 columns on desktop, 2 columns on tablet) -->
    <div
      class="grid gap-6"
      :class="
        isMobileMode
          ? 'hidden'
          : isTabletMode
            ? 'grid-cols-2'
            : isDesktopMode
              ? 'grid-cols-4'
              : 'hidden md:grid md:grid-cols-2 lg:grid-cols-4'
      "
    >
      <div
        v-for="item in items"
        :key="`desktop-${item.title}`"
        class="rounded-[30px] border border-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-7 lg:p-8 flex flex-col gap-5"
        style="background: linear-gradient(180deg, #FFFFFF 0%, rgba(88, 228, 255, 0.1) 100%);"
      >
        <!-- Icon + Title -->
        <div class="flex items-center gap-3.5">
          <div class="w-12 h-12 rounded-full bg-[#00A5C5]/12 flex items-center justify-center shrink-0 text-primary">
            <slot name="icon" :item="item" />
          </div>
          <h3 class="font-poppins font-medium text-xl lg:text-[22px] text-black tracking-tight">
            {{ item.title }}
          </h3>
        </div>

        <!-- Description -->
        <p class="md:text-[13px] lg:text-[14px] text-neutral-700 leading-relaxed">
          {{ item.description }}
        </p>

        <!-- Bullet Points -->
        <ul class="space-y-2.5 mt-1">
          <li
            v-for="bullet in item.bullets"
            :key="bullet"
            class="flex items-start gap-2.5 text-[13px] lg:text-[14px] text-neutral-800 leading-snug"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            <span>{{ bullet }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
