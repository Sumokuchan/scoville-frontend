import Vue from "vue"
import Router from "vue-router"
import ListArticles from "@/components/ListArticles.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "list-articles",
      component: ListArticles
    },
    {
      path: "/article/:id",
      name: "article",
      // route level code-splitting
      // this generates a separate chunk (create-article.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "article" */ "./components/Article.vue")
    },
    {
      path: "/create",
      name: "create",
      // route level code-splitting
      // this generates a separate chunk (create-article.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "create-article" */ "./components/CreateArticle.vue"
        )
    }
  ]
})
