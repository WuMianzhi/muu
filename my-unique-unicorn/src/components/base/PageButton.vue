<template>
  <button class="page-button" @click="onClick">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  onClick: Function,
});
</script>

<style scoped>
.page-button {
  width: 30px;
  height: 30px;
  background: #f0f0f383;
  background: radial-gradient(
    64.29% 64.29% at 50% 50%,
    #e0e6ec 0%,
    rgba(224, 230, 236, 0) 100%
  );
  border-radius: 50%;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  box-shadow: -9px -9px 16px 0px rgba(255, 255, 255, 0.6),
    9px 9px 16px 0px rgba(163, 177, 198, 0.6);
}

.arrow-icon {
  width: 14px;
  height: 14px;
}
</style>
