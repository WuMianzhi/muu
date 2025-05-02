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
})
</script>

<style scoped>
.base-button {
  width: 24px;
  height: 24px;
  background: linear-gradient(to bottom, #f6f8f9, #d7dce5);
  border-radius: 50%;
  border: rgba(240, 242, 245, 1) 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  box-shadow:
    4px 4px 8px #d1d9e6,  
    -4px -4px 8px #ffffff;
}

.outer-border {
  display: inline-block;
  width: 26px;
  height: 26px;
  background: rgba(240, 242, 245, .5) ;
  border-radius: 50%;
  border: 1px solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;

}

.base-button:hover {
  background: linear-gradient(to right, #a18cd1, #fbc2eb);
}
</style>
