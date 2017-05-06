<template>
  <md-sidenav class="md-left" ref="menu">
    <md-list v-if="currentUser">
      <md-subheader>Navigation</md-subheader>

      <md-list-item>
        <router-link to="/books" @click.native="toggle">
          <md-icon>library_books</md-icon>
          <span>Books</span>
        </router-link>
      </md-list-item>

      <md-list-item v-if="currentUser && currentUser.role === 'admin'">
        <router-link to="/users" @click.native="toggle">
          <md-icon>person</md-icon>
          <span>Users</span>
        </router-link>
      </md-list-item>

      <md-list-item @click.native="performLogOut">
        <md-icon>exit_to_app</md-icon>
        <span>Exit</span>
      </md-list-item>
    </md-list>
    <md-list v-else>
      <md-list-item>
        <md-subheader>Navigation</md-subheader>

        <router-link to="/sign_in" @click.native="toggle">
          <md-icon>account_circle</md-icon>
          <span>Sign in</span>
        </router-link>
      </md-list-item>
    </md-list>
  </md-sidenav>
</template>

<script>
  export default {
    computed: {
      currentUser () {
        return this.$store.getters.currentUser
      }
    },
    methods: {
      toggle () {
        this.$refs.menu.toggle()
      },
      performLogOut () {
        this.$store.dispatch('logOut').then(() => {
          this.$refs.menu.toggle()
          this.$router.replace('/sign_in')
        })
      }
    }
  }
</script>
