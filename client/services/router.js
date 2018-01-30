import Vue		from "vue";
import Router	from "vue-router";

// Components
import Index 					from "@/client/components/templates/layout/index";
import About 					from "@/client/components/templates/about/_about";

import Example 				from "@/client/components/templates/example/_example";
import ExampleIndex		from "@/client/components/templates/example/index";
import Example01 			from "@/client/components/templates/example/example_01";
import Example02 			from "@/client/components/templates/example/example_02";

import Page404					from "@/client/components/templates/layout/page_404";

Vue.use(Router)

const router = new Router({
	mode: "history",
	routes: [
    { path: "/",        name: "index", component: Index },
    { path: "/about/",  name: "about", component: About },

    { path: "/example", component: Example, 
      children: [
        { path: "/",          name: "example_index",  component: ExampleIndex },
        { path: "example-1",  name: "example_1",      component: Example01 },
        { path: "example-2",  name: "example_2",      component: Example02 },
      ]
    },

    { path: "*", component: Page404, name: "Page_404"}
  ],
})

router.beforeEach((to, from, next) => {
  next();
})

router.afterEach((to, from) => {
})

router.onError(err => {
})

export default router