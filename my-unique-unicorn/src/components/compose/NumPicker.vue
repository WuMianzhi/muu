<template>
    <div class="wrapper">
        <BaseButton @click="minAcKey" v-if="mode==='SHOW'">
            <img src="../../assets/minus.svg" class="btn-symbol"></img>
        </BaseButton>

        <div class="center">
            <BaseProgressPills :active-index="val"
            @update:active-index="newVal => emits('update:val', newVal)"
             :end-color="endColor" :start-color="startColor" 
             :mode="mode"
             />
            <slot>
                <h3> {{ title }}</h3>
            </slot>
        
        </div>
        <BaseButton @click="addAcKey" v-if="mode==='SHOW'">
            <img src="../../assets/plus.svg" class="btn-symbol"></img>
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import BaseButton from '../base/BaseButton.vue';
import BaseProgressPills from '../base/BaseProgressPills.vue';

const props = defineProps({
    startColor: { type: Array, default: [173, 255, 47] },
    endColor: { type: Array, default: [0, 191, 255] },
    title: { type: String, default: 'test' },
    val: { type: Number, default: 10 },
    mode: {type: String, default: 'SHOW'}
})

const emits = defineEmits([
    'update:val'
])

const addAcKey = () => {
    emits('update:val', props.val > 19 ? 20 : props.val + 1)
}

const minAcKey = () => {
    emits('update:val', props.val < 1 ? 0 : props.val - 1)
}

</script>


<style lang="css" scoped>
.wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: .5rem;
    margin: 1rem 0;
}

.center {
    /* text-align: center; */
    transform: translateY(.25rem);
}

.btn-symbol {
    width: .75rem;
}
</style>