<template>
  <div class="container">
    <div ref="captureTarget" class="capture-target">
      <h1 class="main_title">~ {{ $t("base.main_title") }} ~</h1>
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
      <div class="qrcode-container">
        <img
          class="qrcode"
          src="../assets/img/qrCode.png"
          alt="unicorn.gende.rs"
          srcset=""
        />
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

.main_title {
  font-size: 2rem;
}

.capture-target {
  position: absolute; /* 移出正常文档流 */
  /* 放到屏幕外 */
  left: -9999px;
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
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.35rem;
  font-weight: bold;
  color: white;
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
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  animation: moveBackground 16s ease infinite;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1),
    inset 1px 1px 2px rgba(255, 255, 255, 0.25),
    inset -1px -1px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
}

.save-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15),
    inset 1px 1px 2px rgba(255, 255, 255, 0.4),
    inset -1px -1px 2px rgba(0, 0, 0, 0.3);
}

.save-btn:active {
  transform: scale(0.98);
}
/* Apply animation */

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

.qrcode-container {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 4rem;
  height: 4rem;
}

.qrcode {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
