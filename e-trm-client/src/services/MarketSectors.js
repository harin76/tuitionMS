const marketSectors = [
  {
    code: 'RS',
    name: 'Residential',
    description: ''
  },
  {
    code: 'CI',
    name: 'Commercial & Industrial',
    description: ''
  }
]

const list = (query, offset, limit) => {
  return new Promise((resolve, reject) => resolve(marketSectors))
}

export default {
  list
}
