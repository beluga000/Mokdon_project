const BaseLayout = () => import("../layouts/MainLayout.vue");

const depositRoutes = [
  {
    path: '/deposit',
    name: "deposit",
    props: true,
    component: BaseLayout,
    children: [
      {
        path: "DepositList",
        name: "DepositList",
        props: true,
        component: () => import("../pages/deposit/DepositList.vue")
      },
      {
        path: "DepositDetail/:id",
        name: "DepositDetail",
        props: true,
        component: () => import("../pages/deposit/DepositDetail.vue")
      }
    ]
  },
]
export default depositRoutes
