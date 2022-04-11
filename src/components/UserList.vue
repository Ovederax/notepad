<script lang="ts">
import {defineComponent} from 'vue'
import {store} from '@/store'

export default defineComponent({
  name: 'UserList',
  computed: {
    users() {
      return store.state.users
    },
    filteredUsers() {
      return store.state.users.filter(it => it.username.search(this.searchUsernamePattern) !== -1)
    }
  },
  data: () => ({
    searchUsername: '',
    searchUsernamePattern: ''
  }),
  methods: {
    removeUser(id: string) {
      store.commit('REMOVE_USER', {
        id
      })
    },
    onInputSearchUsername(event: Event) {
      this.searchUsername = (event.target as HTMLInputElement).value
    },
    onSearchByName() {
      this.searchUsernamePattern = this.searchUsername.toLowerCase()
    }
  },
  props: {
    msg: String
  }
})
</script>

<template>
  <div class="block pt-4">
    <h1>User list</h1>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="button-username"
        v-on:input="onInputSearchUsername"
      />
      <button class="btn btn-primary" type="button" id="button-username" v-on:click="onSearchByName">Button</button>
    </div>
    <h4>
      <span>Total items: {{ this.users.length }}. </span>
      <span v-if="searchUsernamePattern.length > 0">Found items: {{ this.filteredUsers.length }}.</span>
      <span v-if="searchUsernamePattern.length > 0"> Search by pattern: "{{ searchUsernamePattern }}" </span>
    </h4>
    <table class="table" v-if="filteredUsers.length > 0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(it, idx) in filteredUsers" v-bind:key="it.id">
          <td>{{ idx + 1 }}</td>
          <td>{{ it.username }}</td>
          <td>{{ it.phone }}</td>
          <td><button class="btn btn-danger" v-on:click="removeUser(it.id)">Remove</button></td>
        </tr>
      </tbody>
    </table>
    <div v-else>No data</div>
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
