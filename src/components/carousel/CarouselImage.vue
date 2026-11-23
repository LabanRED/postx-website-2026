<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { activeDevice } from '../../composables/useDevicePreview.js'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  titlePrefix: {
    type: String,
    default: '',
  },
  titleSuffix: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
})

const currentIndex = ref(0)
const trackRef = ref(null)
const maxDesktopIndex = ref(Math.max(0, props.items.length - 1))
const isAtEnd = ref(false)
let isProgrammaticScroll = false
let scrollLockTimer = null
let programmaticTargetLeft = 0

const isMobileMode = computed(() => activeDevice.value === 'mobile')
const isTabletMode = computed(() => activeDevice.value === 'tablet')
const isDesktopMode = computed(() => activeDevice.value === 'desktop')

const updateDesktopBounds = () => {
  const el = trackRef.value
  if (!el) return

  const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth)
  if (maxScroll <= 2) {
    maxDesktopIndex.value = 0
    isAtEnd.value = true
    return
  }

  // Find the first card index whose offsetLeft brings the last card into view
  const children = Array.from(el.children)
  let stopIndex = props.items.length - 1
  for (let i = 0; i < children.length; i++) {
    if (children[i].offsetLeft >= maxScroll - 2) {
      stopIndex = i
      break
    }
  }
  maxDesktopIndex.value = stopIndex

  if (currentIndex.value > stopIndex) {
    currentIndex.value = stopIndex
  }
  isAtEnd.value = el.scrollLeft >= maxScroll - 2 || currentIndex.value >= stopIndex
}

const handleTrackScroll = () => {
  const el = trackRef.value
  if (!el) return

  // Ignore intermediate smooth-scroll frames triggered by Prev/Next buttons
  if (isProgrammaticScroll) {
    if (Math.abs(el.scrollLeft - programmaticTargetLeft) <= 2) {
      isProgrammaticScroll = false
      if (scrollLockTimer) clearTimeout(scrollLockTimer)
    }
    return
  }

  const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth)
  isAtEnd.value = el.scrollLeft >= maxScroll - 2

  if (isAtEnd.value) {
    currentIndex.value = maxDesktopIndex.value
    return
  }

  const children = Array.from(el.children)
  let closest = 0
  let minDiff = Infinity
  for (let i = 0; i < children.length; i++) {
    const diff = Math.abs(children[i].offsetLeft - el.scrollLeft)
    if (diff < minDiff) {
      minDiff = diff
      closest = i
    }
  }
  currentIndex.value = Math.min(closest, maxDesktopIndex.value)
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1
    scrollToCard(currentIndex.value)
  }
}

const nextSlide = () => {
  if (isAtEnd.value || currentIndex.value >= maxDesktopIndex.value) return
  currentIndex.value += 1
  scrollToCard(currentIndex.value)
}

const prevMobileSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1
  }
}

const nextMobileSlide = () => {
  if (currentIndex.value < props.items.length - 1) {
    currentIndex.value += 1
  }
}

const scrollToCard = (index) => {
  const el = trackRef.value
  if (!el) return
  const card = el.children[index]
  if (card) {
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth)
    const targetLeft = index === 0 ? 0 : Math.min(card.offsetLeft, maxScroll)

    isProgrammaticScroll = true
    programmaticTargetLeft = targetLeft
    if (scrollLockTimer) clearTimeout(scrollLockTimer)
    scrollLockTimer = setTimeout(() => {
      isProgrammaticScroll = false
    }, 500)

    el.scrollTo({
      left: targetLeft,
      behavior: 'smooth',
    })
    isAtEnd.value = targetLeft >= maxScroll - 2 || index >= maxDesktopIndex.value
  }
}

let resizeObserver = null

onMounted(() => {
  nextTick(() => {
    updateDesktopBounds()
    if (trackRef.value && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => updateDesktopBounds())
      resizeObserver.observe(trackRef.value)
    }
  })
  window.addEventListener('resize', updateDesktopBounds)
})

onBeforeUnmount(() => {
  if (resizeObserver) resizeObserver.disconnect()
  window.removeEventListener('resize', updateDesktopBounds)
})

