import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: "/login",
      meta: {
        title: '首页'
      },
      hidden: true
    },
    {
      path: '/login',
      component: () => import('@/views/login'),
      meta: {
        title: '登录页'
      },
      hidden: true
    },
    {
      path: '/layout',
      component: () => import('@/views/Layout'),
      meta: {title: '用户管理'},
      children: [
        {
          path: 'index',
          component: () => import('@/views/wellcome'),
          meta: {
            title: '欢迎页'
          }
        },
        {
          path: 'adminUser',
          component: () => import('@/views/adminUser'),
          meta: {
            title: '管理员管理'
          }
        }
      ]
    }
  ]
})

export default router;
