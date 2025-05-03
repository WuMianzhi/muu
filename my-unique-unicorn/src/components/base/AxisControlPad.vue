<template>
  <div class="scroll-col">
    <button @click="scrollUp">
      <img src="../../assets/icons/upper.svg" alt="" />
    </button>
    <div class="scroll-window">
      <div class="scroll-content">
        <div class="item">{{ prevChar }}</div>
        <div class="item selected">{{ currentChar }}</div>
        <div class="item">{{ nextChar }}</div>
      </div>
    </div>
    <button @click="scrollDown">
      <img src="../../assets/icons/upper.svg" alt="" class="rotate" />
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  idx: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["update:idx"]);

const base = ["X", "Y", "-"];
// const currentIndex = ref(0);

const currentChar = computed(() => base[props.idx % 3]);
const prevChar = computed(() => base[(props.idx + 2) % 3]);
const nextChar = computed(() => base[(props.idx + 1) % 3]);

function scrollUp() {
  emits("update:idx", (props.idx + 1) % 3);
}

function scrollDown() {
  emits("update:idx", (props.idx + 2) % 3);
}
</script>

<style scoped>
.scroll-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.scroll-window {
  position: relative;
}

.scroll-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
}

.rotate {
  transform: rotate(180deg);
}

.item {
  height: 36px;
  line-height: 36px;
  width: 2rem;
  text-align: center;
  font-size: 18px;
  color: rgba(188, 188, 188, 1);
  transition: all 0.2s;
}

.selected {
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 1rem;
  font-size: 1rem;
  color: rgba(188, 188, 188, 1);
  background: linear-gradient(
    to bottom,
    #e4f2ff 0%,
    rgba(243, 243, 230, 0.5) 52.08%,
    rgba(236, 224, 236, 0.5) 100%
  );
  box-shadow: -9px -9px 16px 0px rgba(255, 255, 255, 0.6),
    9px 9px 16px 0px rgba(194, 211, 237, 0.6);
}

button {
  border: none;
  background: transparent;
}
</style>
