<template>
  <section class="section">
    <datagrid
      :title="title"
      :columns="columns"
      :data="measures"
      v-on:addNew="handleAddNew($event)"
      v-on:linkClicked="handleLinkClicked($event)"
      >
      </datagrid>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Datagrid from '@/components/Datagrid'

export default {
  name: 'list-measures',
  created () {
    this.list({})
  },
  components: {
    Datagrid
  },
  data () {
    return {
      title: 'Measures',
      titleCreate: 'Create New',
      modalIsActive: false,
      columns: [
        {caption: 'Name', name: 'name', type: 'link', onClick: (d) => d.id},
        // {caption: 'Description', name: 'description'},
        {caption: 'Market Sector', name: 'marketSector'},
        {caption: 'End Use', name: 'endUse'},
        {caption: 'Current Version', name: 'currentVersion'},
        {caption: 'Status', name: 'status'}
      ]
    }
  },
  computed: {
    ...mapGetters({
      measures: 'measures/measures'
    })
  },
  methods: {
    ...mapActions('measures', [
      'list',
      'setMeasure'
    ]),
    handleAddNew (e) {
      this.$router.push('/measure')
    },
    handleLinkClicked (id) {
      // Edit?
      const measure = this.measures.find((l) => l.id === id)
      this.setMeasure(measure)
      this.$router.push(this.getEditUrl(id))
    },
    getEditUrl (id) {
      return '/measure/' + id
    }
  }
}
</script>
