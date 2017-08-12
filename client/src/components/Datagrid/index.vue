<template>
  <div class="mdl-cell mdl-cell--12-col">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <h5 class="title">{{title}}</h5>
      </div>
      <div class="mdl-cell mdl-cell--4-col">
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored" v-on:click="handleAddNew">
          ADD NEW
        </button>
      </div>
    </div>
    <!-- DATA TABLE HERE !-->
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
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
    </div>
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
<style scoped>

</style>