watch(activeDevice, () => {
  currentIndex.value = 0
  nextTick(() => {
    if (trackRef.value) trackRef.value.scrollLeft = 0
    updateDesktopBounds()
  })
})
</script>

<template>
  <div class="w-full font-poppins">
    <!-- Header Row: Heading + Subtitle on left, Desktop Controls on right -->
    <div
      class="flex justify-between gap-4"
      :class="
        isMobileMode
          ? 'flex-col items-start mb-6'
          : isTabletMode || isDesktopMode
            ? 'flex-row items-end mb-10'
            : 'flex-col items-start mb-6 md:flex-row md:items-end md:mb-10'
      "
    >
      <div class="max-w-2xl">
        <slot name="header">
          <h2
            class="font-poppins tracking-tight leading-[1.2]"
            :class="
              isMobileMode
                ? 'text-[24px] mb-2'
                : isTabletMode || isDesktopMode
                  ? 'text-3xl lg:text-[40px] mb-3'
                  : 'text-[24px] md:text-3xl lg:text-[40px] mb-2 md:mb-3'
            "
          >
            <span v-if="titlePrefix" class="text-primary font-light">
              {{ titlePrefix }}
            </span>
            <span v-if="titleSuffix" class="text-black font-medium">
              {{ ' ' + titleSuffix }}
            </span>
          </h2>
          <p v-if="subtitle" class="text-neutral-600 leading-relaxed">
            {{ subtitle }}
          </p>
        </slot>
      </div>

      <!-- Desktop / Tablet Controls (Top Right) -->
      <div
        class="items-center gap-3 shrink-0"
        :class="
          isMobileMode
            ? 'hidden'
            : isTabletMode || isDesktopMode
              ? 'flex'
              : 'hidden md:flex'
        "
      >
        <div class="border border-black rounded-full px-5 py-1.5 text-sm font-medium text-black select-none">
          {{ currentIndex + 1 }} - {{ items.length }}
        </div>

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
          :disabled="isAtEnd || currentIndex >= maxDesktopIndex"
          class="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer disabled:cursor-not-allowed"
          :class="
            isAtEnd || currentIndex >= maxDesktopIndex
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

    <!-- Mobile View: 1-card slider -->
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
            :key="`mobile-img-${item.title}`"
            class="w-full shrink-0 px-1 pb-4"
          >
            <div class="bg-white rounded-[30px] border border-neutral-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-5 h-full">
              <h3 class="font-poppins font-medium text-[24px] text-black leading-[1.25] tracking-tight">
                {{ item.title }}
              </h3>

              <img
                :src="item.image"
                :alt="item.title"
                loading="lazy"
                class="w-full aspect-[16/10] object-cover rounded-[20px] select-none"
              />

              <p class="leading-[1.65]">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Bottom Controls -->
      <div class="mt-4 px-1 flex items-center justify-between">
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
            @click="prevMobileSlide"
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
            @click="nextMobileSlide"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Desktop / Tablet Horizontal Scroll Carousel -->
    <div
      ref="trackRef"
      class="relative gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6"
      :class="
        isMobileMode
          ? 'hidden'
          : isTabletMode || isDesktopMode
            ? 'flex'
            : 'hidden md:flex'
      "
      @scroll.passive="handleTrackScroll"
    >
      <div
        v-for="item in items"
        :key="`desktop-img-${item.title}`"
        class="shrink-0 bg-white rounded-[30px] border border-neutral-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-7 flex flex-col gap-5"
        :class="
          isTabletMode
            ? 'w-[calc(50%-12px)]'
            : 'w-[300px] md:w-[320px] lg:w-[340px]'
        "
      >
        <h3 class="font-poppins font-medium text-[20px] lg:text-[22px] text-black leading-[1.25] tracking-tight min-h-[56px]">
          {{ item.title }}
        </h3>

        <img
          :src="item.image"
          :alt="item.title"
          loading="lazy"
          class="w-full aspect-[16/10] object-cover rounded-[20px] select-none"
        />

        <p class="md:text-[14px] text-neutral-700 leading-[1.65]">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
