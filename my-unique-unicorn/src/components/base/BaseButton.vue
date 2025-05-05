<template>
  <div class="outer-border">
    <button class="base-button" @click="onClick">
      <slot />
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  onClick: Function,
});
</script>

<style scoped>
.outer-border {
  display: inline-block;
  width: 28px;
  height: 28px;
  background: rgba(240, 242, 245, 0.5);
  border-radius: 50%;
  border: rgba(255, 255, 255, 0.3) 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -7px -7px 12px 0px rgba(255, 255, 255, 0.6),
    3px 3px 12px 0px rgba(163, 177, 198, 0.6);
}

.base-button {
  width: 24px;
  height: 24px;
  background: linear-gradient(to bottom, #f6f8f9, #d7dce5);
  background: radial-gradient(
    64.29% 64.29% at 50% 50%,
    #e0e6ec 0%,
    rgba(224, 230, 236, 0) 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  border: none;
  /* background-clip: content-box; */

  /* box-shadow: 4px 4px 8px #d1d9e6,   -4px -4px 8px #ffffff; */
}

/* .base-button:hover {
  background: linear-gradient(to right, #a18cd1, #fbc2eb);
} */
</style>
