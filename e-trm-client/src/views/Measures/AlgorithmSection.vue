<template>
  <div class="column editor">
    <editor :content="script || ''" :lang="'javascript'" :theme="'github'" :height="'700px'" :options="options"></editor>
  </div>
</template>

<script>
import editor from 'vue2-ace'
import 'brace/mode/javascript'
import 'brace/theme/github'
import 'brace/theme/sqlserver'
import 'brace/theme/tomorrow_night'
import 'brace/theme/tomorrow_night_bright'
import 'brace/theme/tomorrow_night_blue'

export default {
  name: 'algorithm-section',
  components: { editor },
  data () {
    return {
      options: {fontSize: '1em'}
    }
  },
  props: {
    script: String
  },
  methods: {
    handleChange (script) {
      this.$emit('onChange', script)
    }
  },
  mounted () {
    const vm = this
    vm.$on('editor-update', vm.handleChange)
  }
}
</script>
<style scoped>
  .editor {
    font-size: large;
  }
</style>
