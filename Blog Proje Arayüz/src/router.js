import Vue from "vue";
import homepage from "./Components/Home/homepage.vue";
import WriterAbout from "./Components/WriterAbout/writerAbout.vue";
import Comments from "./Components/WriterAbout/comments.vue";
import contactMail from "./Components/Contact/contactMail.vue";
import register from "./Components/Register/register.vue";
import login from "./Components/Login/login.vue";
import BlogListByWriter from "./Components/writerDashboard/BlogListByWriter.vue";
import adminBlog from "./Components/Admin/adminBlog.vue";
import adminComment from "./Components/Admin/adminComment.vue";
import adminCommentUpdate from "./Components/Admin/adminCommentUpdate.vue";
import adminBlogAdd from "./Components/Admin/adminBlogAdd.vue";
import adminBlogUpdate from "./Components/Admin/adminBlogUpdate.vue";
import adminMessage from "./Components/Admin/adminMessage.vue";
import adminRole from "./Components/Admin/adminRole.vue";
import adminRoleUpdate from "./Components/Admin/adminRoleUpdate.vue";
import adminUsers from "./Components/Admin/adminUsers.vue";
import adminRoleAssign from "./Components/Admin/adminRoleAssign.vue";
import adminChart from "./Components/Admin/adminChart.vue";
import allWriterAbout from "./Components/WriterAbout/allWriterAbout.vue";
import CreateBlog from "./Components/CreateBlog/CreateBlog.vue";
import adminWriter from "./Components/Admin/adminWriter.vue";

import { store } from "./store/store";

import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
  {
    path: "",
    component: homepage,
    name: "anaSayfa",
  },
  {
    path: "/src/Components/WriterAbout/writerAbout.vue",
    component: WriterAbout,
    name: "yazarhakkinda",
  },
  {
    path: "/src/Components/WriterAbout/comments.vue",
    component: Comments,
    name: "yorumlar",
  },
  {
    path: "/src/Components/Contact/contactMail.vue",
    component: contactMail,
    name: "iletisim",
  },
  {
    path: "/src/Components/Register/register.vue",
    component: register,
    name: "kayitol",
  },

  {
    path: "/src/Components/Login/login.vue",
    component: login,
    name: "girisyap",
  },
  {
    path: "/src/Components/writerDashboard/BlogListByWriter.vue",
    component: BlogListByWriter,
    name: "yazarliste",
  },
  {
    path: "/src/Components/Admin/adminBlog.vue",
    component: adminBlog,
    name: "adminblog",
  },
  {
    path: "/src/Components/Admin/adminComment.vue",
    component: adminComment,
    name: "adminyorum",
  },
  {
    path: "/src/Components/Admin/adminCommentUpdate.vue",
    component: adminCommentUpdate,
    name: "yorumguncelle",
  },
  {
    path: "/src/Components/Admin/adminBlogAdd.vue",
    component: adminBlogAdd,
    name: "blogekle",
  },
  {
    path: "/src/Components/Admin/adminBlogUpdate.vue",
    component: adminBlogUpdate,
    name: "blogguncelle",
  },
  {
    path: "/src/Components/Admin/adminMessage.vue",
    component: adminMessage,
    name: "mesajislemi",
  },
  {
    path: "/src/Components/Admin/adminRole.vue",
    component: adminRole,
    name: "rolislemi",
  },
  {
    path: "/src/Components/Admin/adminRoleUpdate.vue",
    component: adminRoleUpdate,
    name: "rolguncelleme",
  },
  {
    path: "/src/Components/Admin/adminUsers.vue",
    component: adminUsers,
    name: "kullanicilar",
  },
  {
    path: "/src/Components/Admin/adminRoleAssign.vue",
    component: adminRoleAssign,
    name: "rolatama",
  },
  {
    path: "/src/Components/Admin/adminChart.vue",
    component: adminChart,
    name: "chart",
  },
  {
    path: "/src/Components/WriterAbout/allWriterAbout.vue",
    component: allWriterAbout,
    name: "tümyazarlar",
  },
  {
    path: "/src/Components/CreateBlog/CreateBlog.vue",
    component: CreateBlog,
    name: "blogolusturma",
  },
  {
    path: "/src/Components/Admin/adminWriter.vue",
    component: adminWriter,
    name: "adminyazar",
  },
];
export const router = new VueRouter({
  mode: "history",
  routes,
});
