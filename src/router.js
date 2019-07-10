import Vue from "vue";
import Layout from "@/components/Layout";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: "dashboard",
      meta: {
        title: "首页"
      },
      name: "首页",
      children: [{ path: "dashboard", component: () => import("@/views/Dashboard") }]
    },
    {
      path: "/form",
      component: Layout,
      redirect: "edit",
      meta: {
        title: "表单生成"
      },
      children: [
        {
          path: "",
          component: () => import("@/views/FormEditor"),
          meta: { title: "创建见闻广告", cat_owners: "ownerwscn" }
        }
      ]
    },
    {
      path: "/code-editor",
      component: Layout,
      redirect: "edit",
      meta: {
        title: "在线编辑器"
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
