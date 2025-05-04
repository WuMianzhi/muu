<template>
  <div>
    <h1>{{ $t("attraction_title.physical_attraction") }}</h1>

    <div>
      <div class="switcher-container">
        <BaseSwitch
          v-model:checked="quizStore.genderQuiz.isPhysicalAttract"
          :mode="mode"
        />
      </div>
      <template v-for="(quiz, idx) in quizStore.genderQuiz.physicalAttract">
        <NumPicker
          :title="$t(quiz.name)"
          v-model:val="quiz.val"
          :start-color="quiz.startColor"
          :end-color="quiz.endColor"
          :mode="mode"
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

defineProps({
  mode: {
    type: String,
    default: "SHOW",
  },
});
</script>
<style scoped>
.switcher-container {
  display: flex;
  justify-content: center;
}
</style>
