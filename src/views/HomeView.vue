<script lang="ts">
import {defineComponent} from 'vue'
import UserInputForm from '@/components/UserInputForm.vue' // @ is an alias to /src
import UserList from '@/components/UserList.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    UserInputForm,
    UserList
  }
})
</script>

<!-- Template -->
<template>
  <div class="container">
    <UserInputForm />
    <UserList />
  </div>
</template>
