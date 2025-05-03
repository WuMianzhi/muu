<template>
    <div>
        <h1>性别表达/性别气质</h1>
        <div>
            <div>
                <template v-for="(quiz, idx) in quizStore.genderQuiz.genderExpression">
                    <NumPicker :title="quiz.name" v-model:val="quiz.val" :start-color="quiz.startColor"
                        :end-color="quiz.endColor" />
                </template>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import NumPicker from '@/components/compose/NumPicker.vue';
import { useQuizStore } from '@/stores/quizStore';

const quizStore = useQuizStore()
</script>
<style lang="">

</style>