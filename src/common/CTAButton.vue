<script setup>
import ArrowLeftIcon from '../icons/ArrowLeft.vue'
import ArrowRightIcon from '../icons/ArrowRight.vue'

defineProps({
  direction: {
    type: String,
    required: true,
    validator: (value) => ['left', 'right'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
      class="w-10 h-10 flex items-center justify-center bg-white text-gray-800 rounded-full shadow hover:bg-gray-100 transition disabled:opacity-50"
      :disabled="disabled"
      :aria-disabled="disabled"
      :aria-label="direction + ' arrow button'"
  >
    <component
        :is="direction === 'left' ? ArrowLeftIcon : ArrowRightIcon"
        class="w-5 h-5"
        aria-hidden="true"
    />
  </button>
</template>
