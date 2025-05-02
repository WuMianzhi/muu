<template>
    <div class="progress-container">
        <div v-for="(pill, index) in total" :key="index" class="pill" :class="{ active: index === activeIndex }"
            :style="{ background: getColor(index) }" @click="updateIdx(index)" />
    </div>
</template>

<script setup>
const props = defineProps({
    startColor: { type: Array, default: [173, 255, 47] },
    endColor: { type: Array, default: [0, 191, 255] },
    total: { type: Number, default: 20 },
    activeIndex: { type: Number, default: 0 }, // Which pill is active
})

const emits = defineEmits(['update:activeIndex'])
const updateIdx = (idx) => {
    emits('update:activeIndex', idx)
}

/**
 * Calculate color based on position
 */
function getColor(index) {
    const startColor = props.startColor;   // light green rgb(173,255,47)
    const endColor = props.endColor;       // light blue rgb(0,191,255)

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
    gap: 4px;
    justify-content: center;
    align-items: end;
}

.pill {
    width: 6px;
    height: 12px;
    border-radius: 10px;
    background: #eee;
    box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #ffffff;
    transition: all 0.3s ease;
}

.pill.active {
    transform: translateY(-6px);
    box-shadow: inset 1px 1px 2px #d1d9e6, inset -1px -1px 2px #ffffff;
}
</style>