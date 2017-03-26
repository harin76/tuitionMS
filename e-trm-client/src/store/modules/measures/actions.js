import {
  SET_MEASURES,
  SET_MEASURE_FETCH_ERROR,
  SET_MEASURE_CREATE_ERROR,
  SET_NEW_MEASURE,
  SET_NEW_MEASURE_ATTRIBUTE,
  CLEAR_NEW_MEASURE,
  SET_NEW_MEASURE_CURRENT_TAB
} from '@/store/mutation-types'

import { Measures } from '@/services'

export const list = ({commit}, search) => {
  Measures.list(search.query, search.offset, search.limit)
    .then((measures) => {
      commit(SET_MEASURES, measures)
    })
    .catch((error) => {
      commit(SET_MEASURE_FETCH_ERROR, error)
    })
}

export const create = ({commit}, measure) => {
  commit(SET_NEW_MEASURE, measure)
  Measures.create(measure)
    .then((id) => {
      commit(CLEAR_NEW_MEASURE)
    })
    .catch((error) => {
      commit(SET_MEASURE_CREATE_ERROR, error)
    })
}

export const setCurrentTab = ({commit}, currentTab) => {
  commit(SET_NEW_MEASURE_CURRENT_TAB, currentTab)
}

export const setNewMeasureAttribute = ({commit}, attribute) => {
  commit(SET_NEW_MEASURE_ATTRIBUTE, attribute)
}

export const clearNewMeasure = ({commit}) => {
  commit(CLEAR_NEW_MEASURE)
}
