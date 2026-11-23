<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import Header from './components/header/Header.vue'
import HomePage from './pages/HomePage.vue'
import UnifiedInboxPage from './pages/UnifiedInboxPage.vue'
import PostingPage from './pages/PostingPage.vue'
import FramesPage from './pages/FramesPage.vue'
import ReviewsPage from './pages/ReviewsPage.vue'
import LiveChatAIPage from './pages/LiveChatAIPage.vue'
import Footer from './components/footer/Footer.vue'
import { activeDevice } from './composables/useDevicePreview.js'

const pageMap = {
  '#unified-inbox': UnifiedInboxPage,
  '#posting': PostingPage,
  '#frames': FramesPage,
  '#reviews': ReviewsPage,
  '#livechat-ai': LiveChatAIPage,
}

const currentHash = ref(typeof window !== 'undefined' ? window.location.hash : '')
const scrollContainerRef = ref(null)
const isDesktopViewport = ref(
  typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : true
)

let desktopMediaQuery = null
const handleViewportChange = (e) => {
  isDesktopViewport.value = e.matches
}

const syncHash = () => {
  currentHash.value = (window.location.hash || '').toLowerCase()
  if (pageMap[currentHash.value]) {
    if (isMobilePreview.value && scrollContainerRef.value) {
      scrollContainerRef.value.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}

onMounted(() => {
  syncHash()
  window.addEventListener('hashchange', syncHash)
  desktopMediaQuery = window.matchMedia('(min-width: 768px)')
  isDesktopViewport.value = desktopMediaQuery.matches
  desktopMediaQuery.addEventListener('change', handleViewportChange)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', syncHash)
  desktopMediaQuery?.removeEventListener('change', handleViewportChange)
})

const activePage = computed(() => pageMap[currentHash.value] || HomePage)
const isMobilePreview = computed(
  () => activeDevice.value === 'mobile' && isDesktopViewport.value
)

const titaniumFrameStyle = computed(() =>
  isMobilePreview.value
    ? {
        background:
          'linear-gradient(145deg, #e4e4e7 0%, #71717a 28%, #27272a 55%, #a1a1aa 82%, #e4e4e7 100%)',
      }
    : undefined
)
</script>

<template>
  <div
    class="w-full flex flex-col items-center transition-colors duration-300 font-poppins selection:bg-cyan-500/20 selection:text-cyan-900 antialiased"
    :class="
      isMobilePreview
        ? 'h-dvh overflow-hidden justify-center bg-neutral-200 p-3 sm:p-5'
        : 'min-h-screen bg-white overflow-x-clip'
    "
  >
    <!-- iPhone 17 Pro Titanium Chassis (Mobile Preview) / Full-Width Wrapper -->
    <div
      class="relative flex flex-col transition-all duration-300"
      :class="
        isMobilePreview
          ? 'w-[min(411px,calc(100vw-24px))] h-[min(868px,calc(100dvh-24px))] sm:h-[min(868px,calc(100dvh-40px))] rounded-[54px] p-[3px] shadow-[0_28px_70px_rgba(0,0,0,0.32),0_0_0_1px_rgba(0,0,0,0.12)]'
          : 'w-full min-h-screen'
      "
      :style="titaniumFrameStyle"
    >
      <!-- Side Hardware Buttons (iPhone 17 Pro) -->
      <template v-if="isMobilePreview">
        <span
          aria-hidden="true"
          class="absolute -left-[3px] top-[118px] w-[3px] h-[28px] rounded-l-sm bg-gradient-to-b from-neutral-300 via-neutral-600 to-neutral-400"
        />
        <span
          aria-hidden="true"
          class="absolute -left-[3px] top-[166px] w-[3px] h-[48px] rounded-l-sm bg-gradient-to-b from-neutral-300 via-neutral-600 to-neutral-400"
        />
        <span
          aria-hidden="true"
          class="absolute -left-[3px] top-[224px] w-[3px] h-[48px] rounded-l-sm bg-gradient-to-b from-neutral-300 via-neutral-600 to-neutral-400"
        />
        <span
          aria-hidden="true"
          class="absolute -right-[3px] top-[184px] w-[3px] h-[72px] rounded-r-sm bg-gradient-to-b from-neutral-300 via-neutral-600 to-neutral-400"
        />
      </template>

      <!-- Ultra-Thin Black Inner Bezel -->
      <div
        class="flex flex-col transition-all duration-300"
        :class="
          isMobilePreview
            ? 'rounded-[51px] bg-[#0b0b0c] p-[7px] flex-1 min-h-0'
            : 'w-full min-h-screen'
        "
      >
        <!-- Inner Display Screen -->
        <div
          class="bg-white flex flex-col relative transition-all duration-300"
          :class="
            isMobilePreview
              ? 'rounded-[44px] flex-1 min-h-0 overflow-hidden'
              : 'w-full min-h-screen'
          "
        >
          <!-- iPhone 17 Pro Dynamic Island Safe Area -->
          <div
            v-if="isMobilePreview"
            aria-hidden="true"
            class="h-[44px] shrink-0 bg-white flex items-center justify-center relative z-[60] select-none"
          >
            <div class="w-[104px] h-[28px] bg-black rounded-full flex items-center justify-end pr-2.5 shadow-inner">
              <span class="w-[11px] h-[11px] rounded-full bg-[#0f172a] ring-1 ring-white/10 flex items-center justify-center">
                <span class="w-[5px] h-[5px] rounded-full bg-cyan-400/40" />
              </span>
            </div>
          </div>

          <!-- Scrollable Website Viewport -->
          <div
            ref="scrollContainerRef"
            class="bg-white flex flex-col relative"
            :class="
              isMobilePreview
                ? 'flex-1 min-h-0 overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
                : 'w-full min-h-screen'
            "
            :data-device="activeDevice"
          >
            <!-- 1. Floating Pill Navbar -->
            <Header />

            <!-- 2. Main Page Content Container -->
            <main class="flex-grow">
              <component :is="activePage" />
            </main>

            <!-- 3. Rounded Dark Footer -->
            <Footer />
          </div>

          <!-- iPhone Home Indicator Safe Area -->
          <div
            v-if="isMobilePreview"
            aria-hidden="true"
            class="h-[20px] shrink-0 bg-white flex items-center justify-center select-none"
          >
            <span class="w-[118px] h-[4px] rounded-full bg-neutral-900/80" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
