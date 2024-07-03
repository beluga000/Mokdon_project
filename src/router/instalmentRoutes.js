const BaseLayout = () => import("../layouts/MainLayout.vue");

const instalmentRoutes = [
  {
    path: '/instalment',
    name: "instalment",
    props: true,
    component: BaseLayout,
    children: [
      {
        path: "InstalmentList",
        name: "InstalmentList",
        props: true,
        component: () => import("../pages/instalment/InstalmentList.vue")
      },
      {
        path: "InstalmentDetail/:id",
        name: "InstalmentDetail",
        props: true,
        component: () => import("../pages/instalment/InstalmentDetail.vue")
      }
    ]
  },
]
export default instalmentRoutes
