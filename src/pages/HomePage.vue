<script setup>
import { computed } from 'vue'
import HeroBanner from '../components/banner/HeroBanner.vue'
import BrandLogos from '../components/brand-logos/BrandLogos.vue'
import GradientCarousel from '../components/carousel/GradientCarousel.vue'
import CarouselImage from '../components/carousel/CarouselImage.vue'
import BodyCTA from '../components/cta/BodyCTA.vue'
import CarouselIcons from '../components/carousel/CarouselIcons.vue'
import DefaultCarousel from '../components/carousel/DefaultCarousel.vue'
import IconServices from '../components/services/IconServices.vue'
import FutureFeature from '../components/features/FutureFeature.vue'
import FAQ from '../components/faq/FAQ.vue'
import FooterCTA from '../components/cta/FooterCTA.vue'
import builtOwnDevelopersIcon from '../images/built-own-developers-icon.svg'
import supportIcon from '../images/support-icon.svg'
import newFeaturesIcon from '../images/new-features-icon.svg'
import creatingPostImg from '../images/r-e-d-postx-creating-post.HGV-dKzG.webp'
import polishAiImg from '../images/r-e-d-postx-polish-with-ai-caption-post.BF6Qu2eD.webp'
import brandedFrameImg from '../images/vw-postx-custom-post-frame.2UDDhXGl.webp'
import approveLiveImg from '../images/vw-postx-approve-before-goes-live-post.BE_QmHEG.webp'
import controlledAccessImg from '../images/vw-postx-controlled-access-post.CqR5eiUV.webp'
import aiModerationImg from '../images/postx-ai-moderation-post.BIKq5GEB.webp'
import fullAuditTrailImg from '../images/postx-full-audit-trail.WFDUWwrZ.webp'
import mobileAppMockupImg from '../images/postx-mobile-login-screen-mockup.webp'
import googlePlayBadge from '../images/postx-getitongoogleplay_badge.webp'
import appStoreBadge from '../images/postx-download-on-the-appstore_badge.webp'
import intelligentConversationsIcon from '../images/intelligent-coversations.svg'
import leadQualificationIcon from '../images/lead-qualitification-icon.svg'
import teamFocusIcon from '../images/team-focus-conversation.svg'
import automateJourneyDesktopImg from '../images/automate-customer-journey-desktop-image.webp'
import automateJourneyMobileImg from '../images/automate-customer-journey-mobile-image.webp'
import captureLeadImg from '../images/capture-lead.webp'
import serviceBookingImg from '../images/customer-makes-service-booking .webp'
import serviceReminderImg from '../images/automate-service-reminder.webp'
import recycleLeadsImg from '../images/recycle-leads.webp'
import secureDocSharingImg from '../images/secure-document-sharing.webp'
import internalCommsImg from '../images/internal-communication-tool.webp'
import builtNotLicensedIcon from '../images/built-not-licensed.svg'
import inhouseDevelopersIcon from '../images/inhouse-developers-icon.svg'
import unlimitedUsersIcon from '../images/unlimited-users-icon.svg'
import inhouseSupportTeamIcon from '../images/in-house-support-team.svg'
import handHoldingLaptopImg from '../images/hand-holding-laptop.webp'
import clientsWhoTrustImg from '../images/clients-who-trust-postx.webp'
import { activeDevice } from '../composables/useDevicePreview.js'

const isMobileMode = computed(() => activeDevice.value === 'mobile')
const isDesktopOrTabletMode = computed(
  () => activeDevice.value === 'desktop' || activeDevice.value === 'tablet'
)

const proprietaryFeatures = [
  {
    icon: builtOwnDevelopersIcon,
    alt: 'Built by our own developers',
    text: 'Built by our own developers',
  },
  {
    icon: supportIcon,
    alt: 'Support from the people who build it',
    text: 'Support from the people who build it',
  },
  {
    icon: newFeaturesIcon,
    alt: 'New features shipped continuously',
    text: 'New features shipped continuously',
  },
]

