const BaseLayout = () => import("../layouts/MainLayout.vue");

const savingsRoutes = [
  {
    path: '/savings',
    name: "savings",
    props: true,
    component: BaseLayout,
    children: [
      {
        path: "SavingsAccount",
        name: "SavingsAccount",
        props: true,
        component: () => import("../pages/savings/SavingsAccount.vue")
      },
      {
        path: "SavingsAccount_Menu/:id",
        name: "SavingsAccount_Menu",
        props: true,
        component: () => import("../pages/savings/SavingsAccount_Menu.vue")
      },
      {
        path: "cards/:id",
        name: "CardDetail",
        props: true,
        component: () => import("../pages/savings/CardDetail.vue")
      }
    ]
  },
]
export default savingsRoutes
