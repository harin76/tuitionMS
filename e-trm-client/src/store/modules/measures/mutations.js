import {
  SET_MEASURES,
  SET_MEASURE_FETCH_ERROR,
  SET_MEASURE_CREATE_ERROR,
  SET_NEW_MEASURE,
  SET_NEW_MEASURE_ATTRIBUTE,
  CLEAR_NEW_MEASURE,
  SET_NEW_MEASURE_CURRENT_TAB
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
  [SET_NEW_MEASURE]: (state, newMeasure) => {
    state.newMeasure = newMeasure
  },
  [SET_NEW_MEASURE_ATTRIBUTE]: (state, attribute) => {
    state.newMeasure = Object.assign({}, state, attribute)
  },
  [CLEAR_NEW_MEASURE]: (state) => {
    state.newMeasure = {
      name: null,
      description: null,
      version: null,
      referenceTables: [],
      lookupTables: [],
      algorithm: null
    }
    state.newMeasureCurrentTab = 'general'
  },
  [SET_NEW_MEASURE_CURRENT_TAB]: (state, currentTab) => {
    state.newMeasureCurrentTab = currentTab
  }
}

export default mutations
