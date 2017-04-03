import {
  SET_MEASURES,
  SET_MEASURE_FETCH_ERROR,
  SET_MEASURE_CREATE_ERROR,
  SET_MEASURE_SAVE_ERROR,
  SET_MEASURE,
  SET_MEASURE_ATTRIBUTE,
  CLEAR_MEASURE,
  SET_MEASURE_CURRENT_TAB
} from '@/store/mutation-types'

const mutations = {
  [SET_MEASURES]: (state, measures) => {
    state.measures = measures
    // clear errors if any
    state.errors = null
  },
  [SET_MEASURE_FETCH_ERROR]: (state, value) => {
    state.errors = value
  },
  [SET_MEASURE_CREATE_ERROR]: (state, value) => {
    state.errors = value
  },
  [SET_MEASURE_SAVE_ERROR]: (state, value) => {
    state.errors = value
  },
  [SET_MEASURE]: (state, measure) => {
    state.measure = measure
  },
  [SET_MEASURE_ATTRIBUTE]: (state, attribute) => {
    state.measure = Object.assign({}, state.measure, attribute)
  },
  [CLEAR_MEASURE]: (state) => {
    state.measure = {
      name: null,
      description: null,
      currentVersion: null,
      referenceTables: [],
      lookupTables: [],
      algorithm: null
    }
    state.measureCurrentTab = 'general'
  },
  [SET_MEASURE_CURRENT_TAB]: (state, currentTab) => {
    state.measureCurrentTab = currentTab
  }
}

export default mutations
