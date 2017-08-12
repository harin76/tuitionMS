import axios from 'axios'
import Constants from '@/constants'

const URL = Constants.BASE_API_URL + '/students'

const list = (query, page, limit) => {
  return axios.get(URL, {
    params: {
      ...query,
      page,
      limit
    }
  })
}

const get = (id) => {
  return axios.get(URL, {
    params: {
      id
    }
  })
}

const save = (student) => {
  if (student._id) {
    return axios.put(URL + '/' + student._id, student)
  } else {
    return axios.post(URL, student)
  }
}

export default {
  list,
  get,
  save
}
