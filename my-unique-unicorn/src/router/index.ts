import Index from '@/views/Index.vue'
import GenderIdentity from '@/views/GenderIdentity.vue'
import GenderExpression from '@/views/GenderExpression.vue'
import GenderAttractions from '@/views/GenderAttractions.vue'
import InitimateRelationshipsAttractions from '@/views/InitimateRelationshipsAttractions.vue'
import PhysiologicalAttractions from '@/views/PhysiologicalAttractions.vue'
import PhysiologicalTraits from '@/views/PhysiologicalTraits.vue'
import SexulaOrientation from '@/views/SexulaOrientation.vue'

export const routes = [
    { path: '/', component: Index },
    { path: '/gender-identity', component: GenderIdentity },
    { path: '/gender-expression', component: GenderExpression },
    { path: '/physiological-traits', component: PhysiologicalTraits },
    { path: '/sexula-orientation', component: SexulaOrientation },
    { path: '/physiological-attractions', component: PhysiologicalAttractions },
    { path: '/initimate-relationships-attraction', component: InitimateRelationshipsAttractions },
]