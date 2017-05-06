<template>
  <md-table-card>
    <md-toolbar md-theme="md-blue">
      <h1 class="md-title">Books</h1>

      <md-input-container style="flex: 1">
        <md-input v-model="search" placeholder="Search..." />
      </md-input-container>
    </md-toolbar>

    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Name</md-table-head>
          <md-table-head>Author</md-table-head>
          <md-table-head>Publish year</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="row in result">
          <md-table-cell>{{ row.name }}</md-table-cell>
          <md-table-cell>{{ row.author }}</md-table-cell>
          <md-table-cell>{{ row.publishYear }}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </md-table-card>
</template>

<script>
  import Fuse from 'fuse.js'

  export default {
    mounted: function () {
      const fuseSearchOptions = {
        keys: ['name', 'author']
      }

      this.fuse = new Fuse(this.books, fuseSearchOptions)
      this.result = this.books
    },
    data: function () {
      return {
        fuse: null,
        search: '',
        books: this.$store.getters.books,
        result: []
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
    }
  }
</script>
