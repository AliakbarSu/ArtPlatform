import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/TheHomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about/TheAboutPage.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/cart/TheCartPage.vue")
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/checkout/TheCheckoutPage.vue")
  },
  {
    path: "/library",
    name: "Library",
    component: () => import("../views/library/TheLibraryPage.vue")
  },
  {
    path: "/course",
    name: "Course",
    component: () => import("../views/course/TheCoursePage.vue")
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("../views/gallery/TheGalleryPage.vue")
  },
  {
    path: "/login",
    name: "Log in",
    component: () => import("../views/login/TheLoginPage.vue")
  },
  {
    path: "/sign-up",
    name: "Sign up",
    component: () => import("../views/sign-up/TheSignupPage.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/contact/TheContactPage.vue")
  },
  {
    path: "/email-confirmation",
    name: "Eamil Verification Confirmation",
    component: () =>
      import("../views/email-confirmation/TheEmailConfirmationPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
