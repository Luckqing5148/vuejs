require('./styles/usage/app.scss')
var layout = require('./scripts/tpls/layout.html')
var common = require('./scripts/utils/util.common.js')
common.render(layout)
import index from "./scripts/components/index.vue"
import home from "./scripts/components/home.vue"
import sort from "./scripts/components/sort.vue"
import cart from "./scripts/components/cart.vue"
import my from "./scripts/components/my.vue"
const routes = [{
    path: '/',
    component: index,
    children: [{
        path: '/',
        component: home
    },{
        path: '/sort',
        component: sort
    },{
        path: '/cart',
        component: cart
    },
    {
        path: '/my',
        component: my
    }
    ]
}]

const router = new VueRouter({
    routes:routes // （缩写）相当于 routes: routes
})

const app = new Vue({
    router:router

    // render:h => h(home)
}).$mount('#app')
