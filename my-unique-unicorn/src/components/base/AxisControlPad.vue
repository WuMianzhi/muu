<template>
    <div class="scroll-col">
        <button @click="scrollUp">▲</button>
        <div class="scroll-window">
            <div class="scroll-content">
                <div class="item">{{ prevChar }}</div>
                <div class="item selected">{{ currentChar }}</div>
                <div class="item">{{ nextChar }}</div>
            </div>
        </div>
        <button @click="scrollDown">▼</button>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const base = ['x', 'y', '-']
const currentIndex = ref(0)
const itemHeight = 36

const currentChar = computed(() => base[currentIndex.value % 3])
const prevChar = computed(() => base[(currentIndex.value + 2) % 3])
const nextChar = computed(() => base[(currentIndex.value + 1) % 3])

function scrollUp() {
    currentIndex.value = (currentIndex.value + 1) % 3
}

function scrollDown() {
    currentIndex.value = (currentIndex.value + 2) % 3
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
    height: 108px;
    /* 3 items * height */
    overflow: hidden;
    position: relative;
}

.scroll-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
}

.item {
    height: 36px;
    line-height: 36px;
    width: 2rem;
    text-align: center;
    font-size: 18px;
    color: #999;
    transition: all 0.2s;
}

.selected {
    font-weight: bold;
    font-size: 20px;
    color: #333;
}
</style>