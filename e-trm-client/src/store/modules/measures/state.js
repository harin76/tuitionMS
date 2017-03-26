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
  newMeasure: createNew(),
  newMeasureCurrentTab: 'general'
}

export default state
