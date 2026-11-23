<script setup>
import unifiedInboxMobileBanner from '../images/post-unified-inbox-mobile-hero-banner.webp'
</script>

<template>
  <section class="w-full px-4 sm:px-6 lg:px-8 font-poppins">
    <div class="max-w-[1600px] mx-auto flex flex-col items-center">
      <!-- Mobile Hero Banner -->
      <div class="relative w-full">
        <img
          :src="unifiedInboxMobileBanner"
          alt="Turn Every Conversation into a Customer - PostX Unified Inbox"
          class="w-full h-auto block select-none"
        />

        <!-- Banner Top Heading Overlay -->
        <div class="absolute inset-x-0 top-0 pt-5 sm:pt-6 px-4 text-center pointer-events-none">
          <h2 class="font-poppins font-medium text-[18px] sm:text-[22px] leading-[1.25] tracking-tight text-black">
            Turn Every Conversation
            <span class="block text-primary">into a Customer.</span>
          </h2>
        </div>
      </div>

      <!-- Content Below Banner -->
      <div class="w-full flex flex-col items-center text-center gap-4 mt-4 px-2">
        <h1 class="font-poppins font-medium text-black leading-[1.25] tracking-tight">
          Keep Your Messages
          <span class="block text-primary">Organised All-In-One Place.</span>
        </h1>

        <p class="max-w-xl text-neutral-800 leading-[1.65]">
          PostX unifies WhatsApp, social media, live chat, and AI-powered assistants into a single command centre - purpose-built for motor dealerships and beyond. Publish content, manage every message, generate leads, and turn conversations into sales.
        </p>

        <div class="w-full sm:w-auto mt-2">
          <a href="#contact" class="btn btn-primary w-full sm:w-auto">
            Book Your Demo
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
