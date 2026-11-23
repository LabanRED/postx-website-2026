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
const isDesktopOrTabletMode = computed(
  () => activeDevice.value === 'desktop' || activeDevice.value === 'tablet'
)

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
  <div v-if="items.length" class="w-full font-poppins">
    <!-- Mobile Layout (All slides rendered in flex track so height never changes) -->
    <div
      class="flex-col gap-5"
      :class="
        isMobileMode
          ? 'flex'
          : isDesktopOrTabletMode
            ? 'hidden'
            : 'flex md:hidden'
      "
    >
      <div class="overflow-hidden">
        <div
          class="flex items-stretch transition-transform duration-300 ease-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="item in items"
            :key="`mobile-default-${item.title}`"
            class="w-full shrink-0 px-1 pb-2 flex flex-col gap-5"
          >
            <!-- Fixed-height Visual Mockup -->
            <div class="w-full h-[340px] flex items-center justify-center shrink-0">
              <img
                :src="item.image"
                :alt="item.title"
                loading="lazy"
                class="max-h-full max-w-[340px] w-auto object-contain select-none"
              />
            </div>

            <!-- White Content Card (flex-1 so all cards match tallest height) -->
            <div class="flex-1 bg-white rounded-[30px] border border-neutral-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-7 flex flex-col gap-3 text-left">
              <h3 class="font-poppins font-medium text-[24px] text-black leading-[1.25] tracking-tight">
                {{ item.title }}
              </h3>

              <p class="leading-[1.65]">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Counter + Prev/Next Controls -->
      <div class="flex items-center justify-between pt-1 px-1">
        <div class="border border-black rounded-full px-5 py-1.5 text-sm font-medium text-black select-none">
          {{ currentIndex + 1 }} - {{ items.length }}
        </div>

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

    <!-- Desktop & Tablet Layout (All slides rendered in flex track so height never changes) -->
    <div
      class="flex-col gap-6"
      :class="
        isMobileMode
          ? 'hidden'
          : isDesktopOrTabletMode
            ? 'flex'
            : 'hidden md:flex'
      "
    >
      <div class="overflow-hidden">
        <div
          class="flex items-stretch transition-transform duration-300 ease-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="item in items"
            :key="`desktop-default-${item.title}`"
            class="w-full shrink-0 grid grid-cols-2 gap-12 lg:gap-16 items-center px-1 pb-2"
          >
            <!-- Left Column: Fixed-height Visual Mockup -->
            <div class="h-[420px] lg:h-[480px] flex items-center justify-center">
              <img
                :src="item.image"
                :alt="item.title"
                loading="lazy"
                class="max-h-full max-w-[460px] w-auto object-contain select-none"
              />
            </div>

            <!-- Right Column: White Content Card -->
            <div class="flex flex-col lg:w-125 justify-center">
              <div class="bg-white rounded-[30px] border border-neutral-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-8 lg:p-10 flex flex-col items-start gap-4 text-left">
                <h3 class="font-poppins font-medium text-2xl lg:text-[32px] text-black leading-[1.2] tracking-tight">
                  {{ item.title }}
                </h3>

                <p class="leading-[1.7] text-neutral-800">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Counter + Prev/Next Controls (matched to card width) -->
      <div class="grid grid-cols-2 gap-12 lg:gap-16 px-1">
        <div class="col-start-2 lg:w-125 flex items-center justify-between">
          <div class="border border-black rounded-full px-5 py-1.5 text-sm font-medium text-black select-none">
            {{ currentIndex + 1 }} - {{ items.length }}
          </div>

          <div class="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              :disabled="currentIndex === 0"
              class="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer disabled:cursor-not-allowed"
              :class="
                currentIndex === 0
                  ? 'border border-neutral-300 text-neutral-300 bg-transparent'
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
                  ? 'border border-neutral-300 text-neutral-300 bg-transparent'
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
    </div>
  </div>
</template>
