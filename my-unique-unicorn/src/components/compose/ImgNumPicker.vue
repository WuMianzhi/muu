<template>
  <div class="container">
    <div>
      <img :src="img" :alt="title" />
    </div>
    <div class="selector">
      <BaseProgressPills
        @update:active-index="(newVal) => emits('update:val', newVal)"
        :start-color="startColor"
        :end-color="endColor"
        :active-index="val"
        :mode="mode"
      />
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseProgressPills from "../base/BaseProgressPills.vue";

const props = defineProps({
  startColor: { type: Array, default: [173, 255, 47] },
  endColor: { type: Array, default: [0, 191, 255] },
  title: { type: String, default: "test" },
  val: { type: Number, default: 10 },
  img: { type: String, default: "" },
  mode: {type: String, default: 'SHOW'}
});

const emits = defineEmits(["update:val"]);
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
}

.selector {
  flex: 1;
  text-align: left;
}
</style>
