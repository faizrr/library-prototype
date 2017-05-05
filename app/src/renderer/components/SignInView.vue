<template>
  <form novalidate @submit.stop.prevent="performAuth">
    <md-input-container>
      <label>Login</label>
      <md-input v-model="login"></md-input>
    </md-input-container>

    <md-input-container>
      <label>Password</label>
      <md-input v-model="password" type="password"></md-input>
    </md-input-container>

    <md-button class="md-raised md-primary" type="submit">Log in</md-button>
  </form>
</template>

<script>
  import AuthService from '../../services/auth'

  export default {
    data: () => ({
      login: '',
      password: ''
    }),
    methods: {
      performAuth () {
        AuthService({ login: this.login, password: this.password })
      }
    }
  }
</script>
