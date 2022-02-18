import NProgress from "nprogress";

export default (router) => {
  router.beforeEach((to, form, next) => {
    NProgress.start();
    next();
  });

  router.afterEach(NProgress.done);
};
