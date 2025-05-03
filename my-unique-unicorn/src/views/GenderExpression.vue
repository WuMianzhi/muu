<template>
  <div>
    <h1>性别表达/性别气质</h1>

    <div>
      <template v-for="(quiz, idx) in quizStore.genderQuiz.genderExpression">
        <NumPicker
          :title="quiz.name"
          v-model:val="quiz.val"
          :start-color="quiz.startColor"
          :end-color="quiz.endColor"
        />
      </template>
    </div>

    <h1>出生时分配性别</h1>
    <div class="assign-gender">
      <div class="left">
        <BaseFlowerButton
          :active="!quizStore.genderQuiz.assignGenderMale"
          @click="quizStore.genderQuiz.assignGenderMale = !quizStore.genderQuiz.assignGenderMale"
        />
        <h3>女性</h3>
      </div>
      <div class="right">
        <BaseFlowerButton
          v-model:active="quizStore.genderQuiz.assignGenderMale"
        />
        <h3>男性</h3>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import NumPicker from "@/components/compose/NumPicker.vue";
import BaseFlowerButton from "@/components/base/BaseFlowerButton.vue";
import { useQuizStore } from "@/stores/quizStore";
import { computed } from "vue";

const quizStore = useQuizStore();

</script>
<style scoped>
.assign-gender {
  display: flex;
  justify-content: space-around;
}
</style>
