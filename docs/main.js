import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from './App.vue'

// new Vue({ // eslint-disable-line no-new
//   el: '#app',
//   render: h => h(App)
// })

Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Root = { template: '<div>this is home</div>' }

import ButtonSamples from './Buttons.vue'
import ToolbarSamples from './Toolbar.vue'
import SidebarSamples from './Sidebar.vue'
import NavSamples from './Nav.vue'
import ExampleUI from './Example.vue'

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Root },
  { path: '/foo', component: ButtonSamples },
  { path: '/bar', component: ToolbarSamples },
  { path: '/sidebar', component: SidebarSamples },
  { path: '/nav', component: NavSamples },
  { path: '/example', component: ExampleUI }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!
