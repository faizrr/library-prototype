<template>
  <md-table-card>
    <md-toolbar md-theme="md-blue">
      <h1 class="md-title">Books</h1>

      <md-input-container style="flex: 1">
        <md-input v-model="search" placeholder="Search..." />
      </md-input-container>

      <md-button class="md-icon-button" @click.native="addBook">
        <md-icon>add</md-icon>
      </md-button>
    </md-toolbar>

    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Name</md-table-head>
          <md-table-head>Author</md-table-head>
          <md-table-head>Publish year</md-table-head>
          <md-table-head>Is available</md-table-head>
          <md-table-head>Actions</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="row in result">
          <md-table-cell>{{ row.name }}</md-table-cell>
          <md-table-cell>{{ row.author }}</md-table-cell>
          <md-table-cell>{{ row.publishYear }}</md-table-cell>
          <md-table-cell><md-icon>{{ row.reservator ? 'close' : 'check' }}</md-icon></md-table-cell>
          <md-table-cell>
            <div v-if="currentUser.role === 'admin'">
              <md-button class="md-icon-button" @click.native="editBook(row)">
                <md-icon>edit</md-icon>
              </md-button>
              <md-button class="md-icon-button" @click.native="removeBook(row)">
                <md-icon>delete_forever</md-icon>
              </md-button>
            </div>
            <div v-else>
              <md-button class="md-icon-button" @click.native="reserveBook(row)">
                <md-icon>file_download</md-icon>
              </md-button>
              <md-button class="md-icon-button" @click.native="returnBook(row)">
                <md-icon>file_upload</md-icon>
              </md-button>
            </div>
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>

    <add-book-from ref="addForm"></add-book-from>
  </md-table-card>
</template>

<script>
  import Fuse from 'fuse.js'
  import AddBookFrom from 'renderer/partials/addBookForm'

  export default {
    mounted: function () {
      const fuseSearchOptions = {
        keys: ['name', 'author']
      }

      this.fuse = new Fuse(this.books, fuseSearchOptions)
      this.result = this.books
    },
    components: {
      AddBookFrom
    },
    data: function () {
      return {
        fuse: null,
        search: '',
        books: this.$store.getters.books,
        result: [],
        currentUser: this.$store.getters.currentUser
      }
    },
    watch: {
      search: function (query) {
        if (!query) {
          this.result = this.books
        } else {
          this.result = this.fuse.search(query)
        }
      }
    },
    methods: {
      addBook () {
        this.$refs.addForm.open()
      },
      editBook (data) {
        this.$refs.addForm.open(data)
      },
      removeBook (book) {
        this.$store.dispatch('removeBook', book)
      },
      reserveBook (book) {
        const user = this.$store.getters.currentUser
        this.$store.dispatch('reserveBook', { book, user })
      },
      returnBook (book) {
        const user = this.$store.getters.currentUser
        if (book.reservator === user.login) {
          this.$store.dispatch('returnBook', book)
        }
      }
    }
  }
</script>
