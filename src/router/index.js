import Vue from "vue";
import VueRouter from "vue-router";
import AppLayout from "../components/AppLayout.vue";
//import Session from "../views/Session.vue";
//import Connect from "../views/Connect.vue";
import LoginLayout from "../components/LoginLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: { name: "connect" }
  },

  {
    path: "/",
    component: LoginLayout,
    children: [
      {
        name: "connect",
        path: "connect",
        component: () =>
          import(/* webpackChunkName: "connect" */ "../views/Connect.vue"),
        props: true
      },
      {
        path: "",
        redirect: { name: "connect" }
      }
    ]
  },
  // {
  //   path: "/connect",
  //   name: "connect",
  //   component: Connect
  // },
  {
    path: "/session",
    name: "session",
    redirect: { name: "connect" },
    component: AppLayout,
    props: true,
    children: [
      {
        name: "capture",
        path: "capture",
        component: () =>
          import(
            /* webpackChunkName: "capture" */ "../components/session/Capture.vue"
          ),
        default: true,
        props: true
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/unsupported",
    name: "unsupported",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Unsupported.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
