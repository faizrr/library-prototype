<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="openMenu">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">My super library</h2>
    </md-toolbar>

    <sidebar-menu ref="menu"></sidebar-menu>

    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'

  import SidebarMenu from 'renderer/partials/sidebarMenu'

  export default {
    components: {
      SidebarMenu
    },
    methods: {
      openMenu () {
        this.$refs.menu.toggle()
      }
    },
    store
  }
</script>

<style>
  .main-content {
    padding: 16px;
  }
  .notie-textbox {
    color: #FFFFFF;
    padding: 22px;
  }
</style>