const pillars = [
  {
    id: 'create',
    title: 'Create',
    description: 'Plan, polish, approve and publish from one place.',
    bullets: [
      'Omni-channel social posting & scheduling',
      'Brand frames & delivery photos',
      'Content approval flow',
      'AI caption polisher',
      'AI comment moderation',
      'Controlled Access',
    ],
  },
  {
    id: 'connect',
    title: 'Connect',
    description: 'From ad click to lead system, in one connected pipeline.',
    bullets: [
      'Click-to-WhatsApp ads',
      'Official business WhatsApp',
      'Lead system integration',
      'Google Review Booster',
      'WhatsApp catalogue',
      'Offline Activations & Events',
    ],
  },
  {
    id: 'comms',
    title: 'Comms',
    description: 'Talk to customers on the platform they prefer, with fewer calls.',
    bullets: [
      'Omni-channel team inbox',
      '24/7 AI lead assistant',
      'Bulk WhatsApp messaging & Campaigns',
      'Media-rich messages & templates',
      'Internal Communication tool',
    ],
  },
  {
    id: 'control',
    title: 'Control',
    description: 'The right access for every user. The full picture for managers.',
    bullets: [
      'Role-based access',
      'Reporting Dashboard',
      'Manager view over conversations',
      'Smart routing & SLA alerts',
      'Multi-dealership/Brand structure',
      'Leads integrated to CRM/LMS',
    ],
  },
]

const contentSlides = [
  {
    title: 'Create once, post everywhere',
    image: creatingPostImg,
    description:
      'Pick your channels, write a caption, upload images or video and see a live preview. Post templates with pre-set captions speed up the posts you make often.',
  },
  {
    title: 'Polish with AI.',
    image: polishAiImg,
    description:
      'The AI caption polisher fixes spelling, grammar and punctuation before anything goes out.',
  },
  {
    title: 'A branded frame on every photo.',
    image: brandedFrameImg,
    description:
      'Delivery and handover posts let your team photograph a happy customer, add your frame and request a Google review in the same step. The customer gives consent with a one-time PIN (OTP) before anything is published.',
  },
  {
    title: 'Approve before it goes live.',
    image: approveLiveImg,
    description:
      'Managers approve or reject the image, caption and schedule separately, and send feedback in one click. Posts can also require customer approval.',
  },
  {
    title: 'Controlled access.',
    image: controlledAccessImg,
    description:
      'Set role-based permissions for dealership staff, agencies, and regional managers so everyone creates safely within brand guidelines.',
  },
  {
    title: 'AI moderation on Facebook.',
    image: aiModerationImg,
    description:
      'PostX’s moderation AI responds to customer comments on your Facebook page, so nobody is left waiting for an answer.',
  },
  {
    title: 'A full audit trail.',
    image: fullAuditTrailImg,
    description:
      'See who created, edited and approved every post, and when.',
  },
]

const mobileAppBullets = [
  'Reply to, transfer and close chats from anywhere',
  'Action your leads and customer chats after hours',
  'Set your online status, so out-of-office replies take over when you’re away',
  'Take a photo, add your frame and send it for approval',
  'Review and approve content with one tap',
]

const aiAssistantCards = [
  {
    icon: intelligentConversationsIcon,
    title: 'Replies in seconds, day or night.',
    description:
      'The PostX AI Assistant greets every new WhatsApp enquiry instantly, works out what the customer needs and captures their details. Qualified leads go straight into your lead management system, even after hours.',
  },
  {
    icon: leadQualificationIcon,
    title: 'Trained on your business.',
    description:
      'It’s set up with your brand, stock, pricing, FAQs and processes, and it can show customers your WhatsApp catalogue right in the chat. Let it book appointments and follow up on leads that have gone quiet.',
  },
  {
    icon: teamFocusIcon,
    title: 'Hands over at the right moment.',
    description:
      'When a customer is ready, the chat moves to the right person with the full history, so nobody has to ask the same question twice. The right balance between AI and your people is what makes it work.',
  },
]

