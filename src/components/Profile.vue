<template>
  <form v-on:submit.prevent="goTouUpdate">
    <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">ПРОФИЛЬ</h1>
      </div>
      <table class="table col-md-6 mx-auto">
        <tbody>
          <tr>
            <td>Логин</td>
            <td>{{username}}</td>
          </tr>
           <tr>
            <td>Имя</td>
            <td>{{name}}</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td>{{email}}</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Редактировать</button>
    </div>
  </div>
  </form>
</template>

<script>
import jwtDecode from 'jwt-decode'
import router from '../router'
export default {
  data () {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    return {
      username: decoded.username,
      email: decoded.email,
      id: decoded.id,
      name: decoded.name
    }
  },
  methods: {
    goTouUpdate () {
      router.push({ name: 'Update' })
    }
  }
}
</script>
