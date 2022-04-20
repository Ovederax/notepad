<script lang="ts">
import {defineComponent} from 'vue'
import UserCreateModal from '@/components/UserCreateModal.vue'
import UserList from '@/components/UserList.vue'
import UserEditModal from '@/components/UserEditModal.vue'

export default defineComponent({
  name: 'HomeView',
  data: () => ({
    showCreateModal: false,
    showEditModal: false,
    editId: null as null | string
  }),
  methods: {
    onOpenEditUser(id: string) {
      this.showEditModal = true
      this.editId = id
    }
  },
  components: {
    UserCreateModal,
    UserEditModal,
    UserList
  }
})
</script>

<!-- Template -->
<template>
  <div class="container">
    <h1 class="my-4">Notebook</h1>
    <div class="d-flex justify-content-end py-1">
      <button style="min-width: 92px" class="btn btn-primary" @click="showCreateModal = true">Create</button>
    </div>

    <UserList @onEditUser="onOpenEditUser" />
    <UserCreateModal :show="showCreateModal" @close="showCreateModal = false" />
    <UserEditModal :show="showEditModal" :id="editId" @close="showEditModal = false" />
  </div>
</template>
