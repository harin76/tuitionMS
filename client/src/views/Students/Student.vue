<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <h5>{{title}}</h5>
    </div>
    <div class="mdl-cell mdl-cell--4-col">
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored" v-on:click="handleSave(action)">
          SAVE
        </button>
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent" v-on:click="handleCancel">
          CANCEL
        </button>
    </div>
    <div class="mdl-grid">
      <form>
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" v-model="local.firstName">
          <label class="mdl-textfield__label">First Name</label>
        </div>
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" v-model="local.lastName">
          <label class="mdl-textfield__label" >Last Name</label>
        </div>
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="date" v-model="local.dateOfBirth">
          <label class="mdl-textfield__label" >Date of Birth</label>
        </div>
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" v-model="local.school">
          <label class="mdl-textfield__label" >School</label>
        </div>
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" v-model="local.standard">
          <label class="mdl-textfield__label" >Standard</label>
        </div>
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" v-model="local.father.name">
          <label class="mdl-textfield__label" >Father's Name</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" v-model="local.father.email">
          <label class="mdl-textfield__label" >Father's Email</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" v-model="local.father.mobile">
          <label class="mdl-textfield__label" >Father's Mobile</label>
        </div>
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" v-model="local.mother.name">
          <label class="mdl-textfield__label" >Mother's Name</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" v-model="local.mother.email">
          <label class="mdl-textfield__label" >Mother's Email</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" v-model="local.mother.mobile">
          <label class="mdl-textfield__label" >Mother's Mobile</label>
        </div>
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
           <textarea class="mdl-textfield__input" type="text" rows= "3" v-model="local.address" ></textarea>
          <label class="mdl-textfield__label" >Address</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'

export default {
  name: 'student',
  created () {
    const id = this.$route.params.id
    if (id) {
      this.title = 'Edit Student'
      this.action = 'Save'
    }
    this.local = _.cloneDeep(this.student)
    if (!this.local.father) {
      this.local.father = {}
    }
    if (!this.local.mother) {
      this.local.mother = {}
    }
  },
  data () {
    return {
      title: 'Create Student',
      action: 'Create',
      local: {}
    }
  },
  computed: {
    ...mapGetters({
      student: 'students/student'
    })
  },
  methods: {
    ...mapActions('students', [
      'save',
      'setStudent',
      'clearStudent'
    ]),
    handleSave () {
      this.save(this.local)
    },
    handleCancel () {
      this.clearStudent()
      this.$router.push('/students')
    }
  }
}
</script>
