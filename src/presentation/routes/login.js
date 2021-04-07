export default {
  path: '/login',
  name: 'login',
  meta: {
    access: true,
  },
  component: () => import('@/views/auth/Login.vue')
}
