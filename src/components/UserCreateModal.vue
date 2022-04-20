<script lang="ts">
import {defineComponent} from 'vue'
import {store} from '@/store'
import {User} from '@/models/User'
import ModalWindow from '@/components/ModalWindow.vue'

export default defineComponent({
  name: 'UserEditModal',
  props: {
    show: Boolean
  },
  data: () => ({
    username: '',
    phone: ''
  }),
  methods: {
    clearForm() {
      this.username = ''
      this.phone = ''
    },
    onClickSave() {
      store.dispatch('ADD_USER', User.create(this.username, this.phone))
      this.clearForm()
    },
    onClickClose() {
      this.clearForm()
      this.$emit('close')
    }
  },
  components: {
    ModalWindow
  }
})
</script>

<template>
  <ModalWindow title="Create user" v-if="show" @close="onClickClose" @save="onClickSave">
    <div>
      <div class="mb-3">
        <label for="usernameInput" class="form-label">Username</label>
        <input type="text" class="form-control" id="usernameInput" v-model="username" />
      </div>
      <div class="mb-3">
        <label for="phoneInput" class="form-label">Phone</label>
        <input type="text" class="form-control" id="phoneInput" v-model="phone" />
      </div>
    </div>
  </ModalWindow>
</template>
