<template>
  <section class="section">
    <div class="columns">
      <div class="column is-8">
        <h1 class="title">{{title}}</h1>
      </div>
      <div class="column is-4">
        <div class="block is-pulled-right">
          <a class="button is-primary" v-on:click="handleSave">{{action}}</a>
          <a class="button is-outlined" v-on:click="handleCancel">Cancel</a>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <div class="tabs is-boxed is-fullheight">
          <ul>
            <li v-for="tab in tabs"
              v-bind:class="[currentTab === tab.name ? 'is-active' : '' ]"
              @click="handleTabClick(tab.name)">
              <a>{{tab.caption}}</a>
            </li>
          </ul>
        </div>
        <div class="columns tab-body">

          <general-section :data="measure"
            :endUses="endUses"
            :marketSectors="marketSectors"
            v-if="currentTab === 'general'"
            v-on:onChange="handleGeneralSectionChanged($event)"
            >
          </general-section>

          <lookup-section v-if="currentTab === 'lookupTables'"
            :data="measure.lookupTables || []"
            v-on:onChange="handleLookupTableChanged($event)"
          >
          </lookup-section>

          <parameter-section v-if="currentTab === 'parameters'"
            :data="measure.parameters || []"
            v-on:onChange="handleParametersChanged($event)"
          >
          </parameter-section>

          <algorithm-section v-if="currentTab === 'algorithm'"
            :script="measure.algorithm"
            v-on:onChange="handleAlgorithmChanged($event)">
          </algorithm-section>

          <test-section v-if="currentTab === 'test'" :measure="measure">
          </test-section>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GeneralSection from './GeneralSection'
import AlgorithmSection from './AlgorithmSection'
import LookupSection from './LookupSection'
import ParameterSection from './ParameterSection'
import TestSection from './TestSection'

export default {
  name: 'measure',
  created () {
    const id = this.$route.params.id
    if (id) {
      this.title = 'Edit Measure'
      this.action = 'Save'
    }
  },
  components: {
    GeneralSection,
    AlgorithmSection,
    LookupSection,
    ParameterSection,
    TestSection
  },
  data () {
    return {
      title: 'Create Measure',
      action: 'Create',
      localData: {},
      tabs: [
        {name: 'general', caption: 'General'},
        // {name: 'referenceTables', caption: 'Reference Tables'},
        {name: 'lookupTables', caption: 'Lookup Tables'},
        {name: 'parameters', caption: 'Parameters'},
        {name: 'algorithm', caption: 'Algorithm'},
        {name: 'test', caption: 'Test'}
      ]
    }
  },
  computed: {
    ...mapGetters({
      endUses: 'endUses',
      marketSectors: 'marketSectors',
      measure: 'measures/measure',
      currentTab: 'measures/currentTab'
    })
  },
  methods: {
    ...mapActions('measures', [
      'save',
      'setMeasure',
      'setCurrentTab',
      'setMeasureAttribute',
      'clearMeasure'
    ]),
    getGeneralSectionAttributes () {
      const { id, name, description, marketSector, endUse, version, validFrom, validUntil } = this.measure
      return { id, name, description, marketSector, endUse, version, validFrom, validUntil }
    },
    handleSave () {
      this.save(this.measure)
    },
    handleCancel () {
      this.clearMeasure()
      this.$router.push('/list-measures')
    },
    handleTabClick (tab) {
      this.setCurrentTab(tab)
    },
    isActive (tab) {
      return tab === this.currentTab
    },
    handleAlgorithmChanged (algorithm) {
      this.setMeasureAttribute({algorithm})
    },
    handleGeneralSectionChanged (attribute) {
      this.setMeasureAttribute(attribute)
    },
    handleLookupTableChanged (lookupTables) {
      this.setMeasureAttribute({lookupTables})
    },
    handleParametersChanged (parameters) {
      this.setMeasureAttribute({parameters})
    }
  }
}
</script>
