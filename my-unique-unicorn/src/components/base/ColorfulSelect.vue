<template>
  <div class="custom-select" ref="triggerRef" @click="toggleDropdown">
    <div class="select-trigger">
      {{ selectedLabel || placeholder }}
    </div>
    <teleport to="body">
      <div v-if="isOpen" class="select-options" :style="dropdownStyle">
        <div
          v-for="(opt, i) in options"
          :key="i"
          :class="['option', { selected: opt.value === modelValue }]"
          @click.stop="selectOption(opt)"
        >
          {{ opt.label }}
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  defineProps,
  defineEmits,
  nextTick,
  onMounted,
  onBeforeUnmount,
} from "vue";

const dropdownStyle = ref({});
const triggerRef = ref();

const props = defineProps({
  modelValue: String,
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: "请选择",
  },
});

const updatePosition = () => {
  const rect = triggerRef.value?.getBoundingClientRect();
  if (rect) {
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const showAbove = spaceBelow < 200 && spaceAbove > spaceBelow;

    dropdownStyle.value = {
      position: "absolute",
      top: showAbove
        ? `calc(${rect.top + window.scrollY}px - 14rem)`
        : `${rect.bottom + window.scrollY}px`,
      left: `${rect.left + window.scrollX}px`,
      width: `${rect.width}px`,
      zIndex: 1000,
    };
  }
};

const emit = defineEmits(["update:modelValue"]);
const isOpen = ref(false);

const selectedLabel = computed(
  () => props.options.find((o) => o.value === props.modelValue)?.label
);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    nextTick(() => {
      console.log("aa");

      updatePosition();
    });
  }
};

const selectOption = (opt) => {
  emit("update:modelValue", opt.value);
  isOpen.value = false;
};

const handleClickOutside = (e) => {
  if (!triggerRef.value?.contains(e.target)) {
    isOpen.value = false;
  }
};

onMounted(() => document.addEventListener("click", handleClickOutside));
onBeforeUnmount(() =>
  document.removeEventListener("click", handleClickOutside)
);
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  max-width: 20rem;
  user-select: none;
  font-family: sans-serif;
}

.select-trigger {
  text-align: left;
  padding: 0.5rem 1rem;
  /* border: 2px solid #ccc; */
  border-radius: 2rem;
  background-color: #fff;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: -.5rem -.5rem 1rem 0px #ffffff99, .5rem .5rem 1rem 0px #bfd0e999;
  background: linear-gradient(
      180deg,
      rgba(208, 232, 255, 0.2) 0%,
      rgba(249, 249, 213, 0.1979) 47.06%,
      rgba(255, 215, 253, 0) 96.12%
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    #fff;
}

.select-options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  font-size: 1rem;
  margin-top: .25rem;
  border: 2px solid #ccc;
  border-radius: .5rem;
  background-color: #fff;
  color: #334155;
  max-height: 14rem;
  overflow-y: auto;
  z-index: 1000;
}

.option {
  padding: .5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.option:hover {
  background-color: #f0f0f0;
}

.option.selected {
  background-color: #cce5ff;
  background: linear-gradient(to right, #e4f2ff, #f3f3e67a, #ece0ec80);
  font-weight: bold;
}
</style>
