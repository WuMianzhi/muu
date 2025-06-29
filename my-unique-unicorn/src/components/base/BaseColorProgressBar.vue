<template>
  <div class="color-options">
    <template v-for="(gradient, index) in colors" :key="index">
      <div class="color-circle" :style="{ background: gradient }" @click="selectColor(index)"
        :class="{ active: index === selectedIndex }" />
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  selectedIndex: {
    type: Number,
    default: 0
  },
  colors: {
    type: Array,
    default: () => [
      'linear-gradient(to right, #fbab99, #ffd3b5)',  // pink-orange
      'linear-gradient(to right, #f6e49c, #f9f7b9)',  // yellow
      'linear-gradient(to right, #a5f59d, #c1f6c8)',  // light green
      'linear-gradient(to right, #9df5dc, #b5f6e5)',  // teal
      'linear-gradient(to right, #9dbaf5, #c1d2f6)',  // blue
      'linear-gradient(to right, #d29df5, #e3c1f6)',  // purple
    ],
  },
})

const emit = defineEmits(['update:selectedIndex'])

function selectColor(index) {
  emit('update:selectedIndex', index)
}
</script>

<style scoped>
.color-options {
  display: flex;
  gap: .75rem;
}

.color-circle {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #eee;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #ffffff7c;
  cursor: pointer;
  transition: all 0.3s ease;
  background-size: 200% 200%;
}

.color-circle.active {
  width: 48px;
}
</style>