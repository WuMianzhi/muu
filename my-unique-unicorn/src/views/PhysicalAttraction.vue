<template>
  <div>
    <h1>生理上被怎样的人吸引</h1>

    <div class="quiz-content">
      <BaseSwitch v-model:checked="quizStore.genderQuiz.isPhysicalAttract" />
      <template
        v-for="(quiz, idx) in quizStore.genderQuiz.physicalAttract"
      >
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
import BaseSwitch from "@/components/base/BaseSwitch.vue";
import { useQuizStore } from "@/stores/quizStore";

const quizStore = useQuizStore();
</script>
<style lang=""></style>
