const createNew = () => ({
  name: null,
  description: null,
  version: null,
  referenceTables: [],
  lookupTables: [],
  algorithm: null
})

const state = {
  measures: [],
  errors: null,
  measure: createNew(),
  measureCurrentTab: 'general'
}

export default state
