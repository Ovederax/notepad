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

<template>
  <div class="container">
    <h1>User list</h1>
    <h2>todo</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserList",
  props: {
    msg: String,
  },
});
</script>

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
