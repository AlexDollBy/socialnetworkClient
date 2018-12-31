<template>
  <form v-on:submit.prevent="update">
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
            <td><input
              type="text"
              v-model="name"
              class="form-control"
              name="name"
              :placeholder="name"
            ></td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td><input
              type="email"
              v-model="email"
              class="form-control"
              name="email"
              :placeholder="email"
            ></td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-success btn-lg btn-block" type="submit">Применить</button>
    </div>
  </div>
  </form>
</template>

<script>
import jwtDecode from 'jwt-decode'
import axios from 'axios'
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
    update () {
      axios.post('/users/update',
        {
          id: this.id,
          username: this.username,
          email: this.email,
          name: this.name
        }).then(res => {
        localStorage.setItem('usertoken', res.data)
        this.username = ''
        this.email = ''
        this.password = ''
        this.name = ''
        router.push({ name: 'Profile' })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
