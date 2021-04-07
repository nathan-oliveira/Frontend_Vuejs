export default {
  path: '/cadastrar',
  name: 'cadastrar',
  meta: {
    access: true,
  },
  component: () => import('@/views/auth/Cadastrar.vue')
}