const leadCaptureSlides = [
  {
    image: captureLeadImg,
    title: 'Capture Every Lead The Moment They Reach Out',
    description:
      'Your next buyer just sent a WhatsApp message from a campaign on Google. PostX’s AI assistant responds in seconds - greeting the customer, answering stock questions, and capturing their details before your competitor even sees the notification. No lead falls through the cracks, day or night.',
    ctaText: 'Enquire Today',
    ctaHref: '#contact',
  },
  {
    image: serviceBookingImg,
    title: 'Customer Makes a Service Booking',
    description:
      'Customers can book their next vehicle service directly through WhatsApp in seconds. PostX captures vehicle details, mileage, VIN, and preferred dates automatically—syncing straight into your workshop schedule.',
    ctaText: 'Enquire Today',
    ctaHref: '#contact',
  },
  {
    image: serviceReminderImg,
    title: 'Automate Service Reminders & Follow-Ups',
    description:
      'Keep your workshop bays full with automated WhatsApp reminders for upcoming services, allowing customers to accept, reschedule, or book directly in chat.',
    ctaText: 'Enquire Today',
    ctaHref: '#contact',
  },
  {
    image: recycleLeadsImg,
    title: 'Recycle & Re-Engage Cold Leads',
    description:
      'Automatically follow up with quiet enquiries and past prospects via WhatsApp campaigns and AI-assisted check-ins, turning missed opportunities into booked test drives and deals.',
    ctaText: 'Enquire Today',
    ctaHref: '#contact',
  },
  {
    image: secureDocSharingImg,
    title: 'Secure Document Sharing in Chat',
    description:
      'Request and exchange F&I documents, IDs, driver’s licences, and quotes safely inside the conversation with full audit tracking and instant team visibility.',
    ctaText: 'Enquire Today',
    ctaHref: '#contact',
  },
  {
    image: internalCommsImg,
    title: 'Internal Communication Tool',
    description:
      'Assign chats, escalate texts, transfer conversations, get your entire team connected to the customer and journey. Receptionists, accounts, managers and more...',
  },
]

const businessSetupServices = [
  {
    icon: builtNotLicensedIcon,
    title: 'Built, not licensed',
    description:
      'Build from the ground up for dealer workflows and your local systems & compliance.',
  },
  {
    icon: inhouseDevelopersIcon,
    title: 'Developed 100% In-house',
    description:
      'No Third-party dependencies. Every feature is built, owned, and evolved by our team.',
  },
  {
    icon: unlimitedUsersIcon,
    title: 'Unlimited Users',
    description:
      'No per-seat pricing games. Your whole team gets access - sales, service, F&I, parts, everyone.',
  },
  {
    icon: inhouseSupportTeamIcon,
    title: 'In-house Support team',
    description:
      'Direct access to the people who built it, No tickets disappearing into a vendor’s queue',
  },
]
</script>

