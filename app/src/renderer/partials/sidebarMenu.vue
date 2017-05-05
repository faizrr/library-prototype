<template>
  <md-sidenav class="md-left" ref="menu">
    <md-list>
      <md-subheader>Navigation</md-subheader>

      <md-list-item>
        <router-link to="/books">
          <md-icon>library_books</md-icon>
          <span>Books</span>
        </router-link>
      </md-list-item>

      <md-list-item>
        <router-link to="/books">
          <md-icon>person</md-icon>
          <span>Users</span>
        </router-link>
      </md-list-item>

      <md-list-item>
        <router-link to="/books">
          <md-icon>exit_to_app</md-icon>
          <span>Exit</span>
        </router-link>
      </md-list-item>
    </md-list>
  </md-sidenav>
</template>

<script>
  export default {
    methods: {
      toggle () {
        this.$refs.menu.toggle()
      }
    }
  }
</script>
