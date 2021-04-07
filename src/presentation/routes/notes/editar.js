export default {
  path: '/notes/editar/:id',
  name: 'notesEditar',
  meta: {
    login: true,
  },
  component: () => import('@/views/notes/Form.vue')
};
