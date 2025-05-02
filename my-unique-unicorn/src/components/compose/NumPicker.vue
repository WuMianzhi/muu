<template>
    <div class="wrapper">
        <BaseButton @click="minAcKey">
            <img src="../../assets/minus.svg" class="btn-symbol"></img>
        </BaseButton>
        <div class="center">
            <BaseProgressPills v-model:active-index="acKey" />
            <h3> {{ title }}</h3>
        </div>
        <BaseButton @click="addAcKey">
            <img src="../../assets/plus.svg" class="btn-symbol"></img>
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseButton from '../base/BaseButton.vue';
import BaseProgressPills from '../base/BaseProgressPills.vue';

const props = defineProps({
    startColor: { type: Array, default: [173, 255, 47] },
    endColor: { type: Array, default: [0, 191, 255] },
    title: { type: String, default: 'test' }
})

const acKey = ref(0)

const addAcKey = () => {
    acKey.value > 19 ? acKey.value = 20 : acKey.value++
}

const minAcKey = () => {
    acKey.value < 1 ? acKey.value = 0 : acKey.value--
}



</script>


<style lang="css" scoped>
.wrapper {
    display: flex;
    gap: .5rem;
}

.center {
    text-align: center;
    transform: translateY(.5rem);
}

.btn-symbol{
    width: .75rem;
}
</style>