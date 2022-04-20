<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'ModalWindow',
  props: {
    title: String
  }
})
</script>

<template>
  <div class="modal in modal-active">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            {{ title }}
          </h4>
          <button type="button" @click="$emit('close')" class="btn-close" />
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" @click="$emit('close')">Close</button>
          <button type="button" class="btn btn-primary" @click="$emit('save')">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal {
  background: rgba(0, 0, 0, 20%);
}
.modal-active {
  display: block;
  opacity: 1;
}
</style>
