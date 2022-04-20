<!--Минимальную архитектуру приложения:
разбить на логические составляющие, выделить сущности.-->
<!--Сервис CRUD над сущностью User с полями - id, name:-->

<!--cоздание-->
<!--изменение-->
<!--поиск по полю name-->
<!--удаление-->

<!--C несколькими реализациями репозитория - в памяти и localStorage, реализация репозитория выбирается при инициализации приложения.-->
<!--UI - Страница для работы с сервисом (Оформление - bootstrap и т.п.)-->
<!--Cделать сборку проекта (Webpack, Gulp и прочие ...)-->
<!--Выложить проект на GitHub-->

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
      return store.state.users.filter(it => it.username.toLowerCase().search(this.searchUsernamePattern) !== -1)
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
    onSearchByName() {
      this.searchUsernamePattern = this.searchUsername.toLowerCase()
    }
  }
})
</script>

<template>
  <div class="block pt-4">
    <div class="search-group input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="button-username"
        v-model="searchUsername"
        @keyup.enter="onSearchByName"
      />
      <button class="btn btn-primary" type="button" id="button-username" @click="onSearchByName">Search</button>
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
        <tr v-for="(it, idx) in filteredUsers" :key="it.id">
          <td>{{ idx + 1 }}</td>
          <td>{{ it.username }}</td>
          <td>{{ it.phone }}</td>
          <td class="table-actions d-flex justify-content-end">
            <button class="btn btn-warning" @click="$emit('onEditUser', it.id)">Edit</button>
            <button class="btn btn-danger ms-3" @click="removeUser(it.id)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>No data</div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search-group .btn,
.table-actions .btn {
  min-width: 92px;
}
</style>
