<template>
  <div class="quiz-container">
    <h1>{{ $t("physical.title") }}</h1>

    <div class="vig">
      <div class="title-container">
        <h3>{{ $t("physical.vagina") }}</h3>
        <h3>{{ $t("physical.undifferentiated") }}</h3>
        <h3>{{ $t("physical.penis") }}</h3>
      </div>
      <ColorBar v-model:val="quizStore.genderQuiz.physicalTrailPercent" />
      <div class="phy-img-container">
        <img src="../assets/img/gender_part_1_six.png" alt="0" />
        <img src="../assets/img/gender_part_2_six.png" alt="1" />
        <img src="../assets/img/gender_part_3_six.png" alt="2" />
        <img src="../assets/img/gender_part_4_six.png" alt="3" />
        <img src="../assets/img/gender_part_5_six.png" alt="4" />
        <img src="../assets/img/gender_part_6_six.png" alt="5" />
      </div>
    </div>

    <div class="hormone-container">
      <template v-for="quiz in quizStore.genderQuiz.physicalTrail">
        <ImgNumPicker
          :start-color="quiz.startColor"
          :end-color="quiz.endColor"
          v-model:val="quiz.val"
          :title="$t(quiz.name)"
          :img="quiz.img"
          :mode="mode"
        />
      </template>
    </div>

    <div class="chromosome-container">
      <h3>{{ $t("physical.chromosomes") }}</h3>
      <div class="chromosome-panel" v-if="mode === 'SHOW'">
        <span>X</span>
        <AxisControl v-model:idx="firstIdx" />
        <AxisControl v-model:idx="secondIdx" />
      </div>
      <h3 v-else>{{ res }}</h3>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ColorBar from "@/components/base/ColorBar.vue";
import ImgNumPicker from "@/components/compose/ImgNumPicker.vue";
import AxisControl from "@/components/base/AxisControlPad.vue";
import { useQuizStore } from "@/stores/quizStore";
import { computed, ref, watch } from "vue";

const quizStore = useQuizStore();

const firstIdx = ref(0);
const secondIdx = ref(2);

const res = computed(() => {
  const chromosomeArray = ["X", "Y", "-"];
  return `X${chromosomeArray[firstIdx.value]}${
    secondIdx.value == 2 ? "" : chromosomeArray[secondIdx.value]
  }`;
});

watch([firstIdx, secondIdx], () => {
  const chromosomeArray = ["X", "Y", "-"];
  const res = `X${chromosomeArray[firstIdx.value]}${
    secondIdx.value == 2 ? "" : chromosomeArray[secondIdx.value]
  }`;

  quizStore.genderQuiz.chromosome = res;
});

defineProps({
  mode: {
    type: String,
    default: "SHOW",
  },
});
</script>
<style scoped>
img {
  width: 2.5rem;
  height: 2.5rem;
  mix-blend-mode: multiply;
}

.quiz-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.phy-img-container,
.title-container {
  display: flex;
  justify-content: space-between;
}

.chromosome-container {
  display: flex;
  gap: 1rem;
}

.chromosome-panel {
  display: flex;
  border-radius: 2rem;
  padding: 1rem;
  border: 7px solid rgba(255, 255, 255, 0.3);
  flex: 1 0 auto;
  justify-content: space-between;
  font-weight: 600;
  align-items: center;
  background: linear-gradient(
      90deg,
      #e4f2ff 0%,
      rgba(243, 243, 230, 0.478261) 52.08%,
      rgba(236, 224, 236, 0.5) 100%
    ),
    linear-gradient(
      180deg,
      rgba(208, 232, 255, 0.2) 0%,
      rgba(249, 249, 213, 0.1979) 47.06%,
      rgba(255, 215, 253, 0) 96.12%
    );
  backdrop-filter: blur(1rem);
  box-shadow: -9px -9px 16px 0px #ffffff99, 9px 9px 16px 0px #bfd0e999;
}

span {
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 1rem;
  font-size: 1rem;
  color: rgba(188, 188, 188, 1);
  background: linear-gradient(
    to bottom,
    #e4f2ff 0%,
    rgba(243, 243, 230, 0.5) 52.08%,
    rgba(236, 224, 236, 0.5) 100%
  );
  box-shadow: -9px -9px 16px 0px rgba(255, 255, 255, 0.6),
    9px 9px 16px 0px rgba(194, 211, 237, 0.6);
}
</style>
