<template>
  <div class="index">
    <router-view></router-view>
  <footer>
    <ul>
     <li @click="changeNav(i)" :class="{active: i==navIndex}" v-for="(fn,i) in footerNav">
          <router-link :to="fn.router">
            <i class="yo-ico" v-html="fn.ico"></i>
            <b>{{fn.title}}</b>
          </router-link>
        </li>
    </ul>
  </footer>
</div>
</template>
<script>
  module.exports = {
    data: function () {
      return {
        navIndex: 0,
        footerNav: [
          {
            router: '/',
            ico: '&#xe7ae;',
            title: '首页'
          },
          {
            router: '/sort',
            ico: '&#xe65b;',
            title: '分类'
          },
           {
            router: '/cart',
            ico: '&#xe611;',
            title: '购物车'
          },
          {
            router: '/login',
            ico: '&#xe609;',
            title: '我的'
          }
        ]
      }
    },
    methods: {
      changeNav: function (index) {
        this.navIndex = index;
      }
    }
  }
</script>