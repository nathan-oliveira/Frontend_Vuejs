export default {
  path: '/notes/cadastrar',
  name: 'notesCadastrar',
  meta: {
    login: true,
  },
  component: () => import('@/views/notes/Form.vue')
};
