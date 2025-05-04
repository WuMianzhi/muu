import Index from "@/views/Index.vue";
import GenderIdentity from "@/views/GenderIdentity.vue";
import GenderExpression from "@/views/GenderExpression.vue";
import GenderAttractions from "@/views/GenderAttraction.vue";
import IntimateRelationshipsAttraction from "@/views/IntimateAttraction.vue";
import PhysicalAttraction from "@/views/PhysicalAttraction.vue";
import PhysiologicalTrait from "@/views/PhysiologicalTrait.vue";
import SexualOrientation from "@/views/SexualOrientation.vue";
import EndPage from "@/views/EndPage.vue";

export const routes = [
  { path: "/", component: Index },
  { path: "/gender-identity", component: GenderIdentity },
  { path: "/gender-expression", component: GenderExpression },
  { path: "/physical-traits", component: PhysiologicalTrait },
  { path: "/sexual-orientation", component: SexualOrientation },
  { path: "/physical-attraction", component: PhysicalAttraction },
  { path: "/intimate-attraction", component: IntimateRelationshipsAttraction },
  { path: "/end-page", component: EndPage },
];
