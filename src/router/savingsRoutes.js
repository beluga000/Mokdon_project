const BaseLayout = () => import("../layouts/MainLayout.vue");

const savingsRoutes = [
  {
    path: "/savings",
    name: "savings",
    props: true,
    component: BaseLayout,
    children: [
      {
        path: "SavingsAccount/:id?",
        name: "SavingsAccount",
        props: true,
        component: () => import("../pages/savings/SavingsAccount.vue"),
      },
      {
        path: "cards/:id",
        name: "CardDetail",
        props: true,
        component: () => import("../pages/savings/CardDetail.vue"),
      },
    ],
  },
];
export default savingsRoutes;
