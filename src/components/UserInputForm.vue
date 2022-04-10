<script lang="ts">
import {defineComponent} from 'vue'
import {store} from '@/store'
import {User} from '@/models/User'

export default defineComponent({
  name: 'UserInputForm',
  props: {
    msg: String
  },
  data: () => ({
    username: '',
    phone: ''
  }),
  methods: {
    onChangeUsername(event: Event) {
      this.username = (event.target as HTMLInputElement).value
    },
    onChangePhone(event: Event) {
      this.phone = (event.target as HTMLInputElement).value
    },
    onClickSubmit() {
      store.dispatch('ADD_USERS', new User(this.username, this.phone))
    }
  }
})
</script>

<!-- Template -->

<template>
  <div class="container">
    <h1>Create new user</h1>
    <div>
      <div class="mb-3">
        <label for="usernameInput" class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          id="usernameInput"
          v-bind:value="username"
          v-on:change="onChangeUsername"
        />
      </div>
      <div class="mb-3">
        <label for="phoneInput" class="form-label">Phone</label>
        <input type="text" class="form-control" id="phoneInput" v-bind:value="phone" v-on:change="onChangePhone" />
      </div>

      <button class="btn btn-primary" v-on:click="onClickSubmit">Submit</button>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
