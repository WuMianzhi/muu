<script setup>
import { ref } from 'vue';
import BaseButton from './base/BaseButton.vue';
import BaseColorProgressBar from './base/BaseColorProgressBar.vue';
import BaseFlowerButton from './base/BaseFlowerButton.vue';
import BaseprogressPills from './base/BaseProgressPills.vue';
import ColorBar from './base/ColorBar.vue';
import PageButton from './base/PageButton.vue';
import NeumorphicSwitch from './base/NeumorphicSwitch.vue';
import AxisControlPad from './base/AxisControlPad.vue';
import NumPicker from './compose/NumPicker.vue'


defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const flowerActive = ref(false)
const handleClick = () => {
  flowerActive.value = !flowerActive.value
}

const switchVal = ref(false)


</script>

<template>
  <div class="greetings">
    <BaseButton />
    <PageButton />
    <ColorBar />
    <BaseprogressPills />
    <BaseColorProgressBar />
    <BaseFlowerButton :active="flowerActive" @click="handleClick" />
    <NeumorphicSwitch v-model:checked="switchVal" />
    <AxisControlPad />
    <NumPicker />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
