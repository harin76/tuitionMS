<template>
  <div class="column is-half">
    <div class="field">
      <label class="label">Name</label>
      <p class="control">
        <input class="input" v-model="data.name" type="text" placeholder="Name">
      </p>
    </div>

    <div class="field">
      <label class="label">Description</label>
      <p class="control">
        <textarea class="textarea" placeholder="Description"></textarea>
      </p>
    </div>

    <div class="field">
      <label class="label">Market Sector</label>
      <p class="control">
        <v-select :value.sync="data.marketSector"
        :options="marketSectors" label="name"></v-select>
      </p>
    </div>

    <div class="field">
      <label class="label">End Use</label>
      <p class="control">
        <p class="control">
          <v-select :value.sync="data.endUse"
          :options="endUses" label="name"></v-select>
        </p>
      </p>
    </div>
    <div class="field">
      <label class="label">Version</label>
      <p class="control">
        <input class="input" type="text" placeholder="Version">
      </p>
    </div>
    <div class="field">
      <label class="label">Valid From</label>
      <p class="control">
        <input class="input" type="date" placeholder="Valid From">
      </p>
    </div>
    <div class="field">
      <label class="label">Valid Until</label>
      <p class="control">
        <input class="input" type="date" placeholder="Valid Until">
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
  props: {
    data: Object,
    marketSectors: Array,
    endUses: Array
  },
  methods: {
    handleChange (field, value) {
      // TODO Handle Change
    }
  }
}
</script>
