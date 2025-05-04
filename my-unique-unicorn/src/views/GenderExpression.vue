<template>
  <div>
    <h1>{{ $t("expression.title") }}</h1>

    <div>
      <template v-for="(quiz, idx) in quizStore.genderQuiz.genderExpression">
        <NumPicker
          :title="$t(quiz.name)"
          v-model:val="quiz.val"
          :start-color="quiz.startColor"
          :end-color="quiz.endColor"
          :mode="mode"
        />
      </template>
    </div>

    <h1>{{ $t("assigned_sex.title") }}</h1>
    <div class="assign-gender">
      <div class="left">
        <BaseFlowerButton
          :active="!quizStore.genderQuiz.assignGenderMale"
          @click="
            quizStore.genderQuiz.assignGenderMale =
              !quizStore.genderQuiz.assignGenderMale
          "
        />
        <h3>{{$t('assigned_sex.female')}}</h3>
      </div>
      <div class="right">
        <BaseFlowerButton
          v-model:active="quizStore.genderQuiz.assignGenderMale"
        />
        <h3>{{$t('assigned_sex.male')}}</h3>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import NumPicker from "@/components/compose/NumPicker.vue";
import BaseFlowerButton from "@/components/base/BaseFlowerButton.vue";
import { useQuizStore } from "@/stores/quizStore";

const quizStore = useQuizStore();
defineProps({
  mode: {
    type: String,
    default: "SHOW",
  },
});
</script>
<style scoped>
.assign-gender {
  display: flex;
  justify-content: space-around;
}
</style>
