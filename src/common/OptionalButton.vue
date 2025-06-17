<script setup>
import ArrowRightIcon from '../icons/ArrowRight.vue';
defineProps({
  text: String,
  disabled: Boolean
})
</script>

<template>
  <div
      class="button flex items-center gap-1"
      :class="{ disabled }"
      :tabindex="disabled ? -1 : 0"
      :aria-disabled="disabled"
  >
    <p class="content">{{ text }}</p>
    <ArrowRightIcon class="arrow" />
  </div>
</template>

<style scoped>
.button {
  min-width: 158px;
}

.content {
  color: var(--main-colors-oranje-rood);
  min-width: 130px;
  text-align: start;
  cursor: pointer;
}

.arrow {
  color: var(--main-colors-oranje-rood);
}

.button:hover .content,
.button:hover .arrow {
  color: var(--interactive-oranje-rood-hover);
}

.button:active .content,
.button:active .arrow {
  color: var(--interactive-oranje-rood-focussed);
}

.button.disabled .content,
.button.disabled .arrow {
  color: var(--neutrals-zwart);
  opacity: 0.3;
  cursor: default;
}

@media (max-width: 600px) {
  .content {
    min-width: 117px;
  }

  .button {
    min-width: 145px;
  }
}
</style>
