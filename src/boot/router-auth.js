import store from '../store'

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    const tienda = store()
    //console.log(tienda)
    const { state } = tienda
    const { auth } = state
    const { login } = auth

    let authRequired = to.matched.some(route => route.meta.login);

    if (!login && authRequired) {
      next('/');
    } else if (login && !authRequired) {
      next('/mantenedor');
    } else {
      next();
    }
  });

}