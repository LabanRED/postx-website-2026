<script setup>
import { computed } from 'vue'
import defaultDesktopBanner from '../../images/postx-desktop-hero-banner.webp.webp'
import defaultMobileBanner from '../../images/postx-mobile-hero-banner.webp'
import { activeDevice } from '../../composables/useDevicePreview.js'

const props = defineProps({
  desktopImage: {
    type: String,
    default: defaultDesktopBanner,
  },
  mobileImage: {
    type: String,
    default: defaultMobileBanner,
  },
  imageAlt: {
    type: String,
    default: 'PostX Hero Banner',
  },
  title: {
    type: String,
    default: 'From First Click to Final Sale.',
  },
  highlightedTitle: {
    type: String,
    default: 'One Platform for Every Conversation.',
  },
  subtitle: {
    type: String,
    default: '',
  },
  ctaText: {
    type: String,
    default: 'Learn more',
  },
  ctaHref: {
    type: String,
    default: '#what-is-postx',
  },
  showCta: {
    type: Boolean,
    default: true,
  },
})

const desktopVisibilityClass = computed(() => {
  if (activeDevice.value === 'mobile') return 'hidden'
  if (activeDevice.value === 'desktop' || activeDevice.value === 'tablet') return 'block'
  return 'hidden md:block'
})

const mobileVisibilityClass = computed(() => {
  if (activeDevice.value === 'mobile') return 'block'
  if (activeDevice.value === 'desktop' || activeDevice.value === 'tablet') return 'hidden'
  return 'block md:hidden'
})
</script>

<template>
  <section class="w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-6 font-poppins">
    <div class="max-w-[1600px] mx-auto">
      <!-- Desktop & Tablet Banner -->
      <div :class="desktopVisibilityClass" class="relative w-full">
        <img
          :src="desktopImage"
          :alt="imageAlt"
          class="w-full h-auto block select-none"
        />

        <!-- Content Overlay positioned inside the rounded card area (below transparent top cutout) -->
        <div
          class="absolute inset-x-0 bottom-0 top-[14%] flex items-center px-8 md:px-12 lg:px-16 xl:px-20"
        >
          <div class="max-w-[54%] lg:max-w-[50%] flex flex-col items-start gap-4 lg:gap-6">
            <slot name="title">
              <h1
                class="font-poppins font-medium text-black text-2xl md:text-3xl lg:text-4xl xl:text-[46px] leading-[1.2] tracking-tight"
              >
                {{ title }}
                <span v-if="highlightedTitle" class="text-primary">
                  {{ ' ' + highlightedTitle }}
                </span>
              </h1>
            </slot>

            <p
              v-if="subtitle"
              class="text-sm lg:text-base text-neutral-700 font-normal max-w-lg"
            >
              {{ subtitle }}
            </p>

            <slot name="cta">
              <a
                v-if="showCta"
                :href="ctaHref"
                class="btn btn-primary"
              >
                {{ ctaText }}
              </a>
            </slot>
          </div>
        </div>
      </div>

      <!-- Mobile Banner (Poppins Medium 16px) -->
      <div :class="mobileVisibilityClass" class="relative w-full">
        <img
          :src="mobileImage"
          :alt="imageAlt"
          class="w-full h-auto block select-none"
        />

        <!-- Content Overlay positioned inside the rounded card area on the left -->
        <div
          class="absolute inset-x-0 bottom-0 top-[10%] flex items-center px-5"
        >
          <div class="max-w-[58%] flex flex-col items-start gap-3">
            <slot name="mobile-title">
              <h1
                class="font-poppins font-medium text-[16px] leading-[1.35] text-black tracking-tight"
              >
                {{ title }}
                <span v-if="highlightedTitle" class="text-primary">
                  {{ ' ' + highlightedTitle }}
                </span>
              </h1>
            </slot>

            <p
              v-if="subtitle"
              class="text-xs text-neutral-700 font-normal"
            >
              {{ subtitle }}
            </p>

            <slot name="mobile-cta">
              <a
                v-if="showCta"
                :href="ctaHref"
                class="btn btn-primary"
              >
                {{ ctaText }}
              </a>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
