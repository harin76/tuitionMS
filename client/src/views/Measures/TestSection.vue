<template>
  <div class="column">
    <div class="columns">
      <div class="column is-6">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Parameters
            </p>
          </header>
          <div class="card-content">
            <div class="card-scroll-content params">
              <div class="field" v-for="param in measure.parameters">
                <label class="label is-small" disabled="param.isConstant">{{param.displayName}}</label>
                <p class="control">
                  <input v-if="!isNumeric(param.type)" class="input is-small"
                  type="text"
                  v-model="testParams[param.name]"
                  @change="handleTestParamChange()"
                  :placeholder="param.description"
                  :disabled="param.isConstant">
                  <input v-else class="input is-small"
                  type="number"
                  v-model="testParams[param.name]"
                  @change="handleTestParamChange()"
                  :placeholder="param.description"
                  :disabled="param.isConstant">
                </p>
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item" v-on:click="handleCalculate">Calculate</a>
            <a class="card-footer-item" v-on:click="handleClear">Clear</a>
          </footer>
        </div>
      <!-- <div class="column">
          <div class="field" v-for="param in measure.parameters">
            <label class="label" disabled="param.isConstant">{{param.displayName}}</label>
            <p class="control">
              <input v-if="!isNumeric(param.type)" class="input"
              type="text"
              v-model="testParams[param.name]"
              @change="handleTestParamChange()"
              :placeholder="param.description"
              :disabled="param.isConstant">
              <input v-else class="input"
              type="number"
              v-model="testParams[param.name]"
              @change="handleTestParamChange()"
              :placeholder="param.description"
              :disabled="param.isConstant">
            </p>
          </div>
          <div class="block is-pulled-right">
            <a class="button is-primary" @click="handleCalculate">Calculate</a>
            <a class="button is-link" @click="handleClear">Clear</a>
          </div>
        </div> -->

      </div>

      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Result
            </p>
          </header>
          <div class="card-content">
            <div class="card-scroll-content">
              <table class="table is-narrow">
                <tr v-for="(value, key) in result">
                  <td>{{key | titleCase}}</td><td class="has-text-right"><span class="value">{{format(value)}}</span></td>
                </tr>
              </table>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item has-text-right">
              <small v-if="calculationTime">Calculation took {{calculationTime}} ms </small>
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JSOEE from 'jso-ee'
import _ from 'lodash'

export default {
  name: 'test-section',
  data () {
    return {
      result: null,
      testParams: this.createTestParam(),
      calculationTime: null
    }
  },
  props: {
    measure: { type: Object, required: true }
  },
  filters: {
    titleCase: function (str) {
      if (!str) {
        return ''
      }
      return _.startCase(str)
    }
  },
  methods: {
    round (num) {
      return _.round(num, 2)
    },
    format (val) {
      if (_.isNumber(val)) {
        return this.round(val)
      }

      return val
    },
    isNumeric (type) {
      return type === 'Number' || type === 'Integer'
    },
    createTestParam () {
      const ret = {}

      if (_.has(this.measure, 'parameters') && _.isArray(this.measure.parameters)) {
        this.measure.parameters.forEach((p) => {
          ret[p.name] = p.defaultValue || null
        })
      }

      return ret
    },
    clear () {
      this.testParams = this.createTestParam()
      this.result = null
      this.calculationTime = null
    },
    parseTestParam () {
      const param = {}
      if (!this.measure.parameters) {
        return
      }
      this.measure.parameters.forEach((p) => {
        switch (p.type) {
          case 'Integer':
            param[p.name] = parseInt(this.testParams[p.name])
            break
          case 'Number':
            param[p.name] = parseFloat(this.testParams[p.name])
            break
          default:
            param[p.name] = this.testParams[p.name]
        }
      })
      return param
    },
    run () {
      this.result = null
      this.calculationTime = null
      const context = Object.assign({}, {
        lookupTables: this.measure.lookupTables
      }, this.parseTestParam())

      const omitAttribs = ['lookupTables', ...Object.keys(this.testParams)]
      try {
        const start = new Date()
        this.result = _.omit(JSOEE.eval(this.measure.calculation, context), omitAttribs)
        const end = new Date()
        this.calculationTime = end - start
      } catch (error) {
        console.error(error)
      }
    },
    handleCalculate () {
      this.run()
    },
    handleClear () {
      this.clear()
    },
    handleTestParamChange () {
      this.run()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.value {
  color: blue;
  font-weight: lighter;
}
.params {
  background-color: #fff;
  padding-right: 10px;
}

</style>
