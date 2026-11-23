<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default:
      'We are currently building this page. Check back soon for full details and live previews.',
  },
})
</script>

<template>
  <section class="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 font-poppins">
    <div class="max-w-[1100px] mx-auto">
      <div
        class="rounded-[30px] border border-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] px-7 py-14 md:px-14 md:py-20 flex flex-col items-center text-center gap-5"
        style="background: linear-gradient(180deg, #FFFFFF 0%, rgba(88, 228, 255, 0.12) 100%);"
      >
        <span class="inline-flex items-center gap-2 rounded-full bg-[#00A5C5]/12 text-primary px-4 py-1.5 text-xs md:text-sm font-medium tracking-wide">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Under Construction • Coming Soon
        </span>

        <h1 class="font-poppins font-medium text-black tracking-tight leading-[1.2]">
          {{ title }}
        </h1>

        <p class="max-w-xl text-neutral-700 leading-[1.7]">
          {{ description }}
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4 mt-3 w-full sm:w-auto">
          <a href="#" class="btn btn-primary w-full sm:w-auto">
            Back to Home
          </a>
          <a href="#faq" class="btn btn-primary-outline w-full sm:w-auto">
            View FAQs
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
