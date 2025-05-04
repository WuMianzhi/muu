<template>
    <div class="flower-container">
        <div 
        class="flower" 
        :class="{ active: active }"
        @click="handleClick"></div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  active: { type: Boolean, default: false }
})

const emit = defineEmits(['update:active', 'click'])

function handleClick() {
  emit('update:active', !props.active)
  emit('click')
}

</script>

<style scoped>
.flower-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.flower {
    width: 64px;
    height: 64px;
    background: radial-gradient(circle at center, rgba(46, 51, 60, 0.3), rgba(180, 200, 255, 0.1));
    filter: blur(8px);
    mask-image: url('../../assets/ic_flower.svg');
    -webkit-mask-image: url('../../assets/ic_flower.svg');
    -webkit-mask-size: cover;
    mask-size: cover;
    transition: cubic-bezier(0.075, -0.2, 0.165, 1) all .36s;
}

.flower.active {
    background: radial-gradient(circle at center, #ffd1e2, #97dde8);
    filter: blur(2px);
    transform: rotate(180deg) scale(1.1);
}
</style>  