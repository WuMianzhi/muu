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
  </div>
</template>

<script setup>
const props = defineProps({
  startColor: { type: Array, default: [173, 255, 47] },
  endColor: { type: Array, default: [0, 191, 255] },
  total: { type: Number, default: 20 },
  activeIndex: { type: Number, default: 0 }, // Which pill is active
  mode: { type: String, default: "SHOW" },
});

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
</script>

<style scoped>
.progress-container {
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: end;
}

.pill {
  box-sizing: content-box;
  width: 6px;
  height: 16px;
  border-radius: 10px;
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
</style>
