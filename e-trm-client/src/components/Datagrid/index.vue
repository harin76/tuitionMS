<template>
  <div>
    <div class="columns">
      <div class="column is-10">
        <h1 class="title">{{title}}</h1>
      </div>
      <div class="column is-2">
        <button
          class="button is-pulled-right is-dark is-outlined"
          v-on:click="handleAddNew">
          New
        </button>
      </div>
    </div>
    <!-- DATA TABLE HERE !-->
    <table class="table is-bordered is-narrow">
      <thead>
        <tr>
          <th v-for="column in columns"> {{column.caption | capitalize}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data">
          <td v-for="column in columns">
            <span v-if="column.type === 'link'">
              <a v-on:click="handleLinkClicked(item, column)">
                {{item[column.name] | shorten }}
              </a>
            </span>
            <span v-else> {{item[column.name] | shorten }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'datagrid',
  props: {
    title: String,
    data: Array,
    columns: Array
  },
  filters: {
    capitalize: function (str) {
      if (!str) {
        return ''
      }
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    shorten: function (str) {
      if (!str) {
        return ''
      }
      return str.substr(0, 100)
    }
  },
  methods: {
    handleAddNew: function () {
      this.$emit('addNew')
    },
    handleLinkClicked: function (item, columnMeta) {
      const val = columnMeta.onClick ? columnMeta.onClick(item) : item
      this.$emit('linkClicked', val)
    }
  }
}
</script>
