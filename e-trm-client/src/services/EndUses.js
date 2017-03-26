const endUses = [
  {
    marketSector: 'CI',
    name: 'Agricultural',
    description: ''
  },
  {
    marketSector: 'CI',
    name: 'Food Service Equipment',
    description: ''
  },
  {
    marketSector: 'CI',
    name: 'Hot Water',
    description: ''
  },
  {
    marketSector: 'CI',
    name: 'HVAC',
    description: ''
  },
  {
    marketSector: 'CI',
    name: 'Lighting',
    description: ''
  },
  {
    marketSector: 'CI',
    name: 'Miscellaneous',
    description: ''
  },
  {
    marketSector: 'RS',
    name: 'Appliances',
    description: ''
  },
  {
    marketSector: 'RS',
    name: 'Consumer Electronics',
    description: ''
  },
  {
    marketSector: 'RS',
    name: 'HVAC',
    description: ''
  },
  {
    marketSector: 'RS',
    name: 'Hot Water',
    description: ''
  },
  {
    marketSector: 'RS',
    name: 'Shell',
    description: ''
  }
]

const list = (query, offset, limit) => {
  return new Promise((resolve, reject) => resolve(endUses))
}

export default {
  list
}
