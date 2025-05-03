<template>
  <div>
    <h1>亲密关系上受到怎样的人吸引</h1>

    <div class="quiz-content">
      <BaseSwitch
        v-model:checked="quizStore.genderQuiz.isIntimateAttract"
      />
      <template v-for="(quiz, idx) in quizStore.genderQuiz.intimateAttract">
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

<script setup lang="ts">close
import NumPicker from "@/components/compose/NumPicker.vue";
import BaseSwitch from "@/components/base/BaseSwitch.vue";
import { useQuizStore } from "@/stores/quizStore";

const quizStore = useQuizStore();
</script>
<style scoped>

</style>
