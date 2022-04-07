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
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserInputForm",
  props: {
    msg: String,
  },
  data: () => ({
    username: "",
    phone: "",
  }),
  methods: {
    onChangeUsername(event: HTMLInputElement) {
      console.log(event);
    },
    onChangePhone(event: HTMLInputElement) {
      console.log(event);
    },
    onClickSubmit() {
      console.log(this.$data);
    },
  },
});
</script>

<!-- Template -->

<template>
  <div class="container">
    <h1>Create new user</h1>
    <div>
      <input
        type="text"
        v-bind:value="username"
        v-on:change="onChangeUsername"
      />
      <input type="text" v-bind:value="phone" v-on:change="onChangePhone" />
      <button v-on:click="onClickSubmit">Submit</button>
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
