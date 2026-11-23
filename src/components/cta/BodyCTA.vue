<script setup>
import { computed } from 'vue'
import defaultDesktopCta from '../../images/desktop-mid-page-cta.webp'
import defaultMobileCta from '../../images/mobile-mid-page-cta.webp'
import { activeDevice } from '../../composables/useDevicePreview.js'

defineProps({
  desktopImage: {
    type: String,
    default: defaultDesktopCta,
  },
  mobileImage: {
    type: String,
    default: defaultMobileCta,
  },
  imageAlt: {
    type: String,
    default: 'Book a PostX Demo',
  },
  eyebrow: {
    type: String,
    default: 'Increase your conversion rate today.',
  },
  title: {
    type: String,
    default: 'Ready to simplify your conversations?',
  },
  ctaText: {
    type: String,
    default: 'Book your Demo',
  },
  ctaHref: {
    type: String,
    default: '#contact',
  },
})

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
        ? 'px-4 py-6'
        : isDesktopOrTabletMode
          ? 'px-4 sm:px-6 lg:px-8 py-10 lg:py-14'
          : 'px-4 sm:px-6 lg:px-8 py-6 md:py-10 lg:py-14'
    "
  >
    <div class="max-w-[1600px] mx-auto">
      <!-- Desktop & Tablet Banner CTA -->
      <div
        class="relative w-full overflow-hidden rounded-[30px]"
        :class="
          isMobileMode
            ? 'hidden'
            : isDesktopOrTabletMode
              ? 'block'
              : 'hidden md:block'
        "
      >
        <img
          :src="desktopImage"
          :alt="imageAlt"
          loading="lazy"
          class="w-full h-auto block select-none"
        />

        <div class="absolute inset-y-0 left-0 flex items-center px-10 md:px-14 lg:px-20 max-w-[58%] lg:max-w-[52%]">
          <div class="flex flex-col items-start gap-3 lg:gap-4">
            <p class="text-neutral-800 leading-snug">
              {{ eyebrow }}
            </p>
            <h2 class="font-poppins font-medium text-black text-2xl md:text-3xl lg:text-[42px] leading-[1.2] tracking-tight">
              {{ title }}
            </h2>
            <a :href="ctaHref" class="btn btn-primary mt-2">
              {{ ctaText }}
            </a>
          </div>
        </div>
      </div>

      <!-- Mobile Banner CTA -->
      <div
        class="relative w-full overflow-hidden rounded-[24px]"
        :class="
          isMobileMode
            ? 'block'
            : isDesktopOrTabletMode
              ? 'hidden'
              : 'block md:hidden'
        "
      >
        <img
          :src="mobileImage"
          :alt="imageAlt"
          loading="lazy"
          class="w-full h-auto block select-none"
        />

        <div class="absolute inset-x-0 top-0 p-7 flex flex-col items-start gap-2.5">
          <p class="text-neutral-800 leading-snug">
            {{ eyebrow }}
          </p>
          <h2 class="font-poppins font-medium text-black text-[22px] leading-[1.2] tracking-tight">
            {{ title }}
          </h2>
          <a :href="ctaHref" class="btn btn-primary mt-2">
            {{ ctaText }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
