import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import Update from '@/components/Update'
import ListOfProfiles from '@/components/ListOfProfiles'
import ListOfGroups from '@/components/ListOfGroups'
import CreatNewGroup from '@/components/CreatNewGroup'
import UpdateGroup from '@/components/UpdateGroup'
import OpenGroup from '@/components/OpenGroup'
import CreatNewPost from '@/components/CreatNewPost'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }, {
    path: '/update',
    name: 'Update',
    component: Update
  }, {
    path: '/listOfProfiles',
    name: 'ListOfProfiles',
    component: ListOfProfiles
  }, {
    path: '/listOfGroups',
    name: 'ListOfGroups',
    component: ListOfGroups
  }, {
    path: '/creatNewGroup',
    name: 'CreatNewGroup',
    component: CreatNewGroup
  }, {
    path: '/updateGroup',
    name: 'UpdateGroup',
    component: UpdateGroup
  }, {
    path: '/openGroup',
    name: 'OpenGroup',
    component: OpenGroup
  }, {
    path: '/creatNewPost',
    name: 'CreatNewPost',
    component: CreatNewPost
  }]
})
