<template>
  <div class="column">
    <div class="columns">
      <div class="column is-6 params">
      <h4 class="subtitle is-4">Parameters</h4>
        <div class="column">
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
          <!-- <div class="field is-horizontal" v-for="param in measure.parameters">
            <div class="field-label" :disabled="param.isConstant">
              {{param.displayName}}
            </div>
            <div class="field-body">
              <div class="field">
                    <div class="control">
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
                    </div>
                  </div>
            </div>
          </div> -->

          <!-- <div class="field" v-for="param in measure.parameters">
            <label class="label">{{param.name}}</label>
            <p class="control">
              <input class="input" v-model="testParams[param.name]" type="text" :placeholder="param.description">
            </p>
          </div> -->

          <div class="block is-pulled-right">
            <a class="button is-primary" @click="handleCalculate">Calculate</a>
            <a class="button is-link" @click="handleClear">Clear</a>
          </div>
        </div>

      </div>

      <div class="column params">
        <!-- <div class="content">
          <h4>Parameters</h4>
          <table>
            <tr v-for="(value, key) in testParams">
              <td>{{key}}</td><td><strong>{{value}}</strong></td>
            </tr>
          </table>
        </div>
          <br> -->
        <div class="panel">
          <h4 class="subtitle is-4">Result</h4>
          <table class="table is-narrow">
            <tr v-for="(value, key) in result">
              <td>{{key | titleCase}}</td><td class="has-text-right"><span class="value">{{round(value)}}</span></td>
            </tr>
          </table>
          <p class="has-text-right"><small>Calculation took {{calculationTime}} ms </small></p>
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
        this.result = _.omit(JSOEE.eval(this.measure.algorithm, context), omitAttribs)
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
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
}

</style>
