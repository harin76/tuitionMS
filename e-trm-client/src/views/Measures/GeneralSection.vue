<template>
  <div class="column is-half">
    <div class="field">
      <label class="label">Name</label>
      <p class="control">
        <input class="input" v-model="name" type="text" placeholder="Name" @change="handleChange">
      </p>
    </div>

    <div class="field">
      <label class="label">Description</label>
      <p class="control">
        <textarea class="textarea" v-model="description" placeholder="Description" @change="handleChange"></textarea>
      </p>
    </div>

    <div class="field">
      <label class="label">Market Sector</label>
      <p class="control">
        <v-select :value="marketSector"
        :options="marketSectors" label="name" :on-change="handleMarketSectorChange"></v-select>
      </p>
    </div>

    <div class="field">
      <label class="label">End Use</label>
      <p class="control">
        <p class="control">
          <v-select :value="endUse"
          :options="filteredEndUses" :on-change="handleEndUseChange" label="name"></v-select>
        </p>
      </p>
    </div>
    <div class="field">
      <label class="label">Version</label>
      <p class="control">
        <input class="input" v-model="currentVersion" type="text" placeholder="Version" @change="handleChange">
      </p>
    </div>
    <div class="field">
      <label class="label">Valid From</label>
      <p class="control">
        <input class="input" v-model="validFrom" type="date" placeholder="Valid From" @change="handleChange">
      </p>
    </div>
    <div class="field">
      <label class="label">Valid Until</label>
      <p class="control">
        <input class="input" v-model="validUntil" type="date" placeholder="Valid Until" @change="handleChange">
      </p>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'general-section',
  components: {
    vSelect
  },
  created () {
    this.filteredEndUses = this.endUses
  },
  data () {
    return {
      name: this.data.name || null,
      description: this.data.description || null,
      marketSector: this.lookup(this.marketSectors, 'name', this.data.marketSector),
      endUse: this.lookup(this.endUses, 'name', this.data.endUse),
      currentVersion: this.data.currentVersion || null,
      validFrom: this.data.validFrom || null,
      validUntil: this.data.validUntil || null,
      locaEndUses: [],
      localMarketSectors: []
    }
  },
  props: {
    data: Object,
    marketSectors: Array,
    endUses: Array
  },
  methods: {

    handleChange () {
      const val = {
        name: this.name,
        description: this.description,
        marketSector: this.marketSector ? this.marketSector.name : null,
        endUse: this.endUse ? this.endUse.name : null,
        currentVersion: this.currentVersion,
        validFrom: this.validFrom,
        validUntil: this.validUntil
      }

      this.$emit('onChange', val)
    },
    filterEndUses () {
      if (!this.marketSector) {
        this.filteredEndUses = []
      } else {
        this.filteredEndUses = this.endUses.filter((e) => {
          return e.marketSector === this.marketSector.code
        })
      }
      // this.endUse = null
    },
    handleMarketSectorChange (val) {
      this.marketSector = val
      this.filterEndUses()
      if (this.marketSector) {
        this.handleChange()
      }
    },
    handleEndUseChange (val) {
      this.endUse = val
      if (this.endUse) {
        this.handleChange()
      }
    },
    lookup (list, prop, value) {
      if (!list) {
        return null
      }
      return list.find((l) => l[prop] === value)
    }
  }
}
</script>
