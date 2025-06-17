<template>
  <section class="py-16">
    <div class="flex flex-col gap-6 items-center md:flex-row md:justify-center">
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

        <div class="absolute bottom-4 left-4 text-white text-left">
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-text">{{ card.text }}</p>
        </div>

        <div class="absolute bottom-4 right-4">
          <CTAButton direction="right" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CTAButton from '../common/CTAButton.vue'

defineProps({
  cards: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.card-title {
  color: var(--wit);
  font-family: "TT Commons Pro Bold";
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.56px;
}

.card-text {
  text-align: start;
  gap: 8px;
}
</style>
