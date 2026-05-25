import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddEmployee from "../views/AddEmployee.vue";
import EditEmployee from "../views/EditEmployee.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/add-employee",
    component: AddEmployee,
  },
  {
    path: "/edit-employee/:id",
    component: EditEmployee,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
