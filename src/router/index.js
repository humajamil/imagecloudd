import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Forgetpass from '../views/Forgetpass.vue'
import Uploadimage from '../views/Uploadimage.vue'
import Profile from '../views/Profile.vue'
import Mainpage from '../views/Mainpage.vue'
import Verify from '../views/verify.vue'
import resetpass from '../views/resetpass.vue'
import demo from '../views/demo.vue'
import Gallery from '../views/Gallery.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/demo',
    name: 'demo',
    component:  demo
  },
  {
    path: '/Mainpage',
    name: 'Mainpage',
    component: Mainpage
  },
  {
    path: '/resetpass',
    name: 'resetpass',
    component: resetpass
  },
  {
    path: '/Verify',
    name: 'Verify',
    component: Verify
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Forgetpass',
    name: 'Forgetpass',
    component: Forgetpass
  },
  {
    path: '/Uploadimage',
    name: 'Uploadimage',
    component: Uploadimage
  },
  {
    path: '/Profile',
    name: ' Profile',
    component:  Profile
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
