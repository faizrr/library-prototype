<template>
  <md-table-card>
    <md-toolbar md-theme="md-blue">
      <h1 class="md-title">Users</h1>

      <md-button class="md-icon-button" @click.native="addUser">
        <md-icon>add</md-icon>
      </md-button>
    </md-toolbar>

    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Name</md-table-head>
          <md-table-head>Actions</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="user in users">
          <md-table-cell>{{ user.login }}</md-table-cell>
          <md-table-cell>
            <div>
              <md-button class="md-icon-button">
                <router-link :to="`/users/${user.login}`">
                  <md-icon>person</md-icon>
                </router-link>
              </md-button>
              <md-button class="md-icon-button" @click.native="editUser(user)">
                <md-icon>edit</md-icon>
              </md-button>
              <md-button class="md-icon-button" @click.native="removeUser(user)">
                <md-icon>delete_forever</md-icon>
              </md-button>
            </div>
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>

    <add-user-form ref="addForm"></add-user-form>
  </md-table-card>
</template>

<script>
  import AddUserForm from '../partials/addUserForm'
  
  export default {
    components: {
      AddUserForm
    },
    computed: {
      users () {
        return this.$store.getters.users
      }
    },
    methods: {
      addUser () {
        this.$refs.addForm.open()
      },
      editUser (data) {
        this.$refs.addForm.open(data)
      },
      removeUser (user) {
        this.$store.dispatch('removeUser', user)
      }
    }
  }
</script>
