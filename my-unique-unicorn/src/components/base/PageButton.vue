<template>
    <button class="page-button" @click="onClick">
        <slot/>
    </button>
</template>

<script setup>
const props = defineProps({
    onClick: Function,
})
</script>

<style scoped>
.page-button {
    width: 30px;
    height: 30px;
    background: #f0f0f383;
    background: radial-gradient(#dee4ea, #dee4ea69);
    border-radius: 50%;
    border: none;
    box-shadow:
        6px 6px 12px 2px #d1d9e642;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
}

.arrow-icon {
    width: 14px;
    height: 14px;
}
</style>