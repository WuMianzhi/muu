// stores/quizStore.ts
import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    genderQuiz: {
      genderIdentity: [
        {
          name: "identity.non_binary",
          val: 10,
          startColor: [235, 135, 134],
          endColor: [239, 198, 157],
        },
        {
          name: "identity.transgender",
          val: 10,
          startColor: [243, 206, 160],
          endColor: [241, 235, 138],
        },
        {
          name: "identity.woman",
          val: 10,
          startColor: [243, 240, 136],
          endColor: [195, 241, 166],
        },
        {
          name: "identity.man",
          val: 10,
          startColor: [184, 233, 162],
          endColor: [138, 233, 239],
        },
        {
          name: "identity.custom",
          val: 10,
          startColor: [124, 212, 218],
          endColor: [138, 137, 238],
        },
      ],
      genderExpression: [
        {
          name: "expression.neutral",
          val: 10,
          startColor: [235, 135, 134],
          endColor: [239, 198, 157],
        },
        {
          name: "expression.feminine",
          val: 10,
          startColor: [243, 206, 160],
          endColor: [241, 235, 138],
        },
        {
          name: "expression.masculine",
          val: 10,
          startColor: [243, 240, 136],
          endColor: [195, 241, 166],
        },
      ],
      assignGenderMale: true,
      sexualOrientation: [
        {
          name: "identity.non_binary",
          val: 10,
          startColor: [235, 135, 134],
          endColor: [239, 198, 157],
        },
        {
          name: "identity.transgender",
          val: 10,
          startColor: [243, 206, 160],
          endColor: [241, 235, 138],
        },
        {
          name: "identity.woman",
          val: 10,
          startColor: [243, 240, 136],
          endColor: [195, 241, 166],
        },
        {
          name: "identity.man",
          val: 10,
          startColor: [191, 243, 169],
          endColor: [138, 233, 240],
        },
        {
          name: "identity.custom",
          val: 10,
          startColor: [133, 228, 236],
          endColor: [137, 135, 233],
        },
      ],
      physicalAttract: [
        {
          name: "identity.non_binary",
          val: 10,
          startColor: [235, 135, 134],
          endColor: [239, 198, 157],
        },
        {
          name: "identity_type.trans_male",
          val: 10,
          startColor: [243, 206, 160],
          endColor: [241, 235, 138],
        },
        {
          name: "identity_type.trans_female",
          val: 10,
          startColor: [243, 240, 136],
          endColor: [195, 241, 166],
        },
        {
          name: "identity_type.cis_female",
          val: 10,
          startColor: [184, 233, 162],
          endColor: [138, 233, 239],
        },
        {
          name: "identity_type.cis_male",
          val: 10,
          startColor: [124, 212, 218],
          endColor: [138, 137, 238],
        },
      ],
      isPhysicalAttract: true,
      intimateAttract: [
        {
          name: "identity.non_binary",
          val: 10,
          startColor: [235, 135, 134],
          endColor: [239, 198, 157],
        },
        {
          name: "identity_type.trans_male",
          val: 10,
          startColor: [243, 206, 160],
          endColor: [241, 235, 138],
        },
        {
          name: "identity_type.trans_female",
          val: 10,
          startColor: [243, 240, 136],
          endColor: [195, 241, 166],
        },
        {
          name: "identity_type.cis_female",
          val: 10,
          startColor: [184, 233, 162],
          endColor: [138, 233, 239],
        },
        {
          name: "identity_type.cis_male",
          val: 10,
          startColor: [124, 212, 218],
          endColor: [138, 137, 238],
        },
      ],
      isIntimateAttract: true,
      physicalTrail: [
        {
          name: "physical.estrogen",
          val: 10,
          startColor: [235, 135, 134],
          endColor: [239, 198, 157],
          img: "../../assets/img/androgens.svg",
        },
        {
          name: "physical.testosterone",
          val: 10,
          startColor: [243, 206, 160],
          endColor: [241, 235, 138],
          img: "../../assets/img/androgens.svg",
        },
        {
          name: "physical.progesterone",
          val: 10,
          startColor: [243, 240, 136],
          endColor: [195, 241, 166],
          img: "../../assets/img/androgens.svg",
        },
      ],
      physicalTrailPercent: 50,
      chromosome: "xy",
    },
  }),
  actions: {
    setGenderIdentity(value: number[]) {
      this.genderQuiz.genderIdentity = value;
    },
  },
});
