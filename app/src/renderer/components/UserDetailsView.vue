<template>
  <div>
    <md-list>
      <md-subheader><span class="md-display-3">{{ user.login }}</span></md-subheader>

      <md-subheader v-if="userBooks.length">Reserved books:</md-subheader>
      <md-subheader v-else>This user doesn't have any books!</md-subheader>
      <md-list-item v-for="book in userBooks">
        <md-icon>check_box</md-icon>
        <span>{{ book.name }}</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
  import { find } from 'lodash'
  export default {
    computed: {
      user () {
        const users = this.$store.getters.users
        const user = find(users, { login: this.$route.params.login })

        return user
      },
      userBooks () {
        const books = this.$store.getters.books
        console.log(this.user.login)
        return books.filter((b) => b.reservator === this.user.login)
      }
    }
  }
</script>
