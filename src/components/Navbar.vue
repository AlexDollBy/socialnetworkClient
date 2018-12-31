<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbar1"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggle-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-center" id="navbar1">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Домашня страница</router-link>
                </li>

                <li v-if="auth==''" class="nav-item">
                    <router-link class="nav-link" to="/login">Вход</router-link>
                </li>

                <li v-if="auth==''" class="nav-item">
                    <router-link class="nav-link" to="/register">Регистрация</router-link>
                </li>

                <li v-if="auth=='loggedin'" class="nav-item">
                    <router-link class="nav-link" to="/profile">Профиль</router-link>
                </li>

                <li v-if="auth=='loggedin'" class="nav-item">
                    <b-nav-item-dropdown text="Группы" right>
                      <b-dropdown-item v-on:click="getListOfGroups">Мои группы</b-dropdown-item>
                      <b-dropdown-item href="#">Подписки</b-dropdown-item>
                    </b-nav-item-dropdown>
                </li>

                <li v-if="auth=='loggedin'" class="nav-item">
                    <a class="nav-link" href="" v-on:click="logout">Выход</a>
                </li>
            </ul>
        </div>
        <form class="form-inline my-2 my-lg-0" v-on:submit.prevent="searchUser">
            <input class="form-control mr-sm-2" type="text" v-model="searchus" placeholder="Поиск пользователей" aria-label="Search">
            <button class="btn btn-dark" type="submit">Искать</button>
        </form>
    </nav>
</template>

<script>
import EventBus from './EventBus'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import router from '../router'

EventBus.$on('logged-in', test => {
  console.log(test)
})
/* eslint-disable */
export default {
  name:'navbar',
  data () {
    return {
      auth: '',
      user: '', 
      searchus:''
    }
  },

  methods: {
    logout () {
      localStorage.removeItem('usertoken')
    },
    searchUser () {
        axios.post('/users/search',{
          searchus: this.searchus
        }).then(res => {
        localStorage.setItem('searchList', JSON.stringify(res.data))
        router.push('ListOfProfiles')
      }).catch(err => {
        console.log(err)
      })
    }, 
    getListOfGroups(){
      const token = localStorage.usertoken
      const decoded = jwtDecode(token)
      axios.post('/groups/mygroups', {
         creator: decoded.id
        }).then(res => {
        localStorage.setItem('groupsList', JSON.stringify(res.data))
        router.push({ name: 'ListOfGroups', params: { labe: 'Ваши группы' } })
      }).catch(err => {
        console.log(err)
      })
    }
  },

  mounted () {
    EventBus.$on('logged-in', status => {
      this.auth = status
    })
  }
}
</script>