<template>
  <form v-on:submit.prevent="creatNewPost">
    <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">Новый пост</h1>
      </div>
      <table class="table col-md-6 mx-auto">
        <tbody>
          <tr>
            <td>Название</td>
            <td><input
              type="text"
              v-model="name"
              class="form-control"
              name="name"
              :placeholder="name"
            ></td>
          </tr>
          <tr>
            <td>Описание</td>
            <td><input
              type="text"
              v-model="description"
              class="form-control"
              name="description"
              :placeholder="description"
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
      id: decoded.id,
      name: '',
      description: ''
    }
  },
  methods: {
    creatNewPost () {
      axios.post('/posts/creat', {
          creator: this.id,
          logo: this.name,
          postText: this.description,
          idGroup: localStorage.idGr
        }).then(res => {
        console.log(res)
        this.name = ''
        this.description = ''
        router.push({ name: 'OpenGroup' })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
