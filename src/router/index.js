import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/CategoriesView.vue')
    },
    {
      path: '/detail/:name',
      name: 'detailCategories',
      component: () => import('../views/DetailView.vue'),
      props: true
    },
    {
      path: '/mealInfo/:id',
      name: 'mealInfo',
      component: () => import('../views/MealInfoView.vue'),
      props: true
    }
  ]
})

export default router
