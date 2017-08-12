import {
  SET_STUDENTS,
  SET_STUDENT_FETCH_ERROR,
  SET_STUDENT_CREATE_ERROR,
  SET_STUDENT_SAVE_ERROR,
  SET_STUDENT,
  CLEAR_STUDENT
} from '@/store/mutation-types'

const mutations = {
  [SET_STUDENTS]: (state, students) => {
    state.students = students
    // clear errors if any
    state.errors = null
  },
  [SET_STUDENT_FETCH_ERROR]: (state, value) => {
    state.errors = value
  },
  [SET_STUDENT_CREATE_ERROR]: (state, value) => {
    state.errors = value
  },
  [SET_STUDENT_SAVE_ERROR]: (state, value) => {
    state.errors = value
  },
  [SET_STUDENT]: (state, student) => {
    state.student = student
  },
  [CLEAR_STUDENT]: (state) => {
    state.student = {
      firstName: null,
      lastName: null,
      dateOfBirth: null,
      school: null,
      standard: null,
      father: {name: null, mobile: null, email: null},
      mother: {name: null, mobile: null, email: null},
      address: null
    }
  }
}

export default mutations
