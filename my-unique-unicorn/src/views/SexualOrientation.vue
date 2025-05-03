<template>
  <div>
    <h1>性/情欲倾向的认同/身份</h1>
    <div>
      <template v-for="(quiz, idx) in quizStore.genderQuiz.sexualOrientation">
        <NumPicker
          :title="quiz.name"
          v-model:val="quiz.val"
          :start-color="quiz.startColor"
          :end-color="quiz.endColor"
        />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import NumPicker from "@/components/compose/NumPicker.vue";
import { useQuizStore } from "@/stores/quizStore";

const quizStore = useQuizStore();
</script>
<style lang=""></style>
