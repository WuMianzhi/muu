<template>
  <div class="container">
    <div ref="captureTarget" class="capture-target">
      <h1>~ {{ $t("base.main_title") }} ~</h1>
      <div class="row1">
        <div>
          <img class="unicorn-img" src="../assets/unicorn.svg" />
        </div>
        <GenderIdentity :mode="'EXPORT'" />
        <SexualOrientation :mode="'EXPORT'" />
        <GenderExpression :mode="'EXPORT'" />
      </div>
      <div class="row2">
        <IntimateAttraction :mode="'EXPORT'" />
        <PhysicalAttraction :mode="'EXPORT'" />
        <PhysiologicalTrait :mode="'EXPORT'" />
      </div>
    </div>

    <button @click="saveAsImage" class="save-btn">
      {{ $t("base.save_pic") }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import html2canvas from "html2canvas";
import GenderExpression from "./GenderExpression.vue";
import GenderIdentity from "./GenderIdentity.vue";
import IntimateAttraction from "./IntimateAttraction.vue";
import PhysicalAttraction from "./PhysicalAttraction.vue";
import PhysiologicalTrait from "./PhysiologicalTrait.vue";
import SexualOrientation from "./SexualOrientation.vue";

const captureTarget = ref(null);
const saveAsImage = async () => {
  if (!captureTarget.value) return;
  const canvas = await html2canvas(captureTarget.value);
  const dataURL = canvas.toDataURL("image/png");

  // 创建一个链接自动下载
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "muu.png";
  link.click();
};
</script>

<style scoped>
.container {
  /* height: 20rem; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.capture-target {
  position: absolute; /* 移出正常文档流 */
  left: -9999px; /* 放到屏幕外 */
  top: 0;
  display: inline-block;
  padding: 2rem;
  margin: 2rem;
}

.row1 {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.row2 {
  display: flex;
  justify-content: space-between;
}

.save-btn {
  padding: 0.5rem 2rem;
  font-size: 1.35rem;
  font-weight: bolder;
  box-sizing: border-box;
  border: 4px solid rgba(254, 254, 254, 0.353);
  border-radius: 4rem;
  color: #ffffff;
  background: linear-gradient(
    60deg,
    #fbab99,
    #f6e49c,
    #a5f59d,
    #9df5dc,
    #9dbaf5,
    #d29df5
  );
  background-size: 400%;
  background-position: 0% 50%;
  /* Start at the left edge */
  animation: moveBackground 16s ease infinite;

  /* Apply animation */
}

@keyframes moveBackground {
  0% {
    background-position: 0% 0%;
    /* Start at the left edge */
  }

  50% {
    background-position: 100% 100%;
    /* Move to the right edge */
  }

  100% {
    background-position: 0% 0%;
    /* Return to the left edge */
  }
}
</style>
