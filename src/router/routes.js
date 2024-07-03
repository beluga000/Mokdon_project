import savingsRoutes from './savingsRoutes';
import depositRoutes from './depositRoutes';
import instalmentRoutes from './instalmentRoutes';
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/login', component: () => import('pages/etc/login.vue') },
      { path: '/cardlist', component: () => import('pages/card/cardList.vue') },
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  ...savingsRoutes,
  ...depositRoutes,
  ...instalmentRoutes
]

export default routes
