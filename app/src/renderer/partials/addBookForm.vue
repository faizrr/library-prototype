<template>
  <md-dialog ref="modal">
    <md-dialog-title>Add new book</md-dialog-title>

    <md-dialog-content>
      <form>
        <md-input-container>
          <label>Name</label>
          <md-input v-model="name"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Author</label>
          <md-input v-model="author"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Publish year</label>
          <md-input v-model="publishYear" type="number"></md-input>
        </md-input-container>
      </form>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click.native="close">Cancel</md-button>
      <md-button class="md-primary" @click.native="saveBook">Create</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
  const getInitialState = () => ({
    bookId: null,
    name: '',
    author: '',
    publishYear: ''
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
      saveBook () {
        let book = {
          name: this.name,
          author: this.author,
          publishYear: this.publishYear,
          bookId: this.bookId
        }
        if (this.bookId) {
          this.$store.dispatch('editBook', book).then(() => {
            this.close()
          })
        } else {
          this.$store.dispatch('addBook', book).then(() => {
            this.close()
          })
        }
      }
    }
  }
</script>
