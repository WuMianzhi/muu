// stores/quizStore.ts
import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    genderQuiz: {
      genderIdentity: [
        {
          name: "非二元性别",
          val: 10,
          startColor: [235, 135, 134],
          endColor: [239, 198, 157],
        },
        {
          name: "跨性别",
          val: 10,
          startColor: [243, 206, 160],
          endColor: [241, 235, 138],
        },
        {
          name: "女人/女孩",
          val: 10,
          startColor: [243, 240, 136],
          endColor: [195, 241, 166],
        },
        {
          name: "男人/男孩",
          val: 10,
          startColor: [184, 233, 162],
          endColor: [138, 233, 239],
        },
        {
          name: "自定义！",
          val: 10,
          startColor: [124, 212, 218],
          endColor: [138, 137, 238],
        },
      ],
      genderExpression: [
        {
          name: "中性的不被定义的",
          val: 10,
          startColor: [235, 135, 134],
          endColor: [239, 198, 157],
        },
        {
          name: "阴柔的/女性化的",
          val: 10,
          startColor: [243, 206, 160],
          endColor: [241, 235, 138],
        },
        {
          name: "阳刚的/男性化的",
          val: 10,
          startColor: [243, 240, 136],
          endColor: [195, 241, 166],
        },
      ],
      assignGenderMale: true,
      sexualOrientation: [
        {
          name: "非二元性别",
          val: 10,
          startColor: [235, 135, 134],
          endColor: [239, 198, 157],
        },
        {
          name: "跨性别",
          val: 10,
          startColor: [243, 206, 160],
          endColor: [241, 235, 138],
        },
        {
          name: "女人/女孩",
          val: 10,
          startColor: [243, 240, 136],
          endColor: [195, 241, 166],
        },
        {
          name: "男人/男孩",
          val: 10,
          startColor: [191, 243, 169],
          endColor: [138, 233, 240],
        },
        {
          name: "（自定义！） ",
          val: 10,
          startColor: [133, 228, 236],
          endColor: [137, 135, 233],
        },
      ],
      physicalAttract: [
        {
          name: "非二元性别",
          val: 10,
          startColor: [235, 135, 134],
          endColor: [239, 198, 157],
        },
        {
          name: "跨性别男性",
          val: 10,
          startColor: [243, 206, 160],
          endColor: [241, 235, 138],
        },
        {
          name: "跨性别女性",
          val: 10,
          startColor: [243, 240, 136],
          endColor: [195, 241, 166],
        },
        {
          name: "顺性别女性",
          val: 10,
          startColor: [184, 233, 162],
          endColor: [138, 233, 239],
        },
        {
          name: "顺性别男性",
          val: 10,
          startColor: [124, 212, 218],
          endColor: [138, 137, 238],
        },
      ],
      isPhysicalAttract: true,
      intimateAttract: [
        {
          name: "非二元性别",
          val: 10,
          startColor: [235, 135, 134],
          endColor: [239, 198, 157],
        },
        {
          name: "跨性别男性",
          val: 10,
          startColor: [243, 206, 160],
          endColor: [241, 235, 138],
        },
        {
          name: "跨性别女性",
          val: 10,
          startColor: [243, 240, 136],
          endColor: [195, 241, 166],
        },
        {
          name: "顺性别女性",
          val: 10,
          startColor: [184, 233, 162],
          endColor: [138, 233, 239],
        },
        {
          name: "顺性别男性",
          val: 10,
          startColor: [124, 212, 218],
          endColor: [138, 137, 238],
        },
      ],
      isIntimateAttract: true,
    },
  }),
  actions: {
    setGenderIdentity(value: number[]) {
      this.genderQuiz.genderIdentity = value;
    },
  },
});
