<script lang="ts">
import {defineComponent} from 'vue'
import {store} from '@/store'

export default defineComponent({
  name: 'UserList',
  computed: {
    data() {
      return store.state.users
    }
  },
  methods: {
    removeUser(id: string) {
      store.commit('REMOVE_USER', {
        id
      })
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
    <table class="table" v-if="data.length > 0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(it, idx) in data" v-bind:key="it.id">
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
