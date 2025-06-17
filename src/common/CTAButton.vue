<script setup>
import ArrowLeftIcon from '../icons/ArrowLeft.vue';
import ArrowRightIcon from '../icons/ArrowRight.vue';

defineProps({
  direction: String,
  disabled: Boolean
})
</script>

<template>
  <div
      class="w-10 h-10 flex justify-center items-center rounded-md border border-white/30 bg-transparent text-white hover:border-white/50 transition duration-200"
      :class="{ 'opacity-50 pointer-events-none': disabled }"
      :tabindex="disabled ? -1 : 0"
      :aria-disabled="disabled"
  >
    <component
        :is="direction === 'left' ? ArrowLeftIcon : ArrowRightIcon"
        class="w-3 h-3"
        aria-hidden="true"
    />
  </div>
</template>