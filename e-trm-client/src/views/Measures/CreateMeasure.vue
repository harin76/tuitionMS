v<template>
  <section class="section">
    <div class="columns">
      <div class="column is-8">
        <h1 class="title">{{title}}</h1>
      </div>
      <div class="column is-4">
        <div class="block is-pulled-right">
          <a class="button is-primary" v-on:click="handleCreate">Create</a>
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
          <general-section v-if="currentTab === 'general'"
            :data="generalSectionAttributes" :marketSectors="marketSectors" :endUses="endUses"></general-section>
          <algorithm-section v-if="currentTab === 'algorithm'"
            :script="newMeasure.algorithm"
            v-on:onChange="handleScriptChanged($event)"></algorithm-section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GeneralSection from './GeneralSection'
import AlgorithmSection from './AlgorithmSection'

export default {
  name: 'create-measure',
  created () {
  },
  components: {
    GeneralSection,
    AlgorithmSection
  },
  data () {
    return {
      title: 'New Measure',
      tabs: [
        {name: 'general', caption: 'General'},
        {name: 'referenceTables', caption: 'Reference Tables'},
        {name: 'lookupTables', caption: 'Lookup Tables'},
        {name: 'parameters', caption: 'Parameters'},
        {name: 'algorithm', caption: 'Algorithm'}
      ]
    }
  },
  computed: {
    ...mapGetters({
      endUses: 'endUses',
      marketSectors: 'marketSectors',
      newMeasure: 'measures/newMeasure',
      currentTab: 'measures/currentTab'
    }),
    generalSectionAttributes: function () {
      const { name, description, marketSector, endUse, version, validFrom, validUntil } = this.newMeasure
      return { name, description, marketSector, endUse, version, validFrom, validUntil }
    }
  },
  methods: {
    ...mapActions('measures', [
      'create',
      'setCurrentTab',
      'setNewMeasureAttribute',
      'clearNewMeasure'
    ]),
    handleCreate () {
      console.log(this.newMeasure.algorithm)
    },
    handleCancel () {
      this.clearNewMeasure()
      this.$router.push('/list-measures')
    },
    handleTabClick (tab) {
      this.setCurrentTab(tab)
    },
    isActive (tab) {
      return tab === this.currentTab
    },
    handleScriptChanged (script) {
      this.setNewMeasureAttribute({algorithm: script})
    }
  }
}
</script>
