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
    <div
      class="more-colorful"
      :style="{ width: (100 * (max - val)) / max + '%' }"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  val: { type: Number, default: 50 },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  minLabel: { type: String, default: "Min" },
  midLabel: { type: String, default: "Mid" },
  maxLabel: { type: String, default: "Max" },
  mode: { type: String, default: "SHOW" },
});
const emit = defineEmits(["update:val"]);

function onInput(event) {
  emit("update:val", Number(event.target.value));
}
</script>

<style lang="css" scoped>
.slider-wrapper {
  position: relative;
}

input {
  color: transparent;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 1rem;
  border-radius: 12px;
  background: linear-gradient(
    to right,
    rgb(255, 109, 77),
    rgb(255, 224, 102),
    rgb(92, 255, 103),
    rgb(87, 176, 255),
    rgb(165, 92, 255)    
  );
  outline: none;
  border: rgba(255, 255, 255, 0.6) 1px solid;
  box-shadow: 0px 0px 4px #d1d9e6;
}

.more-colorful {
  width: 100%;
  z-index: 100;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  height: calc(1rem + 2px);
  border-radius: calc(0.5rem + 1px);
  background: rgba(255, 255, 255, 0.7);
  pointer-events: none;
  /* box-sizing: content-box; */
  /* backdrop-filter: blur(1rem); */
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 999;
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
