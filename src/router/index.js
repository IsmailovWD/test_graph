import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MyPanel',
      redirect: '/dashboard',
      component: () => import('../views/Layouts/Form.vue'),
      children: [
        {
          path: '/dashboard',
          name: "Dashboard",
          component: () => import('../views/Dashboard/Form.vue')
        },
        {
          path: '/javascript',
          name: "JavaScript",
          redirect: '/javascript/vuejs',
          children: [
            {
              path: '/javascript/vuejs',
              name: "VueJs",
              component: () => import('../views/Javascript/Vue/Form.vue')
            },
            {
              path: '/javascript/reactjs',
              name: "ReactJs",
              component: () => import('../views/Javascript/React/Form.vue')
            },
            {
              path: '/javascript/angularjs',
              name: "AngularJs",
              component: () => import('../views/Javascript/Angular/Form.vue')
            }
          ]
        },
        {
          path: '/analystics',
          name: "Analystics",
          children: [
            {
              path: '/analystics/columns',
              name: "Analystics-Columns",
              component: () => import('../views/Analistics/Column/Form.vue')
            },
            {
              path: '/analystics/circle',
              name: "Analystics-Circle",
              component: () => import('../views/Analistics/Circle/Form.vue')
            },
            {
              path: '/analystics/lists',
              name: "Analystics-List",
              component: () => import('../views/Analistics/List/Form.vue')
            }
          ]
        },
        {
          path: '/products',
          name: "Mahsulotlar",
          component: () => import('../views/Products/Form.vue')
        },
        {
          path: '/api',
          name: "API",
          component: () => import('../views/Products/APi.vue')
        }
      ]
    }, {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/Form.vue'),
    }
  ],
});

export default router;
