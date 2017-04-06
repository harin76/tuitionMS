<template>
  <div class="grid-container">
    <nav class="level">
      <div class="level-left">
      </div>
      <div class="level-right">
        <p class="level-item">
          <a class="button is-outlined" v-on:click="handleAddLookup">Add Lookup Table</a>
        </p>
      </div>
    </nav>
    <div class="table-wrapper">
      <table class="table is-narrow is-bordered">
        <thead>
          <tr>
            <th> Name </th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lookup in lookupKeys">
            <td><a v-on:click="handleLookupSelect(lookup)">{{lookup}}</a></td>
            <td class="has-text-centered"><a class="delete is-small" v-on:click="handleDelete(lookup)"></a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <transition name="slide-fade">
      <div class="slider" v-if="show">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
            </p>
            <a class="card-header-icon">
              <span class="icon">
                <a @click="handleClose"><icon name="times" scale="1"></icon></a>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="card-scroll-content">
              <div class="column">
                <div class="block is-pulled-right">
                  <a class="button is-small" @click="handleToggleGrid"> <icon name="th-list"></icon></a>
                </div>
              </div>

              <div class="field">
                <label class="label">Name</label>
                <p class="control">
                  <input class="input" v-model="name" type="text" placeholder="Name">
                </p>
              </div>

              <div class="field">
                <label class="label">Values</label>
                <p class="control" v-if="!grid">
                  <textarea class="textarea csv-bin" rows="10" v-model="values" placeholder="Values"></textarea>
                </p>
                <p class="control" v-if="grid">
                  <div v-if="grid" class="table-wrapper lookup-values-grid">
                    <table class="table is-narrow is-bordered">
                      <tr v-for="row in getRows()">
                        <td v-for="col in row">{{col}}</td>
                      </tr>
                    </table>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item is-primary" v-on:click="handleAdd">{{ this.currentLookup ? 'Save' : 'Add' }}</a>
            <a class="card-footer-item" v-on:click="handleClear">Clear</a>
          </footer>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon.vue'
import 'vue-awesome/icons/table'
import 'vue-awesome/icons/th'
import 'vue-awesome/icons/th-list'
import 'vue-awesome/icons/times'
import Papa from 'papaparse'
import _ from 'lodash'

export default {
  name: 'lookup-section',
  components: {
    Icon
  },
  props: {
    data: { type: Array, required: true }
  },
  data () {
    return {
      name: null,
      values: null,
      lookups: _.cloneDeep(this.data),
      currentLookup: null,
      show: false,
      grid: false
    }
  },
  computed: {
    lookupKeys () {
      return this.lookups.map((l) => l.name)
    }
  },
  methods: {
    handleAdd () {
      Papa.parse(this.values, {
        dynamicTyping: true,
        complete: (results) => {
          if (!this.name) {
            return
          }
          if (this.currentLookup) {
            // Update
            const found = this.lookups.find((l) => l.name === this.name)
            if (!found) {
              // Should never happen!!!
              return
            }
            found.values = results.data
          } else {
            this.lookups.push({name: this.name, values: results.data})
          }
          this.clear()
          this.hideForm()
          this.$emit('onChange', this.lookups)
        }
      })
    },
    handleDelete (lookup) {
      // To avoid mutation, we filter and send the new set of lookups
      // in the future we could move this operation to the store
      const lookups = this.lookups.filter((l) => l.name !== lookup)
      this.lookups = lookups
      this.$emit('onChange', lookups)
    },
    clear () {
      this.name = null
      this.values = null
      this.currentLookup = null
    },
    handleClear () {
      this.clear()
    },
    handleToggleGrid () {
      this.grid = !this.grid
    },
    handleLookupSelect (lookup) {
      this.currentLookup = lookup
      const found = this.lookups.find((l) => l.name === lookup)
      this.name = found.name
      this.values = Papa.unparse(found.values)
      this.grid = true
      this.showForm()
    },
    getRows () {
      const found = this.lookups.find((l) => l.name === this.currentLookup)
      if (!found) {
        return []
      }
      return found.values
    },
    handleAddLookup () {
      this.clear()
      this.grid = false
      this.showForm()
    },
    showForm () {
      this.show = true
    },
    hideForm () {
      this.show = false
    },
    handleClose () {
      this.hideForm()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea.csv-bin {
  min-height: inherit;
  height: auto;
  white-space: nowrap;
  overflow: auto;
}

.form {
 border: 1px solid #ccc;
 background-color: #eaeaea;
 margin-top: 10px;
}

.lookup-values-grid {
  max-height: 250px;
}
</style>
