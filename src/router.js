import Vue from "vue";
import Layout from "@/components/Layout";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "首页",
      component: Layout,
      redirect: "dashboard",
      meta: {
        title: "首页",
        icon: "el-icon-s-home"
      },
      children: [
        {
          path: "dashboard",
          component: () => import("@/views/Dashboard")
        }
      ]
    },
    {
      path: "/form",
      component: Layout,
      meta: {
        title: "表单生成",
        icon: "el-icon-s-marketing"
      },
      children: [
        {
          path: "",
          component: () => import("@/views/FormEditor")
        }
      ]
    },
    {
      path: "/code-editor",
      component: Layout,
      meta: {
        title: "在线编辑器",
        icon: "el-icon-s-platform"
      },
      children: [
        {
          path: "",
          component: () => import("./views/CodeEditor/index")
        }
      ]
    }
  ]
});
