<template>
    <div>
        <h1> 性别认同/性别身份 </h1>

        <div>
            <template v-for="(quiz, idx) in quizStore.genderQuiz.genderIdentity">
                <NumPicker :title="quiz.name"
                    v-model:val="quiz.val"
                    :start-color="quiz.startColor"
                    :end-color="quiz.endColor" />
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
import NumPicker from '@/components/compose/NumPicker.vue';
import { useQuizStore } from '@/stores/quizStore';

const quizStore = useQuizStore()

</script>