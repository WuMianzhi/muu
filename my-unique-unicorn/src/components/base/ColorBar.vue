<template>
  <div class="slider-wrapper">
    <input
      type="range"
      :value="val"
      @input="onInput"
      :min="min"
      :max="max"
      step="1"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  val: { type: Number, default: 50 },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  minLabel: { type: String, default: "Min" },
  midLabel: { type: String, default: "Mid" },
  maxLabel: { type: String, default: "Max" },
});
const emit = defineEmits(["update:val"]);

function onInput(event) {
  emit("update:val", Number(event.target.value));
}
</script>

<style lang="css" scoped>
input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 16px;
  border-radius: 12px;
  background: linear-gradient(
    to right,
    #fbab99,
    #f6e49c,
    #b0f6b5,
    #b5d8f6,
    #d2b5f6
  );
  outline: none;
  border: rgba(255, 255, 255, 0.6) 1px solid;
  box-shadow: 0px 0px 4px #d1d9e6;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: #ffffff;
  border-radius: 50%;
  /* box-shadow: 2px 2px 2px #d1d9e6, -2px -2px 2px #ffffff; */
  cursor: pointer;
  margin-top: 0px;
  border: #ffffffb1 2px solid;
  /* align center */
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #ffffff;
  border: none;
  border-radius: 50%;
  /* box-shadow: 2px 2px 5px #d1d9e6, -2px -2px 5px #ffffff; */
  cursor: pointer;
}
</style>
