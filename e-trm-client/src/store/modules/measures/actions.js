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

import { Measures } from '@/services'
import _ from 'lodash'
export const list = ({commit}, search) => {
  Measures.list(search.query, search.offset, search.limit)
    .then((measures) => {
      commit(SET_MEASURES, measures)
    })
    .catch((error) => {
      commit(SET_MEASURE_FETCH_ERROR, error)
    })
}

export const save = ({commit}, measure) => {
  Measures.save(_.cloneDeep(measure))
    .then(() => {
      commit(SET_MEASURE, measure)
    })
    .catch((error) => {
      commit(SET_MEASURE_SAVE_ERROR, error)
    })
}
export const setMeasure = ({commit}, measure) => {
  commit(SET_MEASURE, measure)
}

export const getMeasure = ({commit}, measureId) => {
  Measures.get(measureId)
    .then((measure) => {
      console.log(JSON.stringify(measure), measureId)
      commit(SET_MEASURE, measure)
    })
    .catch((error) => {
      commit(SET_MEASURE_FETCH_ERROR, error)
    })
}
export const create = ({commit}, measure) => {
  commit(SET_MEASURE, measure)
  Measures.create(measure)
    .then((id) => {
      commit(CLEAR_MEASURE)
    })
    .catch((error) => {
      commit(SET_MEASURE_CREATE_ERROR, error)
    })
}

export const setCurrentTab = ({commit}, currentTab) => {
  commit(SET_MEASURE_CURRENT_TAB, currentTab)
}

export const setMeasureAttribute = ({commit}, attribute) => {
  commit(SET_MEASURE_ATTRIBUTE, attribute)
}

export const clearMeasure = ({commit}) => {
  commit(CLEAR_MEASURE)
}
