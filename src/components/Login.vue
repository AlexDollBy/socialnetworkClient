<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 mt-5 mx-auto">
                <form v-on:submit.prevent="login">
                    <h1 class="h3 mb-3 font-weight-normal">Вход</h1>
                    <div class="form-group">
                        <label for="username">Введите логин</label>
                        <input type="username" v-model="username" class="form-control" name="username" placeholder="Введите логин">
                    </div>
                    <div class="form-group">
                        <label for="password">Пароль</label>
                        <input type="password" v-model="password" class="form-control" name="email" placeholder="Введите Пароль">
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Вход</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.post('/users/login',
        {
          username: this.username,
          password: this.password
        }).then(res => {
        localStorage.setItem('usertoken', res.data)
        console.log(res.data)
        this.username = ''
        this.password = ''
        EventBus.$emit('logged-in', 'loggedin')
        router.push({ name: 'Profile' })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
