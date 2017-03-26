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
        {caption: 'Name', name: 'name', type: 'link', onClick: (d) => d.name},
        {caption: 'Description', name: 'description'},
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
      'list'
    ]),
    handleAddNew (e) {
      console.log(e)
      this.$router.push('/create-measure')
    },
    handleLinkClicked (e) {
      // Edit?
      console.log(e)
    },
    getEditUrl (id) {
      return '/edit-measure/' + id
    }
  }
}
</script>
