<template>
  <md-dialog ref="modal">
    <md-dialog-title>Add new user</md-dialog-title>

    <md-dialog-content>
      <form>
        <md-input-container>
          <label>Name</label>
          <md-input v-model="login"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Password</label>
          <md-input v-model="password"></md-input>
        </md-input-container>

        <md-input-container>
          <label for="role">Role</label>
          <md-select name="role" id="role" v-model="role">
            <md-option value="admin">Admin</md-option>
            <md-option value="user">User</md-option>
          </md-select>
        </md-input-container>
      </form>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click.native="close">Cancel</md-button>
      <md-button class="md-primary" @click.native="saveUser">Create</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
  const getInitialState = () => ({
    login: '',
    password: '',
    role: 'user'
  })

  export default {
    data () {
      return getInitialState()
    },
    methods: {
      open (initialState = getInitialState()) {
        Object.assign(this.$data, initialState)
        this.$refs.modal.open()
      },
      close () {
        Object.assign(this.$data, getInitialState())
        this.$refs.modal.close()
      },
      saveUser () {
        let user = {
          login: this.login,
          password: this.password,
          role: this.role
        }
        this.$store.dispatch('createOrUpdateUser', user).then(() => {
          this.close()
        })
      }
    }
  }
</script>
