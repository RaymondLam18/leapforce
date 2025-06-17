<template>
  <section class="py-16">
    <div class="flex flex-col items-center gap-6 md:flex-row md:justify-center">
      <div
          v-for="(card, index) in cards"
          :key="index"
          class="relative w-[335px] h-[225px] md:w-[644px] md:h-[515px] bg-gray-200 overflow-hidden rounded-lg"
      >
        <img
            :src="card.image"
            alt="Card image"
            class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/30"></div>

        <div class="absolute bottom-4 left-4 text-white text-left" :class="['max-w-[calc(100%-80px)]', 'md:max-w-[calc(100%-80px)]', 'text-container']">
          <h3 class="text-[28px] leading-[32px] tracking-[-0.56px] mb-1 font-semibold font-tt-commons">
            {{ card.title }}
          </h3>
          <p class="text-[14px] md:text-[16px] leading-[1.4] opacity-75 md:opacity-50 text-start">
            {{ card.text }}
          </p>
        </div>
        
        <div class="absolute bottom-4 right-4">
          <CTAButton direction="right" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CTAButton from '../common/CTAButton.vue';

defineProps({
  cards: {
    type: Array,
    default: () => []
  }
});
</script>

<style scoped>
.font-tt-commons {
  font-family: 'TT Commons Pro Bold';
}
</style>
