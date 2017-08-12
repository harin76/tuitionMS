import {
  SET_STUDENTS,
  SET_STUDENT_FETCH_ERROR,
  SET_STUDENT_CREATE_ERROR,
  SET_STUDENT_SAVE_ERROR,
  SET_STUDENT,
  CLEAR_STUDENT
} from '@/store/mutation-types'

import { Students } from '@/services'
import _ from 'lodash'

export const list = ({commit}, search) => {
  Students.list(search.query, search.offset, search.limit)
    .then((response) => {
      commit(SET_STUDENTS, response.data.data)
    })
    .catch((error) => {
      commit(SET_STUDENT_FETCH_ERROR, error)
    })
}

export const save = ({commit}, student) => {
  Students.save(_.cloneDeep(student))
    .then(() => {
      commit(SET_STUDENT, student)
    })
    .catch((error) => {
      commit(SET_STUDENT_SAVE_ERROR, error)
    })
}

export const setStudent = ({commit}, student) => {
  commit(SET_STUDENT, student)
}

export const getStudent = ({commit}, studentId) => {
  Students.get(studentId)
    .then((student) => {
      console.log(JSON.stringify(student), studentId)
      commit(SET_STUDENT, student)
    })
    .catch((error) => {
      commit(SET_STUDENT_FETCH_ERROR, error)
    })
}

export const create = ({commit}, student) => {
  commit(SET_STUDENT, student)
  Students.create(student)
    .then((id) => {
      commit(CLEAR_STUDENT)
    })
    .catch((error) => {
      commit(SET_STUDENT_CREATE_ERROR, error)
    })
}

export const clearStudent = ({commit}) => {
  commit(CLEAR_STUDENT)
}
