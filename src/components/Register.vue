<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal">Регистрация</h1>
          <div class="form-group">
            <label for="username">Логин</label>
            <input
              type="text"
              v-model="username"
              class="form-control"
              name="username"
              placeholder="Введите логин"
            >
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              name="email"
              placeholder="Введите email"
            >
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              name="password"
              placeholder="Введите пароль"
            >
          </div>
          <button class="btn btn-success btn-lg btn-block" type="submit">Регистрация</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },

  methods: {
    register () {
      axios.post('/users/register',
        {
          username: this.username,
          email: this.email,
          password: this.password
        }).then(res => {
        console.log(res)
        this.username = ''
        this.email = ''
        this.password = ''
        router.push({ name: 'Login' })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
