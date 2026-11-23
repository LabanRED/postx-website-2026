<script setup>
import { ref } from 'vue'
import postxLogo from '../../images/post-x-logo.svg'
import { activeDevice, isLocal, setDevice } from '../../composables/useDevicePreview.js'

const isMobileMenuOpen = ref(false)
const isServicesOpen = ref(false)
const isMobileServicesOpen = ref(false)

const services = [
  { name: 'Unified inbox', href: '#unified-inbox' },
  { name: 'Posting', href: '#posting' },
  { name: 'Frames', href: '#frames' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'LiveChat AI', href: '#livechat-ai' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    isMobileServicesOpen.value = false
  }
}

const handleSelectDevice = (mode) => {
  setDevice(mode)
  if (mode === 'desktop') {
    isMobileMenuOpen.value = false
  }
}
</script>

<template>
  <header
    class="w-full font-poppins sticky top-0 z-50"
    :class="activeDevice === 'mobile' ? 'px-4 pt-4' : activeDevice === 'tablet' ? 'px-6 pt-5' : 'px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6'"
  >
    <div class="max-w-[1600px] mx-auto">
      <!-- Black Floating Capsule Container -->
      <nav
        aria-label="Main Navigation"
        class="bg-black text-white rounded-full border border-white/10 flex items-center justify-between shadow-2xl"
        :class="activeDevice === 'mobile' ? 'px-5 h-16' : activeDevice === 'tablet' ? 'px-6 h-16' : 'px-6 sm:px-8 lg:px-10 h-16 md:h-20 lg:h-24'"
      >
        <!-- Logo -->
        <a href="/" class="flex items-center group focus:outline-none shrink-0">
          <img
            :src="postxLogo"
            alt="PostX Logo"
            class="w-auto object-contain select-none opacity-90 group-hover:opacity-100 transition-opacity"
            :class="activeDevice === 'mobile' ? 'h-6' : activeDevice === 'tablet' ? 'h-7' : 'h-7 sm:h-8 md:h-9 lg:h-10'"
          />
        </a>

        <!-- Desktop Navigation Links (Responsive / Device-mode aware) -->
        <ul
          class="items-center gap-8 lg:gap-12 text-sm lg:text-base font-normal tracking-wide text-neutral-300"
          :class="activeDevice === 'mobile' || activeDevice === 'tablet' ? 'hidden' : (activeDevice === 'desktop' ? 'flex' : 'hidden md:flex')"
        >
          <!-- Services Dropdown -->
          <li
            class="relative"
            @mouseenter="isServicesOpen = true"
            @mouseleave="isServicesOpen = false"
          >
            <button
              type="button"
              class="flex items-center gap-1.5 hover:text-white transition-colors duration-200 py-2 cursor-pointer focus:outline-none"
              :aria-expanded="isServicesOpen"
              @click="isServicesOpen = !isServicesOpen"
            >
              <span>Services</span>
              <svg
                class="w-3.5 h-3.5 transition-transform duration-200"
                :class="{ 'rotate-180': isServicesOpen }"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <!-- Floating Sub Menu -->
            <transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 translate-y-1 scale-95"
              enter-to-class="opacity-100 translate-y-0 scale-100"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0 scale-100"
              leave-to-class="opacity-0 translate-y-1 scale-95"
            >
              <div
                v-if="isServicesOpen"
                class="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-48 z-50"
              >
                <ul class="bg-black/95 backdrop-blur-md border border-white/10 rounded-2xl py-2 shadow-2xl overflow-hidden">
                  <li v-for="service in services" :key="service.name">
                    <a
                      :href="service.href"
                      class="block px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-white/10 transition-colors duration-150"
                      @click="isServicesOpen = false"
                    >
                      {{ service.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </transition>
          </li>

          <li>
            <a
              href="#blogs"
              class="hover:text-white transition-colors duration-200"
            >
              Blogs
            </a>
          </li>

          <li>
            <a
              href="#about"
              class="hover:text-white transition-colors duration-200"
            >
              About
            </a>
          </li>
        </ul>

        <!-- Right Side: Local Dev Toggle + CTA + Hamburger -->
        <div class="flex items-center gap-3 sm:gap-4">
          <!-- LOCAL ONLY: Responsive Screen Mode Toggle -->
          <div
            v-if="isLocal"
            class="flex items-center bg-white/10 p-1 rounded-full border border-white/10 backdrop-blur-sm"
            role="group"
            aria-label="Local device simulator"
          >
            <!-- Desktop Button -->
            <button
              type="button"
              class="p-1.5 rounded-full transition-all duration-200 cursor-pointer focus:outline-none"
              :class="activeDevice === 'desktop' ? 'bg-[#00A5C5] text-white shadow-sm' : 'text-neutral-400 hover:text-white'"
              title="Desktop View (1280px)"
              aria-label="Switch to desktop view"
              @click="handleSelectDevice('desktop')"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </button>

            <!-- Tablet Button -->
            <button
              type="button"
              class="p-1.5 rounded-full transition-all duration-200 cursor-pointer focus:outline-none"
              :class="activeDevice === 'tablet' ? 'bg-[#00A5C5] text-white shadow-sm' : 'text-neutral-400 hover:text-white'"
              title="Tablet View (768px)"
              aria-label="Switch to tablet view"
              @click="handleSelectDevice('tablet')"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </button>

            <!-- Mobile Button -->
            <button
              type="button"
              class="p-1.5 rounded-full transition-all duration-200 cursor-pointer focus:outline-none"
              :class="activeDevice === 'mobile' ? 'bg-[#00A5C5] text-white shadow-sm' : 'text-neutral-400 hover:text-white'"
              title="Mobile View (390px)"
              aria-label="Switch to mobile view"
              @click="handleSelectDevice('mobile')"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </button>

            <!-- Reset / Auto Button -->
            <button
              v-if="activeDevice !== 'auto'"
              type="button"
              class="px-2 py-0.5 text-[11px] font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
              title="Reset to 100% responsive screen"
              @click="handleSelectDevice('auto')"
            >
              Auto
            </button>
          </div>

          <!-- Desktop CTA Button -->
          <div
            class="items-center"
            :class="activeDevice === 'mobile' || activeDevice === 'tablet' ? 'hidden' : (activeDevice === 'desktop' ? 'flex' : 'hidden md:flex')"
          >
            <a
              href="#contact"
              class="btn btn-secondary text-sm font-medium"
            >
              Contact us
            </a>
          </div>

          <!-- Mobile / Tablet Menu Button -->
          <button
            type="button"
            class="items-center justify-center rounded-full p-2 text-neutral-400 hover:bg-neutral-900 hover:text-white focus:outline-none transition-colors cursor-pointer"
            :class="activeDevice === 'desktop' ? 'hidden' : (activeDevice === 'mobile' || activeDevice === 'tablet' ? 'flex' : 'flex md:hidden')"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Toggle navigation menu"
            @click="toggleMobileMenu"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Dropdown Menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMobileMenuOpen"
          class="mt-3 mx-2 rounded-2xl border border-neutral-900 bg-black/95 backdrop-blur-md p-5 shadow-xl"
          :class="activeDevice === 'desktop' ? 'hidden' : (activeDevice === 'mobile' || activeDevice === 'tablet' ? 'block' : 'block md:hidden')"
        >
          <div class="space-y-2 flex flex-col">
            <!-- Mobile Services Collapsible -->
            <div>
              <button
                type="button"
                class="w-full rounded-lg px-3 py-2 text-base font-normal text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-between cursor-pointer"
                @click="isMobileServicesOpen = !isMobileServicesOpen"
              >
                <span>Services</span>
                <svg
                  class="w-4 h-4 transition-transform duration-200 text-neutral-400"
                  :class="{ 'rotate-180 text-white': isMobileServicesOpen }"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                v-if="isMobileServicesOpen"
                class="mt-1 ml-4 pl-3 border-l border-neutral-800 space-y-1.5"
              >
                <a
                  v-for="service in services"
                  :key="service.name"
                  :href="service.href"
                  class="block py-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
                  @click="isMobileMenuOpen = false"
                >
                  {{ service.name }}
                </a>
              </div>
            </div>

            <a
              href="#blogs"
              class="rounded-lg px-3 py-2 text-base font-normal text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors"
              @click="isMobileMenuOpen = false"
            >
              Blogs
            </a>

            <a
              href="#about"
              class="rounded-lg px-3 py-2 text-base font-normal text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors"
              @click="isMobileMenuOpen = false"
            >
              About
            </a>

            <div class="pt-3 border-t border-neutral-900 mt-2">
              <a
                href="#contact"
                class="btn btn-secondary w-full text-center"
                @click="isMobileMenuOpen = false"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
