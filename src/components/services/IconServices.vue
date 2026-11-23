<script setup>
import { computed } from 'vue'
import { activeDevice } from '../../composables/useDevicePreview.js'

defineProps({
  title: {
    type: String,
    default: 'Set up around how your business works',
  },
  subtitle: {
    type: String,
    default: 'Personalised onboarding, sized to your team, your locations and your goals.',
  },
  items: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: 'PostX Platform',
  },
})

const isMobileMode = computed(() => activeDevice.value === 'mobile')
const isDesktopOrTabletMode = computed(
  () => activeDevice.value === 'desktop' || activeDevice.value === 'tablet'
)
</script>

<template>
  <div class="w-full font-poppins">
    <!-- Mobile Stacked Layout -->
    <div
      class="flex-col items-start text-left"
      :class="
        isMobileMode
          ? 'flex'
          : isDesktopOrTabletMode
            ? 'hidden'
            : 'flex md:hidden'
      "
    >
      <h2 class="font-poppins font-medium text-[24px] text-black leading-[1.2] tracking-tight mb-2">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="text-neutral-600 leading-[1.6] mb-8">
        {{ subtitle }}
      </p>

      <div class="w-full flex flex-col gap-7 mb-10">
        <div
          v-for="item in items"
          :key="`mobile-svc-${item.title}`"
          class="flex flex-col items-start"
        >
          <img
            :src="item.icon"
            :alt="item.title"
            loading="lazy"
            class="w-9 h-9 object-contain mb-2.5 select-none"
          />
          <h3 class="font-poppins font-medium text-[20px] text-black leading-[1.3] tracking-tight mb-1.5">
            {{ item.title }}
          </h3>
          <p class="text-neutral-700 leading-[1.6]">
            {{ item.description }}
          </p>
        </div>
      </div>

      <div class="w-full flex justify-center">
        <img
          :src="image"
          :alt="imageAlt"
          loading="lazy"
          class="w-full max-w-[340px] h-auto object-contain select-none"
        />
      </div>
    </div>

    <!-- Desktop & Tablet 2-Column Layout -->
    <div
      class="grid-cols-2 gap-12 lg:gap-16 items-center"
      :class="
        isMobileMode
          ? 'hidden'
          : isDesktopOrTabletMode
            ? 'grid'
            : 'hidden md:grid'
      "
    >
      <!-- Left Column: Heading + Subtitle + 2x2 Icon Grid -->
      <div class="flex flex-col items-start text-left">
        <h2 class="font-poppins font-medium text-3xl lg:text-[40px] text-black leading-[1.2] tracking-tight mb-3">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="text-neutral-600 leading-[1.6] mb-10 max-w-xl">
          {{ subtitle }}
        </p>

        <div class="w-full grid grid-cols-2 gap-x-8 gap-y-8">
          <div
            v-for="item in items"
            :key="`desktop-svc-${item.title}`"
            class="flex flex-col items-start"
          >
            <img
              :src="item.icon"
              :alt="item.title"
              loading="lazy"
              class="w-10 h-10 object-contain mb-3 select-none"
            />
            <h3 class="font-poppins font-medium text-lg lg:text-[20px] text-black leading-[1.3] tracking-tight mb-1.5">
              {{ item.title }}
            </h3>
            <p class="md:text-[14px] text-neutral-700 leading-[1.6]">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Right Column: Laptop Image -->
      <div class="flex justify-center">
        <img
          :src="image"
          :alt="imageAlt"
          loading="lazy"
          class="w-full max-w-[560px] h-auto object-contain select-none"
        />
      </div>
    </div>
  </div>
</template>
