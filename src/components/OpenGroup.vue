<template>
    <div class="container">
        <div class="col-sm-8 mx-auto">
            <h1 class="text-center">{{name}}</h1>
            <h3 class="text-center">{{description}}</h3>
        </div>
        <div class="container">
            <h4>Записи группы</h4>
            <button v-on:click="newPost">Создать запись</button>
            <form v-for="post in posts" :key="post.id">
                <div class="container">
    <div class="jumbotron mt-5">
      <table class="table col-md-6 mx-auto">
        <tbody>
          <tr>
            <td>Что то</td>
            <td>{{post.logo}}</td>
          </tr>
           <tr>
            <td>Описание</td>
            <td>{{post.postText}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
/* eslint-disable */
export default {    
  data () {
    const grId = localStorage.idGr
    axios.post('/posts/show', {
        idGroup: grId
    }).then(res => {
        console.log('here')
        this.posts = res.data
    }).catch(err => {
        console.log(err)
    })
    axios.post('/groups/openGroup', {
        id: grId
    }).then(res => {
        this.name = res.data.name
        this.description = res.data.description
    })
    return {
      id: grId,
      name: '',
      description: '',
      posts:''
    }
  }, methods: {
    newPost () {
      router.push({ name: 'CreatNewPost' })
    }
  },
}
</script>
