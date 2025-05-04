<template>
  <div>
    <h1>{{$t('identity.title')}}</h1>

    <div>
      <template v-for="(quiz, idx) in quizStore.genderQuiz.genderIdentity">
        <NumPicker
          :title="$t(quiz.name)"
          v-model:val="quiz.val"
          :start-color="quiz.startColor"
          :end-color="quiz.endColor"
          :mode="mode"
        >
          <template v-if="quiz.name == '（自定义！）'">
            <input type="text" :placeholder="quiz.name" v-model="quiz.name" class="custom-input" />
          </template>
        </NumPicker>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import NumPicker from "@/components/compose/NumPicker.vue";
import { useQuizStore } from "@/stores/quizStore";

const quizStore = useQuizStore();

defineProps({
  mode: {
    type: String,
    default: "SHOW",
  },
});
</script>

<style lang="css" scoped>
.custom-input {
  padding-top: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  border: none;
  background: transparent;
  color: #bcbcbc;
  border-bottom: 2px solid rgba(190, 216, 251, 0.532);
}

.custom-input::placeholder {
  color: #bcbcbc;
  opacity: 0.8;
}
</style>
