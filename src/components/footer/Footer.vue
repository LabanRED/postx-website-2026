<script setup>
import postxLogo from '../../images/post-x-logo.svg'
import redLogo from '../../images/r-e-d-logo.svg'
import { activeDevice } from '../../composables/useDevicePreview.js'

const services = [
  { name: 'Unified inbox', href: '#unified-inbox' },
  { name: 'Posting', href: '#posting' },
  { name: 'Frames', href: '#frames' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'LiveChat AI', href: '#livechat-ai' },
]

const mobileApps = [
  { name: 'Google Play Store', href: '#google-play' },
  { name: 'Apple App Store', href: '#app-store' },
]
</script>

<template>
  <footer class="w-full px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 font-poppins">
    <div class="max-w-[1600px] mx-auto">
      <div
        class="bg-black text-white"
        :class="activeDevice === 'mobile' ? 'rounded-[28px] px-7 py-10' : activeDevice === 'tablet' ? 'rounded-[32px] px-12 py-12' : 'rounded-[28px] sm:rounded-[32px] px-7 py-10 sm:px-12 lg:px-24 lg:py-16'"
      >
        <div
          class="grid"
          :class="activeDevice === 'mobile' ? 'grid-cols-1 gap-10' : activeDevice === 'tablet' ? 'grid-cols-2 gap-10' : activeDevice === 'desktop' ? 'grid-cols-4 gap-12' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12'"
        >
          <!-- Column 1: Our services -->
          <div>
            <h2 class="text-2xl lg:text-[26px] font-medium text-white mb-4 lg:mb-5 tracking-tight">
              Our services
            </h2>
            <ul class="space-y-2.5 lg:space-y-3 text-sm lg:text-[13px] font-light text-white/90">
              <li v-for="service in services" :key="service.name">
                <a
                  :href="service.href"
                  class="hover:text-[#03A2BE] transition-colors"
                >
                  {{ service.name }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 2: Mobile app -->
          <div>
            <h2 class="text-2xl lg:text-[26px] font-medium text-white mb-4 lg:mb-5 tracking-tight">
              Mobile app
            </h2>
            <ul class="space-y-2.5 lg:space-y-3 text-sm lg:text-[13px] font-light text-white/90">
              <li v-for="app in mobileApps" :key="app.name">
                <a
                  :href="app.href"
                  class="hover:text-[#03A2BE] transition-colors"
                >
                  {{ app.name }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 3: Our socials -->
          <div>
            <h2 class="text-2xl lg:text-[26px] font-medium text-white mb-4 lg:mb-5 tracking-tight">
              Our socials
            </h2>
            <div class="flex items-center gap-4">
              <!-- Facebook -->
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                class="text-white hover:text-[#03A2BE] transition-colors"
              >
                <svg
                  class="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V6.65c0-1.05.29-1.73 1.76-1.73Z"
                  />
                </svg>
              </a>

              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                class="text-white hover:text-[#03A2BE] transition-colors"
              >
                <svg
                  class="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Column 4: Get in touch -->
          <div>
            <h2 class="text-2xl lg:text-[26px] font-medium text-white mb-4 lg:mb-5 tracking-tight">
              Get in touch
            </h2>
            <ul class="space-y-2.5 lg:space-y-3 text-sm lg:text-[13px] font-light text-white/90">
              <li>
                <a
                  href="#contact"
                  class="hover:text-[#03A2BE] transition-colors"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  class="hover:text-[#03A2BE] transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="tel:0100253560"
                  class="hover:text-[#03A2BE] transition-colors"
                >
                  Tel: &nbsp;010 025 3560
                </a>
              </li>
              <li class="leading-snug">
                Address: 3 Polo Cres,<br />
                Woodmead, Sandton,<br class="sm:hidden" />
                2191
              </li>
            </ul>

            <!-- PostX Logo + BY R-E-D -->
            <div class="mt-7 lg:mt-8">
              <a href="/" class="inline-block focus:outline-none">
                <img
                  :src="postxLogo"
                  alt="PostX"
                  class="h-10 lg:h-11 w-auto select-none"
                />
              </a>
              <div class="mt-2.5 flex items-center gap-1.5">
                <span class="text-[10px] tracking-[0.14em] text-white/80 uppercase font-medium">BY</span>
                <img
                  :src="redLogo"
                  alt="R-E-D"
                  class="h-2.5 w-auto select-none"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Copyright Notice -->
        <div
          class="mt-8 pt-2 text-xs font-light text-white/70"
          :class="activeDevice === 'mobile' || activeDevice === 'tablet' ? 'block' : activeDevice === 'desktop' ? 'hidden' : 'lg:hidden'"
        >
          <p>
            &copy; Copyright 2026 | PostX |
            <a
              href="#privacy-policy"
              class="underline hover:text-[#03A2BE] transition-colors"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
