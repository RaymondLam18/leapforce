<template>
  <div class="d-flex justify-content-center content">
    <div class="grid-container">
      <p class="label">{{ label }}</p>
      <h1>
        {{ titleBefore }} <span class="call-to-action"><br>{{ callToAction }}</span> {{ titleAfter }}
      </h1>
      <p class="body">{{ body }}</p>
      <OptionalButton class="optional-button" :text="optionalButtonText" />

      <CallToActionSection class="cards-section" :cards="cards" />
    </div>
  </div>
</template>


<script setup>
import OptionalButton from './common/OptionalButton.vue';
import CallToActionSection from './components/CallToActionSection.vue';
import kitchenImg from './assets/images/afbeelding.jpg'

const label = 'Label';
const titleBefore = 'Mandatory title about the';
const callToAction = 'call to action';
const titleAfter = 'here';
const body = 'Optional body copy goes here';
const optionalButtonText = "Optional button";

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


<style scoped>
.content {
  display: flex;
  justify-content: center;
  margin-top: 64px;
}

.grid-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 96px;
  text-align: center;
}

.label {
  color: var(--main-colors-groengrijs);
  font-size: 15px;
  line-height: 16px;
  letter-spacing: 0.3px;
  margin-bottom: 8px;
}

h1 {
  font-family: 'TT Commons Pro Bold';
  color: var(--header-zwart);
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -1.2px;
  margin: 16px 0;
}

.call-to-action {
  color: var(--header-zwart);
  font-family: "GT Alpina";
  font-size: 42px;
  font-style: normal;
  font-weight: 300;
  line-height: 48px;
  letter-spacing: -1.26px;
  white-space: nowrap;
}

.body {
  color: var(--body-zwart);
  opacity: 0.8;
  margin: 24px 0;
  max-width: 600px;
}

.optional-button {
  margin-bottom: 48px;
}

@media (max-width: 600px) {
  .content {
    margin-top: 48px;
  }

  .grid-container {
    padding: 0 16px;
    margin-bottom: 64px;
  }

  h1 {
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.72px;
  }

  .call-to-action {
    font-size: 38px;
    line-height: 40px;
    letter-spacing: -1.14px;
    white-space: normal;
  }

  .body {
    margin: 16px 0;
  }

  .optional-button {
    margin-bottom: 32px;
  }
}

</style>