<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Vue from 'vue'
Vue.component('navbar', Navbar)
export default {
  name: 'app'
}
</script>
