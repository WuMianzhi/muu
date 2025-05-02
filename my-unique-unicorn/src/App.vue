<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import BaseColorProgressBar from './components/base/BaseColorProgressBar.vue';
import PageButton from './components/base/PageButton.vue';
import { routes } from './router';
import { useRoute, useRouter } from 'vue-router';

const isWelcome = ref(true)
const pageIdx = ref(0)
const router = useRouter()

onMounted(() => {
  const route = useRoute()
  console.log('Mounted:', route.path, route.fullPath)
  findRouteIdx(route)

  watch(() => route.path, (newPath) => {
    console.log('Route changed to:', newPath)
    findRouteIdx(route)
  }, { immediate: true }) // run once immediately too
})

const findRouteIdx = (route) => {
  if (route.path === '/') {
    isWelcome.value = false
    return
  }
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].path === route.path) {
      pageIdx.value = i - 1
      break
    }
  }
}


const goNextPage = () => {
  pageIdx.value < routes.length - 2 ? pageIdx.value++ : null
  router.push(routes[pageIdx.value + 1].path)
}

const goPrevPage = () => {
  pageIdx.value < 1 ? null : pageIdx.value--
  router.push(routes[pageIdx.value + 1].path)
}

</script>

<template>
  <div class="placeholder" :class="isWelcome ? '' : 'remove'"></div>
  <header>
    <div class="wrapper" :class="isWelcome ? 'bigger' : 'color-bg'">
      <img src="./assets/unicorn.png" />
    </div>
  </header>

  <main :class="isWelcome ? '' : 'content'">
    <router-view></router-view>
  </main>

  <footer class="footer">
    <button class="start-btn " v-if="isWelcome" @click="isWelcome = !isWelcome">
      开始测试
    </button>
    <div class="page-control" v-else>
      <PageButton @click="goPrevPage">
        <img class="btn-inner-img reverse" src="./assets/right_arrow.svg" />
      </PageButton>
      <BaseColorProgressBar v-model:selected-index="pageIdx" />
      <PageButton @click="goNextPage">
        <img class="btn-inner-img" src="./assets/right_arrow.svg" />
      </PageButton>
    </div>

  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  flex-shrink: 1;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrapper {
  height: 100%;
}

.color-bg {
  background:
    radial-gradient(circle at 0% 0%, #faccc158, transparent),
    radial-gradient(circle at 0% 100%, #fef1bbc6, transparent),
    radial-gradient(circle at 100% 00%, #a4f59d66, transparent),
    radial-gradient(circle at 100% 100%, #e4befd69, transparent);
  background-size: 400%;
  animation: moveBackground 16s ease infinite;
  border-radius: .5rem;
}

.footer,
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.page-control {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wrapper {
  width: calc(100vw - 4rem);
  transition: all ease-in-out .36s;
}

.start-btn {
  padding: 1rem 4rem;
  font-size: 2rem;
  font-weight: bolder;
  box-sizing: border-box;
  border: 4px solid rgba(254, 254, 254, 0.353);
  border-radius: 4rem;
  color: #ffffff;
  background: linear-gradient(60deg, #fbab99, #f6e49c,
      #a5f59d, #9df5dc, #9dbaf5, #d29df5);
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
  width: 1rem;
  height: 1rem;
}

.content {
  height: 60vh;
  margin: 1rem 0;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1rem;
  transition: all ease-in-out .36s;
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
</style>
