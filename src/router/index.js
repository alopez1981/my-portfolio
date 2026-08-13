import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("../views/HomePage.vue") },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutPage.vue"),
  },
  {
    path: "/capabilities",
    name: "capabilities",
    component: () => import("../views/CapabilitiesPage.vue"),
  },
  {
    path: "/case-studies",
    name: "case-studies",
    component: () => import("../views/CaseStudiesPage.vue"),
  },
  {
    path: "/case-studies/:slug",
    name: "case-study-detail",
    component: () => import("../views/CaseStudyDetailPage.vue"),
  },
  {
    path: "/journey",
    name: "journey",
    component: () => import("../views/JourneyPage.vue"),
  },
  {
    path: "/stack",
    name: "stack",
    component: () => import("../views/TechStackPage.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
