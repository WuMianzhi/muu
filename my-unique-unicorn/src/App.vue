<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import BaseColorProgressBar from "./components/base/BaseColorProgressBar.vue";
import PageButton from "./components/base/PageButton.vue";
import { routes } from "./router";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const isWelcome = ref(true);
const pageIdx = ref(0);
const router = useRouter();

onMounted(() => {
  const route = useRoute();

  watch(
    () => route.path,
    (newPath) => {
      findRouteIdx(route);
    },
    { immediate: true }
  ); // run once immediately too
});

const findRouteIdx = (route) => {
  console.log(route.path);

  if (route.path === "/") {
    isWelcome.value = true;
    return;
  }

  for (let i = 0; i < routes.length; i++) {
    if (routes[i].path === route.path) {
      pageIdx.value = i - 1;
      isWelcome.value = false;
      break;
    }
  }
};

const toFirst = () => {
  transitionName.value = "fade-next";
  router.push("/gender-identity");
};

const goNextPage = () => {
  transitionName.value = "fade-next";
  pageIdx.value < routes.length - 2 ? pageIdx.value++ : null;
  router.push(routes[pageIdx.value + 1].path);
};

const goPrevPage = () => {
  transitionName.value = "fade-prev";
  pageIdx.value < 1 ? null : pageIdx.value--;
  router.push(routes[pageIdx.value + 1].path);
};

const toggleLocale = () => {
  locale.value == "zh" ? (locale.value = "en") : (locale.value = "zh");
};

const transitionName = ref("fade-next");
</script>

<template>
  <div class="placeholder" :class="isWelcome ? '' : 'remove'"></div>
  <header :class="isWelcome ? 'bigger' : 'color-bg'">
    <img class="unicorn-img" src="./assets/unicorn.svg" />
    <div @click="toggleLocale" class="lang-switch">
      🌐 {{ locale === "zh" ? "English" : "中文" }}
    </div>
  </header>

  <main :class="isWelcome ? '' : 'main-content'">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <footer class="footer">
    <button class="start-btn" v-if="isWelcome" @click="toFirst">
      {{ $t("base.start_test") }}
    </button>
    <div class="page-control" v-else>
      <PageButton @click="goPrevPage">
        <img class="btn-inner-img" src="./assets/icons/left.png" />
      </PageButton>
      <BaseColorProgressBar v-model:selected-index="pageIdx" />
      <PageButton @click="goNextPage">
        <img class="btn-inner-img" src="./assets/icons/right.png" />
      </PageButton>
    </div>
  </footer>
</template>

<style scoped>
header {
  height: 15vh;
  flex: 1 ;
  display: flex;
  justify-content: center;
}

main {
  flex: 0 0 auto;
  overflow: auto;
  height: fit-content;
  /* height: max-content; */
}

footer {
  flex: 0 0 auto;
}

.main-content {
  margin: 1rem 0;
  background: rgba(255, 255, 255, 0.5);
  padding: 1rem;
  text-align: center;
  color: #bcbcbc;
  border-radius: 1rem;
  transition: all ease-in-out 0.36s;
  overflow: auto;
  /* background: linear-gradient(
      123.84deg,
      rgba(229, 229, 229, 0.2) 0.32%,
      rgba(205, 213, 224, 0.2) 32.08%,
      rgba(205, 213, 224, 0.2) 60.87%,
      rgba(255, 255, 255, 0.2) 95.61%
    ),
    linear-gradient(
      160.61deg,
      rgba(255, 255, 255, 0.48) 13.02%,
      rgba(255, 255, 255, 0.4) 55.88%,
      rgba(255, 255, 255, 0) 99.64%
    ); */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.color-bg {
  background: radial-gradient(circle at 0% 0%, #faccc158, transparent),
    radial-gradient(circle at 0% 100%, #fef1bbc6, transparent),
    radial-gradient(circle at 100% 00%, #a4f59d66, transparent),
    radial-gradient(circle at 100% 100%, #e4befd69, transparent);
  background-size: 400%;
  animation: moveBackground 16s ease infinite;
  border-radius: 0.5rem;
}

.footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.unicorn-img {
  height: 100%;
  /* width: 100%; */
}

.page-control {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.start-btn {
  padding: 1rem 4rem;
  font-size: 2rem;
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

.btn-inner-img {
  width: 0.5rem;
  height: auto;
}

.placeholder {
  height: 10rem;
}

.remove {
  height: 0;
  width: 0;
  visibility: hidden;
  /* display: none; */
}

.bigger {
  transform: scale(1.5);
}

.reverse {
  transform: rotate(180deg);
}

/* Define the transition */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.36s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: scale(0.68);
}

.lang-switch {
  cursor: pointer;
  font-size: 14px;
  padding: 6px 10px;
  border-radius: 6px;
  transition: all 0.3s;
  user-select: none;
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: rgba(0, 0, 0, 0.5);
  background: #eafff980;
  backdrop-filter: blur(1rem);
}
.lang-switch:hover {
  background-color: #eee;
}

/* 动画：前进 */
.fade-next-enter-active,
.fade-next-leave-active {
  transition: all 0.36s ease-in-out;
}
.fade-next-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.fade-next-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

/* 动画：后退 */
.fade-prev-enter-active,
.fade-prev-leave-active {
  transition: all 0.36s ease-in-out;
}
.fade-prev-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-prev-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
