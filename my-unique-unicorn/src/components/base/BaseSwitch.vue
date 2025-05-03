<template>
    <div class="switch-container" @click="toggle">
        <div class="switch-label" :class="{ active: !checked }">{{ checked ? ' 被吸引' : '不被吸引' }}</div>
        <div class="switch-knob" :class="{ active: checked }" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    checked: { type: Boolean, default: false }
})

const emit = defineEmits(['update:checked'])

function toggle() {
    emit('update:checked', !props.checked)
}
</script>

<style scoped>
.switch-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    height: 30px;
    padding: 6px;
    border-radius: 30px;
    background: #f1f3f5;
    box-shadow: inset 2px 2px 6px #d1d9e6, inset -2px -2px 6px #ffffff;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.switch-container.active {
    flex-direction: row-reverse;
    transition: all 0.3s ease;
}

.switch-label {
    font-size: .75rem;
    font-weight: bold;
    color: #999;
    padding: 0 .25rem;
    pointer-events: none;
    transition: all 0.3s ease;

    /* Stroke and shadow for soft outline effect */
    /* -webkit-text-stroke: 2px rgba(200, 200, 200, 0.6); */
    /* text-shadow: 0 0px 2px rgba(252, 252, 252, 0.9); */
    /* text-shadow: 1px -1px 0 rgba(255, 255, 255, 0.9),
        1px -1px 0 rgba(255, 255, 255, 0.9),
        -1px 1px 0 rgba(255, 255, 255, 0.9),
        1px 1px 0 rgba(255, 255, 255, 0.9); */
}

.switch-label.active {
    font-size: .75rem;
    transform: translateX(1rem);
}

.switch-knob {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #ffffff;
    background: radial-gradient(#ffffff, #ffffff00);
    border: 2px rgba(233, 237, 255, 0.20) solid;
    box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #ffffff;
    transition: transform 0.3s ease;
    z-index: 0;
}

.switch-knob.active {
    transform: translateX(48px);
}
</style>