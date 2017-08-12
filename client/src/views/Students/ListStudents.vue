<template>
  <div class="mdl-grid">
    <datagrid
      :title="title"
      :columns="columns"
      :data="students"
      v-on:addNew="handleAddNew($event)"
      v-on:linkClicked="handleLinkClicked($event)"
      >
      </datagrid>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Datagrid from '@/components/Datagrid'
export default {
  name: 'list-students',
  created () {
    this.list({})
  },
  components: {
    Datagrid
  },
  data () {
    return {
      title: 'Students',
      titleCreate: 'Create New',
      modalIsActive: false,
      columns: [
        {caption: 'First Name', name: 'firstName', type: 'link', onClick: (d) => d._id},
        {caption: 'Last Name', name: 'lastName'},
        {caption: 'School', name: 'school'},
        {caption: 'Standard', name: 'standard'}
      ]
    }
  },
  computed: {
    ...mapGetters({
      students: 'students/students'
    })
  },
  methods: {
    ...mapActions('students', [
      'list',
      'setStudent'
    ]),
    handleAddNew (e) {
      this.$router.push('/student')
    },
    handleLinkClicked (id) {
      // Edit?
      const student = this.students.find((l) => l._id === id)
      this.setStudent(student)
      this.$router.push(this.getEditUrl(id))
    },
    getEditUrl (id) {
      return '/student/' + id
    }
  }
}
</script>
