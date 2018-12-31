<template>
<div>
  <div class="col-sm-8 mx-auto">
    <h1 class="text-center">Пользователи которых мы смогли найти</h1>
  </div>
   <form v-for="user in searchList" :key="user.id">
    <div class="container">
    <div class="jumbotron mt-5">
      <table class="table col-md-6 mx-auto">
        <tbody>
          <tr>
            <td>Логин</td>
            <td>{{user.username}}</td>
          </tr>
           <tr>
            <td>Имя</td>
            <td>{{user.name}}</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td>{{user.email}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </form>
</div>
</template>

<script>
// import router from '../router'
export default {
  data () {
    return {
      searchList: JSON.parse(localStorage.getItem('searchList'))
    }
  }
}
</script>
