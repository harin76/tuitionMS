<template>
  <div class="column">
    <editor :content="script || ''" :lang="'text'" :theme="'github'" :height="'500px'"></editor>
  </div>
</template>

<script>
import editor from 'vue2-ace'
import 'brace/mode/text'
import 'brace/theme/github'

export default {
  name: 'algorithm-section',
  components: { editor },
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
