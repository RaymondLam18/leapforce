<template>
  <div class="flex justify-center mt-16 sm:mt-12">
    <div class="flex flex-col items-center max-w-[800px] w-full px-6 sm:px-4 text-center mb-24 sm:mb-16">
      <p class="text-[15px] leading-4 tracking-[0.3px] mb-2 text-[color:var(--main-colors-groengrijs)]">
        {{ label }}
      </p>
      <h1 class="text-[40px] leading-[48px] font-semibold tracking-[-1.2px] my-4 text-[color:var(--header-zwart)]" style="font-family: 'TT Commons Pro Bold'">
        {{ titleBefore }}
        <span
            class="block sm:inline text-[42px] leading-[48px] font-light tracking-[-1.26px] text-[color:var(--header-zwart)] whitespace-nowrap sm:whitespace-normal"
            style="font-family: 'GT Alpina'"
        >
          {{ callToAction }}
        </span>
        {{ titleAfter }}
      </h1>
      <p class="text-[color:var(--body-zwart)] opacity-80 my-6 sm:my-4 max-w-[600px]">
        {{ body }}
      </p>
      <OptionalButton class="mb-12 sm:mb-8" :text="optionalButtonText" />

      <CallToActionSection class="cards-section" :cards="cards" />
    </div>
  </div>
</template>

<script setup>
import OptionalButton from './common/OptionalButton.vue'
import CallToActionSection from './components/CallToActionSection.vue'
import kitchenImg from './assets/images/afbeelding.jpg'

const label = 'Label'
const titleBefore = 'Mandatory title about the'
const callToAction = 'call to action'
const titleAfter = 'here'
const body = 'Optional body copy goes here'
const optionalButtonText = 'Optional button'

const cards = [
  {
    title: 'Title',
    text: 'Supporting text about the call-to-action goes here.',
    image: kitchenImg
  },
  {
    title: 'Title',
    text: 'Supporting text about the call-to-action goes here.',
    image: kitchenImg
  }
]
</script>
