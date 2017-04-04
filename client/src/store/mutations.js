import {
  SET_REFERENCE_DATA
} from '@/store/mutation-types'

const mutations = {
  [SET_REFERENCE_DATA]: (state, reference) => {
    state.endUses = reference.endUses
    state.marketSectors = reference.marketSectors
  }
}

export default mutations
