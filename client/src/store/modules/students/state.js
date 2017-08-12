const createNew = () => ({
  firstName: null,
  lastName: null,
  dateOfBirth: null,
  school: null,
  standard: null,
  father: {name: null, mobile: null, email: null},
  mother: {name: null, mobile: null, email: null},
  address: null
})

const state = {
  students: [],
  errors: null,
  student: createNew()
}

export default state
