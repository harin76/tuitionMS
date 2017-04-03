<template>
  <div class="column">
    <div class="columns">
      <div class="column">
        <div class="block is-pulled-right">
          <a class="button is-outlined" v-on:click="handleAddParameter">Add Parameter</a>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <table class="table is-bordered">
          <thead>
            <tr>
              <th> Name </th>
              <!-- <th> Description </th> -->
              <th> Type </th>
              <th> Mandatory </th>
              <th> Is Constant </th>
              <th> Default Value </th>
              <th> Unit </th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="param in params">
              <td><a v-on:click="handleParamSelect(param.id)">{{param.displayName}}</a></td>
              <!-- <td>{{param.description}}</td> -->
              <td>{{param.type}}</td>
              <td>{{param.mandatory}}</td>
              <td>{{param.isConstant ? 'Yes' : 'No'}}</td>
              <td class="has-text-right">{{param.defaultValue}}</td>
              <td>{{param.unit}}</td>
              <td class="has-text-centered"><a class="delete is-small" v-on:click="handleDelete(param.id)"></a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <transition name="fade">
        <div class="column is-4 form" v-if="show">

        <div class="field">
          <label class="label">Name</label>
          <p class="control">
            <input class="input" v-model="name" type="text" placeholder="Name">
          </p>
        </div>

        <div class="field">
          <label class="label">Display Name</label>
          <p class="control">
            <input class="input" v-model="displayName" type="text" placeholder="Display Name">
          </p>
        </div>

        <div class="field">
          <label class="label">Description</label>
          <p class="control">
            <textarea class="textarea" v-model="description" placeholder="Description"></textarea>
          </p>
        </div>
        <!-- type, mandatory, default, units -->
        <div class="field">
          <label class="label">Type</label>
          <p class="control">
            <span class="select">
              <select v-model="type">
                <option v-for="option in ['String', 'Number', 'Integer', 'Boolean', 'List']"> {{ option }}</option>
              </select>
            </span>
          </p>
        </div>

        <div class="field">
          <label class="label">Mandatory</label>
          <p class="control">
            <span class="select">
              <select v-model="mandatory">
                <option v-for="option in ['Yes', 'No']"> {{ option }}</option>
              </select>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="isConstant">
              Is Constant
            </label>
          </p>
        </div>
        <div class="field">
          <label class="label">Default Value</label>
          <p class="control">
            <input class="input" v-model="defaultValue" type="text" placeholder="Default Value">
          </p>
        </div>

        <div class="field">
          <label class="label">Unit</label>
          <p class="control">
            <input class="input" v-model="unit" type="text" placeholder="Unit">
          </p>
        </div>

        <div class="column">
          <div class="block is-pulled-right">
            <a class="button is-primary" v-on:click="handleAdd">{{ this.id ? 'Save' : 'Add' }}</a>
            <a class="button is-link" v-on:click="handleClear">Clear</a>
          </div>
        </div>

      </div>
      </transition>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'parameter-section',
  props: {
    data: { type: Array, required: true }
  },
  data () {
    return {
      id: null,
      name: null,
      displayName: null,
      description: null,
      type: null,
      mandatory: null,
      defaultValue: null,
      unit: null,
      params: _.cloneDeep(this.data) || [],
      show: false
    }
  },
  methods: {
    clear () {
      this.id = null
      this.name = null
      this.displayName = null
      this.description = null
      this.type = null
      this.mandatory = null
      this.defaultValue = null
      this.unit = null
      this.isConstant = null
    },
    handleAdd () {
      const param = {
        id: this.id,
        name: this.name,
        displayName: this.displayName,
        description: this.description,
        type: this.type,
        mandatory: this.mandatory,
        defaultValue: this.defaultValue,
        unit: this.unit,
        isConstant: this.isConstant
      }
      let params = [...this.params]
      if (param.id === null) {
        // New
        param.id = new Date().getTime()
        params.push(param)
      } else {
        const index = params.findIndex((p) => p.id === param.id)

        if (index === -1) {
          return
        }

        params = [
          ...params.slice(0, index),
          param,
          ...params.slice(index + 1)
        ]
      }
      this.params = params
      this.$emit('onChange', params)
      this.clear()
      this.hideForm()
    },
    handleDelete (paramId) {
      const index = this.params.findIndex((p) => p.id === paramId)
      const params = [...this.params.slice(0, index), ...this.params.slice(index + 1)]
      this.params = params
      this.$emit('onChange', params)
      // calling clear to ensure if current editing record
      // gets deleted it is cleared
      this.clear()
    },
    handleClear () {
      this.clear()
    },
    handleParamSelect (paramId) {
      const param = this.params.find((p) => p.id === paramId)

      if (!param) {
        return
      }
      this.id = param.id
      this.name = param.name
      this.displayName = param.displayName
      this.description = param.description
      this.type = param.type
      this.mandatory = param.mandatory
      this.defaultValue = param.defaultValue
      this.unit = param.unit
      this.isConstant = param.isConstant || false

      this.showForm()
    },
    handleAddParameter () {
      this.clear()
      this.showForm()
    },
    showForm () {
      this.show = true
    },
    hideForm () {
      this.show = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .form {
   border: 1px solid #ccc;
   background-color: #eaeaea;
   margin-top: 10px;
 }

.fade-enter-active, .fade-leave-active {
 transition: opacity .5s
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
