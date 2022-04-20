<script lang="ts">
import {defineComponent} from 'vue'
import {store} from '@/store'
import {User} from '@/models/User'
import ModalWindow from '@/components/ModalWindow.vue'

export default defineComponent({
  name: 'UserEditModal',
  props: {
    show: Boolean,
    id: String
  },
  data() {
    return {
      username: '',
      phone: ''
    }
  },
  methods: {
    clearForm() {
      this.username = ''
      this.phone = ''
    },
    onClickSubmit() {
      if (this.$props.id) {
        console.log(this.username, this.phone)
        store.dispatch('EDIT_USER', new User(this.$props.id, this.username, this.phone))
        this.onClickClose()
      }
    },
    onClickClose() {
      this.clearForm()
      this.$emit('close')
    }
  },
  watch: {
    show() {
      const editedUser: User | undefined = store.state.users.find(it => it.id === this.$props.id)
      this.username = editedUser?.username || ''
      this.phone = editedUser?.phone || ''
    }
  },
  components: {
    ModalWindow
  }
})
</script>

<template>
  <ModalWindow title="Edit user" v-if="show" @close="$emit('close')" @save="onClickSubmit">
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
