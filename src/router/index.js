import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("../views/Main/Main.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("../views/Main/Home/Home.vue"),
        meta: { title: "首页", isShow: true, icon: "HomeFilled" },
      },
      {
        path: "/user",
        meta: { title: "用户管理", isShow: false, icon: "UserFilled" },
        children: [
          {
            path: "/user/userlist",
            component: () => import("../views/Main/User/UserList.vue"),
            meta: { title: "用户列表" },
          },
          {
            path: "/user/usermanage",
            component: () => import("../views/Main/User/UserManage.vue"),
            meta: { title: "个人信息" },
          },
        ],
      },
      {
        path: "/mall",
        meta: { title: "商品管理", isShow: false, icon: "Briefcase" },
        children: [
          {
            path: "/mall/userlist",
            component: () => import("../views/Main/User/UserList.vue"),
            meta: { title: "商品列表" },
          },
          {
            path: "/mall/usermanage",
            component: () => import("../views/Main/User/UserManage.vue"),
            meta: { title: "商品信息" },
          },
        ],
      },
    ],
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
