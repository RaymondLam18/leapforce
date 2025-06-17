<script setup>
import ArrowRightIcon from '../icons/ArrowRight.vue';

defineProps({
  text: String,
  disabled: Boolean
});
</script>

<template>
  <div
      :class="[
      'flex items-center gap-1 min-w-[145px] sm:min-w-[158px] group cursor-pointer',
      disabled ? 'opacity-30 cursor-default pointer-events-none' : ''
    ]"
      :tabindex="disabled ? -1 : 0"
      :aria-disabled="disabled"
  >
    <p
        class="min-w-[117px] sm:min-w-[130px] text-start transition-colors"
        :style="{
        color: disabled
          ? 'var(--neutrals-zwart)'
          : 'var(--main-colors-oranje-rood)'
      }"
        :class="[
        !disabled && 'group-hover:text-[var(--interactive-oranje-rood-hover)] group-active:text-[var(--interactive-oranje-rood-focussed)]'
      ]"
    >
      {{ text }}
    </p>

    <ArrowRightIcon
        class="transition-colors"
        :style="{
        color: disabled
          ? 'var(--neutrals-zwart)'
          : 'var(--main-colors-oranje-rood)'
      }"
        :class="[
        !disabled && 'group-hover:text-[var(--interactive-oranje-rood-hover)] group-active:text-[var(--interactive-oranje-rood-focussed)]'
      ]"
    />
  </div>
</template>
