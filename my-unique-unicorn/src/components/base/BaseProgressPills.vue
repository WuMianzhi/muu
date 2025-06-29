<template>
  <div class="progress-container">
    <div
      v-for="(pill, index) in total"
      :key="index"
      class="pill"
      :class="[
        { active: index === activeIndex },
        { 'box-shadow': mode === 'SHOW' },
      ]"
      :style="{ background: getColor(index) }"
      @click="updateIdx(index)"
    />

    <!-- 隐藏但可交互的 input -->
    <input
      class="progress-slider"
      type="range"
      min="0"
      :max="total - 1"
      v-model="sliderValue"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const props = defineProps({
  startColor: { type: Array, default: [173, 255, 47] },
  endColor: { type: Array, default: [0, 191, 255] },
  total: { type: Number, default: 20 },
  activeIndex: { type: Number, default: 0 }, // Which pill is active
  mode: { type: String, default: "SHOW" },
});
const sliderValue = ref(props.activeIndex);
const emits = defineEmits(["update:activeIndex"]);
const updateIdx = (idx) => {
  emits("update:activeIndex", idx);
};

/**
 * Calculate color based on position
 */
function getColor(index) {
  const startColor = props.startColor; // light green rgb(173,255,47)
  const endColor = props.endColor; // light blue rgb(0,191,255)

  const ratio = index / (props.total - 1);
  const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * ratio);
  const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * ratio);
  const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * ratio);

  return `rgb(${r}, ${g}, ${b})`;
}

watch(
  () => props.activeIndex,
  (val) => {
    sliderValue.value = val;
  }
);

watch(sliderValue, (val) => {
  emits("update:activeIndex", Number(val));
});
</script>

<style scoped>
.progress-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
}

.pill {
  box-sizing: content-box;
  width: .35rem;
  height: 1rem;
  margin: 0 1px;
  border-radius: .5rem;
  background: #eee;
  transition: all 0.3s ease;
  border: rgba(232, 233, 235, 0.6) 1px solid;
}

.box-shadow {
  box-shadow: inset 1px 1px 2px rgba(138, 143, 151, 0.5),
    inset -1px -1px 2px rgba(255, 255, 255, 0.5);
}

.box-shadow.active {
  box-shadow: inset 1px 1px 2px rgba(240, 240, 240, 0.5),
    -1px -1px 2px rgba(255, 255, 255, 0.5);
}

.pill.active {
  transform: translateY(-12px);
}

.progress-slider {
  position: absolute;
  inset: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  touch-action: pan-x;
}
</style>
