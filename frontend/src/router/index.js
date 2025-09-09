import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Users from '../pages/users.vue'
import NotFound from '../pages/notfound.vue'
import Upload from '../pages/Upload.vue'
import Contact from'../pages/contact.vue'
import Login from'../pages/login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/users', component: Users },
  { path: '/:pathMatch(.*)*', component: NotFound },
  { path: '/Upload', component: Upload},
  { path: '/contact', component:Contact},
  { path: '/login', component:Login},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
