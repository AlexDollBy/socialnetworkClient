<template>
  <form v-on:submit.prevent="update">
    <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">Редактирование</h1>
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
            ></td>
          </tr>
          <tr>
            <td>Описание</td>
            <td><input
              type="text"
              v-model="description"
              class="form-control"
              name="description"
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
import axios from 'axios'
import router from '../router'

export default {
  data () {
    const grId = localStorage.idGr
    return {
      id: grId,
      description: '',
      name: ''

    }
  },
  methods: {
    update () {
      axios.post('/groups/update',
        {
          id: this.id,
          name: this.name,
          description: this.description
        }).then(res => {
        this.description = ''
        this.name = ''
        router.push({ name: 'Profile' })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
