<script setup>
import { computed, ref } from 'vue'
import { activeDevice } from '../../composables/useDevicePreview.js'

const props = defineProps({
  eyebrow: {
    type: String,
    default: 'Why us?',
  },
  title: {
    type: String,
    default: 'Frequently asked questions',
  },
  cardTitle: {
    type: String,
    default: 'Still Have a Question?',
  },
  ctaText: {
    type: String,
    default: 'schedule a meeting today',
  },
  ctaHref: {
    type: String,
    default: '#contact',
  },
  items: {
    type: Array,
    default: () => [
      {
        question: 'What is PostX?',
        answer:
          'PostX is an all-in-one customer conversation, social publishing, and lead management platform built in-house by R-E-D—purpose-built for motor dealerships and adaptable to any customer-facing business.',
      },
      {
        question: 'Does PostX use AI?',
        answer:
          'Yes. PostX includes a 24/7 AI Assistant that replies to incoming WhatsApp enquiries in seconds, qualifies leads, shares your catalogue, polishes captions, and moderates comments—handing over seamlessly to your team when needed.',
      },
      {
        question: 'Which channels does PostX Support?',
        answer:
          'PostX unifies Official Business WhatsApp, Facebook, Instagram, Google Business Profile, live web chat, and online reviews into a single shared team inbox.',
      },
      {
        question: 'Is there a PostX mobile app?',
        answer:
          'Yes. The PostX mobile app is available on both the Google Play Store and Apple App Store so your team can reply to chats, approve content, and capture framed delivery photos from anywhere.',
      },
      {
        question: 'Can I control who sees what?',
        answer:
          'Yes. Role-based permissions and multi-dealership brand structures let you control exactly what dealership staff, agencies, and regional managers can view, create, and approve.',
      },
      {
        question: 'Can PostX integrate with our CRM?',
        answer:
          'Yes. Qualified leads and customer conversation details can integrate directly into your CRM or Lead Management System (LMS) so no enquiry slips through.',
      },
      {
        question: 'How quickly can we start?',
        answer:
          'Our in-house team handles personalised onboarding sized to your team, locations, and goals—getting your channels connected and your team live quickly.',
      },
      {
        question: 'What reporting do I get?',
        answer:
          'You get real-time analytics dashboards covering response times, SLA targets, team activity, conversation volumes, and campaign lead performance.',
      },
      {
        question: 'Do you work with businesses in my industry?',
        answer:
          'While purpose-built and battle-tested across 500+ motor dealerships, PostX is flexible enough for any business that manages customer conversations and leads.',
      },
      {
        question: 'What makes R-E-D different?',
        answer:
          'PostX is 100% built, owned, maintained, and supported in-house by R-E-D—meaning direct access to the people who build it, unlimited users, and continuous new features.',
      },
    ],
  },
})

const openIndex = ref(null)

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const isMobileMode = computed(() => activeDevice.value === 'mobile')
const isDesktopOrTabletMode = computed(
  () => activeDevice.value === 'desktop' || activeDevice.value === 'tablet'
)
</script>

<template>
  <section
    id="faq"
    class="w-full font-poppins"
    :class="
      isMobileMode
        ? 'px-5 py-10'
        : isDesktopOrTabletMode
          ? 'px-4 sm:px-6 lg:px-8 py-16 lg:py-24'
          : 'px-5 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-24'
    "
  >
    <div class="max-w-[1600px] mx-auto">
      <div
        class="grid items-start"
        :class="
          isMobileMode
            ? 'grid-cols-1 gap-8'
            : isDesktopOrTabletMode
              ? 'grid-cols-12 gap-10 lg:gap-16'
              : 'grid-cols-1 gap-8 md:grid-cols-12 md:gap-10 lg:gap-16'
        "
      >
        <!-- Left Column: Section Heading + Still Have a Question Card -->
        <div
          class="flex flex-col items-start text-left"
          :class="
            isMobileMode
              ? ''
              : isDesktopOrTabletMode
                ? 'col-span-5 md:sticky md:top-32 lg:top-36'
                : 'md:col-span-5 md:sticky md:top-32 lg:top-36'
          "
        >
          <p class="!text-primary font-medium mb-1">
            {{ eyebrow }}
          </p>
          <h2
            class="font-poppins font-normal text-black tracking-tight leading-[1.2]"
            :class="
              isMobileMode
                ? 'text-[22px] mb-6'
                : isDesktopOrTabletMode
                  ? 'text-3xl lg:text-[38px] mb-8'
                  : 'text-[22px] md:text-3xl lg:text-[38px] mb-6 md:mb-8'
            "
          >
            {{ title }}
          </h2>

          <!-- Still Have a Question Card -->
          <div
            class="w-full rounded-[30px] border border-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col items-start text-left"
            style="background: linear-gradient(180deg, rgba(88, 228, 255, 0.08) 0%, rgba(88, 228, 255, 0.18) 100%);"
            :class="
              isMobileMode
                ? 'p-7 gap-4'
                : isDesktopOrTabletMode
                  ? 'p-8 lg:p-10 gap-4'
                  : 'p-7 md:p-8 lg:p-10 gap-4'
            "
          >
            <h3 class="font-poppins font-medium text-[22px] lg:text-[26px] text-black leading-[1.25] tracking-tight">
              {{ cardTitle }}
            </h3>

            <p class="leading-[1.65] text-neutral-800">
              If you’d like to know more about how R<span class="text-primary">-</span>E<span class="text-primary">-</span>D
              can help your business generate more leads.
            </p>

            <a
              :href="ctaHref"
              class="btn btn-primary mt-2"
              :class="
                isMobileMode
                  ? 'w-full'
                  : isDesktopOrTabletMode
                    ? 'w-auto'
                    : 'w-full md:w-auto'
              "
            >
              {{ ctaText }}
            </a>
          </div>
        </div>

        <!-- Right Column: Accordion List -->
        <div
          class="w-full flex flex-col gap-3"
          :class="
            isMobileMode
              ? ''
              : isDesktopOrTabletMode
                ? 'col-span-7'
                : 'md:col-span-7'
          "
        >
          <div
            v-for="(item, index) in items"
            :key="item.question"
            class="bg-neutral-100/80 hover:bg-neutral-100 rounded-[16px] transition-colors overflow-hidden"
          >
            <button
              type="button"
              class="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
              :aria-expanded="openIndex === index"
              @click="toggleFaq(index)"
            >
              <span class="font-poppins font-medium text-[14px] md:text-[15px] text-black leading-snug">
                {{ item.question }}
              </span>

              <svg
                class="w-4 h-4 text-primary shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180': openIndex === index }"
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

            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <div
                v-if="openIndex === index"
                class="px-5 pb-4 pt-0"
              >
                <p class="text-neutral-700 leading-[1.65]">
                  {{ item.answer }}
                </p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
