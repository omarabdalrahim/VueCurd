import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '../views/students/View.vue'
import StudentCreate from '../views/students/Create.vue'
import StudentEdite from '../views/students/Edite.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/students',
      name: 'Students',
      component: StudentView
    },
    {
      path: '/students/create',
      name: 'StudentsCreate',
      component: StudentCreate
    },
    {
      path:'/students/:id/Edite',
      name: 'StudentsEdite',
      component: StudentEdite
    }



  ]
})

export default router
