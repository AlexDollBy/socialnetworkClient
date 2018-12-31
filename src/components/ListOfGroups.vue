<template>
<div>
  <div class="col-sm-8 mx-auto">
    <h1 class="text-center">Группы</h1>
  </div>
   <button class="btn btn-lg btn-primary btn-block" v-on:click='creatGroup' >Создать новую группу</button>
   <form v-for="gr in mygroupList" :key="gr.id">
    <div class="container">
    <div class="jumbotron mt-5">
      <table class="table col-md-6 mx-auto">
        <tbody>
          <tr>
            <td>Название</td>
            <td>{{gr.name}}</td>
          </tr>
           <tr>
            <td>Описание</td>
            <td>{{gr.description}}</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="updateGroup(gr.id)">Редактировать</button>
      <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="openGroup(gr.id)">Открыть</button>
    </div>
  </div>
  </form>
</div>
</template>

<script>
import router from '../router'

export default {
  data () {
    return {
      mygroupList: JSON.parse(localStorage.getItem('groupsList'))
    }
  },
  methods: {
    creatGroup () {
      router.push({name: 'CreatNewGroup'})
    },
    updateGroup (idGr) {
      localStorage.setItem('idGr', idGr)
      router.push({name: 'UpdateGroup'})
    },
    openGroup (idGr) {
      localStorage.setItem('idGr', idGr)
      router.push({name: 'OpenGroup'})
    }
  }
}
</script>