<template>
  <div>
    <!-- Hero Banner (Reusable Component) -->
    <HeroBanner />

    <!-- What is PostX? Section -->
    <section
      id="what-is-postx"
      class="w-full font-poppins"
      :class="
        isMobileMode
          ? 'px-5 py-8'
          : isDesktopOrTabletMode
            ? 'px-6 lg:px-8 py-12 lg:py-16'
            : 'px-5 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16'
      "
    >
      <div class="max-w-3xl mx-auto flex flex-col items-center">
        <h2
          class="font-poppins font-medium text-black text-center tracking-tight"
          :class="
            isMobileMode
              ? 'text-[22px] mb-4'
              : isDesktopOrTabletMode
                ? 'text-3xl lg:text-[40px] mb-5'
                : 'text-[22px] md:text-3xl lg:text-[40px] mb-4 md:mb-5'
          "
        >
          What is Post<span class="text-primary">X</span>?
        </h2>

        <p
          class="leading-[1.7] w-full"
          :class="
            isMobileMode
              ? 'text-left mb-7'
              : isDesktopOrTabletMode
                ? 'text-center mb-8'
                : 'text-left md:text-center mb-7 md:mb-8'
          "
        >
          PostX unifies WhatsApp, social media, live chat, and AI-powered assistants
          into a single command centre - purpose-built for motor dealerships and
          beyond. Publish content, manage every message, generate leads, and turn
          conversations into sales.
        </p>

        <a
          href="#contact"
          class="btn btn-primary"
          :class="
            isMobileMode
              ? 'w-full'
              : isDesktopOrTabletMode
                ? 'w-auto'
                : 'w-full md:w-auto'
          "
        >
          Book Your Demo
        </a>
      </div>
    </section>

    <!-- Proprietary R-E-D Product Section -->
    <section
      class="w-full font-poppins"
      :class="
        isMobileMode
          ? 'px-4 pt-2 pb-10'
          : isDesktopOrTabletMode
            ? 'px-4 sm:px-6 lg:px-8 pt-2 pb-14'
            : 'px-4 sm:px-6 lg:px-8 pt-2 pb-10 md:pb-14'
      "
    >
      <div class="max-w-[1600px] mx-auto">
        <div
          class="rounded-[30px] border border-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col items-center"
          style="background: linear-gradient(180deg, #FFFFFF 0%, rgba(88, 228, 255, 0.1) 100%);"
          :class="
            isMobileMode
              ? 'p-[30px] gap-[30px]'
              : isDesktopOrTabletMode
                ? 'px-8 py-8 lg:px-14 lg:py-9 gap-6'
                : 'p-[30px] gap-[30px] md:px-8 md:py-8 lg:px-14 lg:py-9 md:gap-6'
          "
        >
          <h2
            class="font-poppins font-medium text-black text-center tracking-tight"
            :class="
              isMobileMode
                ? 'text-[18px] leading-[1.4]'
                : isDesktopOrTabletMode
                  ? 'text-xl lg:text-[23px] leading-[1.35]'
                  : 'text-[18px] leading-[1.4] md:text-xl lg:text-[23px] md:leading-[1.35]'
            "
          >
            <template v-if="isMobileMode">
              <span class="text-primary">A proprietary</span> R<span class="text-primary">-</span>E<span class="text-primary">-</span>D
              <span class="text-primary">product.</span> Built, developed, maintained and supported in-house.
            </template>
            <template v-else-if="isDesktopOrTabletMode">
              <span class="text-primary">A proprietary R-E-D product.</span>
              Built, developed, maintained and supported in-house.
            </template>
            <template v-else>
              <span class="md:hidden">
                <span class="text-primary">A proprietary</span> R<span class="text-primary">-</span>E<span class="text-primary">-</span>D
                <span class="text-primary">product.</span> Built, developed, maintained and supported in-house.
              </span>
              <span class="hidden md:inline">
                <span class="text-primary">A proprietary R-E-D product.</span>
                Built, developed, maintained and supported in-house.
              </span>
            </template>
          </h2>

          <div
            class="w-full"
            :class="
              isMobileMode
                ? 'flex flex-col gap-5'
                : isDesktopOrTabletMode
                  ? 'flex flex-wrap items-center justify-center gap-6 lg:gap-12'
                  : 'flex flex-col gap-5 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-6 lg:gap-12'
            "
          >
            <div
              v-for="feature in proprietaryFeatures"
              :key="feature.text"
              class="flex flex-row items-center text-left"
              :class="
                isMobileMode
                  ? 'gap-4'
                  : isDesktopOrTabletMode
                    ? 'gap-3'
                    : 'gap-4 md:gap-3'
              "
            >
              <img
                :src="feature.icon"
                :alt="feature.alt"
                class="shrink-0 select-none"
                :class="
                  isMobileMode
                    ? 'w-[57px] h-[57px]'
                    : isDesktopOrTabletMode
                      ? 'w-10 h-10'
                      : 'w-[57px] h-[57px] md:w-10 md:h-10'
                "
              />
              <p
                class="leading-snug"
                :class="
                  isMobileMode
                    ? ''
                    : isDesktopOrTabletMode
                      ? 'md:text-[14px]'
                      : 'md:text-[14px]'
                "
              >
                {{ feature.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted by 500+ Dealers Brand Logos -->
    <BrandLogos />

    <!-- Take Control of Every Conversation Section -->
    <section
      id="take-control"
      class="w-full font-poppins"
      :class="
        isMobileMode
          ? 'px-5 py-8'
          : isDesktopOrTabletMode
            ? 'px-4 sm:px-6 lg:px-8 py-14 lg:py-20'
            : 'px-5 sm:px-6 lg:px-8 py-8 md:py-14 lg:py-20'
      "
    >
      <div class="max-w-[1600px] mx-auto">
        <div
          class="mx-auto grid items-start text-left"
          :class="
            isMobileMode
              ? 'w-full grid-cols-1 gap-5'
              : isDesktopOrTabletMode
                ? 'w-3/4 grid-cols-2 gap-12 lg:gap-20'
                : 'w-full md:w-3/4 grid-cols-1 gap-5 md:grid-cols-2 md:gap-12 lg:gap-20'
          "
        >
          <!-- Left Column: Heading + Cyan Subheading -->
          <div class="flex flex-col items-start">
            <h2
              class="font-poppins font-medium text-black tracking-tight leading-[1.2]"
              :class="
                isMobileMode
                  ? 'text-[22px] mb-3'
                  : isDesktopOrTabletMode
                    ? 'text-3xl lg:text-[42px] mb-4'
                    : 'text-[22px] md:text-3xl lg:text-[42px] mb-3 md:mb-4'
              "
            >
              Take Control Of<br />
              Every Conversation.
            </h2>

            <p
              class="!text-primary leading-[1.45]"
              :class="
                isMobileMode
                  ? ''
                  : isDesktopOrTabletMode
                    ? 'md:text-[20px] lg:text-[22px] font-light max-w-md'
                    : 'md:text-[20px] lg:text-[22px] md:font-light md:max-w-md'
              "
            >
              Your customers choose the channel. PostX makes sure your team never misses the message.
            </p>
          </div>

          <!-- Right Column: Body Copy -->
          <div class="flex items-start">
            <p class="leading-[1.8] max-w-xl">
              Every enquiry, comment, review and chat lands in one shared inbox.
              Each one is routed to the right person, tracked against your response
              targets and kept on record. Add an optional AI assistant to reply
              instantly, answer routine questions and capture details, day or
              night. Your team replies faster, your managers see everything, and no
              lead slips through.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- One Platform. Four Pillars. Section -->
    <section
      id="four-pillars"
      class="w-full font-poppins"
      :class="
        isMobileMode
          ? 'px-4 py-8'
          : isDesktopOrTabletMode
            ? 'px-4 sm:px-6 lg:px-8 py-14 lg:py-20'
            : 'px-4 sm:px-6 lg:px-8 py-8 md:py-14 lg:py-20'
      "
    >
      <div class="max-w-[1600px] mx-auto flex flex-col items-center">
        <!-- Heading -->
        <h2
          class="font-poppins text-center tracking-tight leading-[1.25]"
          :class="
            isMobileMode
              ? 'text-[24px] mb-3'
              : isDesktopOrTabletMode
                ? 'text-3xl lg:text-[42px] mb-4'
                : 'text-[24px] md:text-3xl lg:text-[42px] mb-3 md:mb-4'
          "
        >
          <span
            class="text-primary font-light"
            :class="isMobileMode ? 'block font-medium' : isDesktopOrTabletMode ? 'inline' : 'block md:inline font-medium md:font-light'"
          >
            One Platform.
          </span>
          <span
            class="text-black font-medium"
            :class="isMobileMode ? 'block' : isDesktopOrTabletMode ? 'inline ml-2' : 'block md:inline md:ml-2'"
          >
            Four Pillars.
          </span>
        </h2>

        <!-- Subheading -->
        <p
          class="text-center max-w-2xl leading-[1.65]"
          :class="
            isMobileMode
              ? 'mb-8'
              : isDesktopOrTabletMode
                ? 'mb-12'
                : 'mb-8 md:mb-12'
          "
        >
          PostX is built around how a dealership actually runs, with sales,
          service, parts, F&amp;I, receptionists, and marketing on a single system.
          It’s flexible enough for any business that talks to customers.
        </p>

        <!-- Reusable Gradient Carousel / Grid Component -->
        <GradientCarousel :items="pillars">
          <template #icon="{ item }">
            <!-- Create Icon -->
            <svg
              v-if="item.id === 'create'"
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>

            <!-- Connect Icon -->
            <svg
              v-else-if="item.id === 'connect'"
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>

            <!-- Comms Icon -->
            <svg
              v-else-if="item.id === 'comms'"
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <line x1="8" y1="9" x2="16" y2="9" />
              <line x1="8" y1="13" x2="13" y2="13" />
            </svg>

            <!-- Control Icon -->
            <svg
              v-else
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="18" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <path d="M13 6h3a2 2 0 0 1 2 2v7" />
              <line x1="6" y1="9" x2="6" y2="21" />
            </svg>
          </template>
        </GradientCarousel>
      </div>
    </section>

    <!-- Create, Approve and Publish Content Section -->
    <section
      id="create-approve-publish"
      class="w-full font-poppins"
      :class="
        isMobileMode
          ? 'px-4 py-8'
          : isDesktopOrTabletMode
            ? 'px-4 sm:px-6 lg:px-8 py-14 lg:py-20'
            : 'px-4 sm:px-6 lg:px-8 py-8 md:py-14 lg:py-20'
      "
    >
      <div class="max-w-[1600px] mx-auto">
        <CarouselImage
          :items="contentSlides"
          title-prefix="Create, approve and publish content"
          title-suffix="without the back-and-forth"
          subtitle="Keep every location on brand and every post signed off, from one place."
        />
      </div>
    </section>

    <!-- Section 1: Mid-Page Body CTA (Reusable BodyCTA Component) -->
    <BodyCTA />

    <!-- Section 2: Mobile App in Your Pocket -->
    <section
      id="mobile-app"
      class="w-full font-poppins"
      :class="
        isMobileMode
          ? 'px-5 py-8'
          : isDesktopOrTabletMode
            ? 'px-4 sm:px-6 lg:px-8 py-14 lg:py-20'
            : 'px-5 sm:px-6 lg:px-8 py-8 md:py-14 lg:py-20'
      "
    >
      <div class="max-w-[1600px] mx-auto">
        <div
          class="grid"
          :class="
            isMobileMode
              ? 'grid-cols-1 gap-8 items-center'
              : isDesktopOrTabletMode
                ? 'grid-cols-2 gap-12 lg:gap-16 items-stretch'
                : 'grid-cols-1 gap-8 items-center md:grid-cols-2 md:gap-12 lg:gap-16 md:items-stretch'
          "
        >
          <!-- Phone Mockup Image (full height of section on desktop/tablet) -->
          <div class="flex justify-center items-center h-full">
            <img
              :src="mobileAppMockupImg"
              alt="PostX Mobile App"
              loading="lazy"
              class="w-full h-auto object-contain select-none"
              :class="
                isMobileMode
                  ? 'max-w-[340px]'
                  : isDesktopOrTabletMode
                    ? 'h-full max-h-[680px] w-full'
                    : 'max-w-[340px] md:max-w-none md:h-full md:max-h-[680px]'
              "
            />
          </div>

          <!-- Content -->
          <div class="flex flex-col items-start text-left">
            <h2
              class="font-poppins font-medium text-black tracking-tight leading-[1.2]"
              :class="
                isMobileMode
                  ? 'text-[22px] mb-4'
                  : isDesktopOrTabletMode
                    ? 'text-3xl lg:text-[40px] mb-5'
                    : 'text-[22px] md:text-3xl lg:text-[40px] mb-4 md:mb-5'
              "
            >
              Post<span class="text-primary">X</span> inbox and your content,<br />
              in your pocket
            </h2>

            <p class="leading-[1.7] mb-6 max-w-xl">
              The PostX mobile app gives your team the same control away from the
              desk. Reply to a customer from the floor, approve a post between
              meetings, or take a photo and send it for approval in under a minute.
            </p>

            <ul class="space-y-3 mb-7">
              <li
                v-for="bullet in mobileAppBullets"
                :key="bullet"
                class="flex items-start gap-3 text-[14px] md:text-[15px] text-neutral-800 leading-snug"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>{{ bullet }}</span>
              </li>
            </ul>

            <p class="font-medium mb-3">
              Download the app today.
            </p>

            <div class="flex flex-wrap items-center gap-3">
              <a
                href="#google-play"
                aria-label="Get it on Google Play"
                class="inline-block transition-transform duration-200 hover:scale-[1.02]"
              >
                <img
                  :src="googlePlayBadge"
                  alt="Get it on Google Play"
                  loading="lazy"
                  class="h-10 sm:h-11 w-auto select-none"
                />
              </a>

              <a
                href="#app-store"
                aria-label="Download on the App Store"
                class="inline-block transition-transform duration-200 hover:scale-[1.02]"
              >
                <img
                  :src="appStoreBadge"
                  alt="Download on the App Store"
                  loading="lazy"
                  class="h-10 sm:h-11 w-auto select-none"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Meet Your 24/7 AI Assistant (CarouselIcons Component) -->
    <section
      id="ai-assistant"
      class="w-full font-poppins"
      :class="
        isMobileMode
          ? 'px-4 py-8'
          : isDesktopOrTabletMode
            ? 'px-4 sm:px-6 lg:px-8 py-14 lg:py-20'
            : 'px-4 sm:px-6 lg:px-8 py-8 md:py-14 lg:py-20'
      "
    >
      <div class="max-w-[1600px] mx-auto">
        <div
          class="flex flex-col items-start text-left"
          :class="
            isMobileMode
              ? 'mb-6'
              : isDesktopOrTabletMode
                ? 'mb-10'
                : 'mb-6 md:mb-10'
          "
        >
          <h2
            class="font-poppins tracking-tight leading-[1.2]"
            :class="
              isMobileMode
                ? 'text-[22px] mb-3'
                : isDesktopOrTabletMode
                  ? 'text-3xl lg:text-[40px] mb-4'
                  : 'text-[22px] md:text-3xl lg:text-[40px] mb-3 md:mb-4'
            "
          >
            <span
              class="text-primary font-light"
              :class="isMobileMode ? 'block' : isDesktopOrTabletMode ? 'inline' : 'block md:inline'"
            >
              Meet your 24/7 assistant,
            </span>
            <span
              class="text-black font-medium"
              :class="isMobileMode ? 'block' : isDesktopOrTabletMode ? 'inline md:ml-2' : 'block md:inline md:ml-2'"
            >
              – Powered By AI
            </span>
          </h2>

          <p class="text-neutral-600 leading-[1.65] max-w-2xl">
            Let AI handle the first reply and the routine questions, so your team
            can focus on the conversations that close.
          </p>
        </div>

        <CarouselIcons :items="aiAssistantCards" />
      </div>
    </section>

    <!-- Automate Every Step of the Customer Journey Section -->
    <section
      id="automate-journey"
      class="w-full lg:w-[75%] lg:mx-auto font-poppins"
      :class="
        isMobileMode
          ? 'px-5 py-8'
          : isDesktopOrTabletMode
            ? 'px-4 sm:px-6 lg:px-8 py-14 lg:py-20'
            : 'px-5 sm:px-6 lg:px-8 py-8 md:py-14 lg:py-20'
      "
    >
      <div class="max-w-[1600px] mx-auto">
        <!-- Mobile Stacked Layout -->
        <div
          class="flex-col items-start text-left gap-6"
          :class="
            isMobileMode
              ? 'flex'
              : isDesktopOrTabletMode
                ? 'hidden'
                : 'flex md:hidden'
          "
        >
          <div>
            <h2 class="font-poppins font-medium text-primary text-[24px] leading-[1.2] tracking-tight mb-1">
              Automate Every Step of the Customer Journey
            </h2>
            <p class="text-[20px] font-normal text-black leading-[1.3]">
              From First Chat<br />
              to Final Deal
            </p>
          </div>

          <img
            :src="automateJourneyMobileImg"
            alt="Automate Every Step of the Customer Journey"
            loading="lazy"
            class="w-full h-auto object-contain select-none"
          />

          <p class="leading-[1.7]">
            Capture 24/7 leads, schedule test drives, send automated reminders,
            and exchange secure documents, all while keeping your sales, service,
            and admin teams perfectly connected.
          </p>

          <a href="#contact" class="btn btn-primary w-full">
            Book a Demo
          </a>
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
          <!-- Left Column: Heading, Subheading, Copy, CTA -->
          <div class="flex flex-col items-start text-left max-w-xl">
            <h2 class="font-poppins font-medium text-primary text-3xl lg:text-[42px] leading-[1.18] tracking-tight mb-2">
              Automate Every Step of the Customer Journey
            </h2>
            <p class="md:text-2xl lg:text-[28px] font-normal text-black leading-[1.3] mb-6">
              From First Chat to Final Deal
            </p>

            <p class="leading-[1.7] mb-8">
              Capture 24/7 leads, schedule test drives, send automated reminders,
              and exchange secure documents, all while keeping your sales,
              service, and admin teams perfectly connected.
            </p>

            <a href="#contact" class="btn btn-primary">
              Book a Demo
            </a>
          </div>

          <!-- Right Column: Desktop Image -->
          <div class="flex justify-end">
            <img
              :src="automateJourneyDesktopImg"
              alt="Automate Every Step of the Customer Journey"
              loading="lazy"
              class="w-full max-w-[540px] h-auto object-contain select-none"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Lead Capture & WhatsApp Workflow Carousel (DefaultCarousel Component) -->
    <section
      id="lead-capture-carousel"
      class="w-full font-poppins"
      :class="
        isMobileMode
          ? 'px-4 py-8'
          : isDesktopOrTabletMode
            ? 'px-4 sm:px-6 lg:px-8 py-14 lg:py-20'
            : 'px-4 sm:px-6 lg:px-8 py-8 md:py-14 lg:py-20'
      "
    >
      <div class="max-w-[1600px] mx-auto">
        <DefaultCarousel :items="leadCaptureSlides" />
      </div>
    </section>

    <!-- Set Up Around How Your Business Works (IconServices Component) -->
    <section
      id="business-setup"
      class="w-full font-poppins"
      :class="
        isMobileMode
          ? 'px-5 py-8'
          : isDesktopOrTabletMode
            ? 'px-4 sm:px-6 lg:px-8 py-14 lg:py-20'
            : 'px-5 sm:px-6 lg:px-8 py-8 md:py-14 lg:py-20'
      "
    >
      <div class="max-w-[1600px] mx-auto">
        <IconServices
          title="Set up around how your business works"
          subtitle="Personalised onboarding, sized to your team, your locations and your goals."
          :items="businessSetupServices"
          :image="handHoldingLaptopImg"
          image-alt="PostX Platform on Laptop"
        />
      </div>
    </section>

    <!-- Hundreds of South African Motor Dealers Section -->
    <section
      id="trusted-dealers"
      class="w-full font-poppins"
      :class="
        isMobileMode
          ? 'px-5 py-8'
          : isDesktopOrTabletMode
            ? 'px-4 sm:px-6 lg:px-8 py-14 lg:py-20'
            : 'px-5 sm:px-6 lg:px-8 py-8 md:py-14 lg:py-20'
      "
    >
      <div class="max-w-[1600px] mx-auto">
        <div
          class="grid items-center"
          :class="
            isMobileMode
              ? 'grid-cols-1 gap-6'
              : isDesktopOrTabletMode
                ? 'grid-cols-2 gap-12 lg:gap-16'
                : 'grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:gap-16'
          "
        >
          <!-- Image -->
          <div class="w-full">
            <img
              :src="clientsWhoTrustImg"
              alt="Hundreds of South African motor dealers using PostX"
              loading="lazy"
              class="w-full h-auto object-cover select-none"
              :class="
                isMobileMode
                  ? 'rounded-[24px]'
                  : isDesktopOrTabletMode
                    ? 'rounded-[30px]'
                    : 'rounded-[24px] md:rounded-[30px]'
              "
            />
          </div>

          <!-- Content -->
          <div class="flex flex-col items-start text-left max-w-xl">
            <h2
              class="font-poppins font-medium text-black tracking-tight leading-[1.25]"
              :class="
                isMobileMode
                  ? 'text-[22px] mb-4'
                  : isDesktopOrTabletMode
                    ? 'text-3xl lg:text-[38px] mb-5'
                    : 'text-[22px] md:text-3xl lg:text-[38px] mb-4 md:mb-5'
              "
            >
              <span class="text-primary">Hundreds of South African</span> motor
              dealers and groups run their customer conversations on
              Post<span class="text-primary">X</span> every day.
            </h2>

            <p class="leading-[1.7] mb-7">
              From single-site independents to multi-franchise groups, and a
              growing list of businesses beyond motor retail.
            </p>

            <a
              href="#contact"
              class="btn btn-primary"
              :class="
                isMobileMode
                  ? 'w-full'
                  : isDesktopOrTabletMode
                    ? 'w-auto'
                    : 'w-full md:w-auto'
              "
            >
              Enquire Today
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities Shipping Continuously (FutureFeature Component) -->
    <FutureFeature />

    <!-- Frequently Asked Questions (FAQ Component) -->
    <FAQ />

    <!-- Footer CTA (FooterCTA Component) -->
    <FooterCTA />
  </div>
</template>
