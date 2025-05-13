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

    <h1 v-if="mode == 'SHOW'">{{ $t("assigned_sex.title") }}</h1>
    <div class="assign-gender" v-if="mode == 'SHOW'">
      <div class="left">
        <BaseFlowerButton
          :active="!quizStore.genderQuiz.assignGenderMale"
          @click="
            quizStore.genderQuiz.assignGenderMale =
              !quizStore.genderQuiz.assignGenderMale
          "
        />
        <h3>{{ $t("assigned_sex.female") }}</h3>
      </div>
      <div class="right">
        <BaseFlowerButton
          v-model:active="quizStore.genderQuiz.assignGenderMale"
        />
        <h3>{{ $t("assigned_sex.male") }}</h3>
      </div>
    </div>

    <div v-else style="margin: 2rem;">
      <h3>
        {{ $t("assigned_sex.title") }}:
        {{
          $t(
            quizStore.genderQuiz.assignGenderMale
              ? "assigned_sex.male"
              : "assigned_sex.female"
          )
        }}
      </h3>
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
