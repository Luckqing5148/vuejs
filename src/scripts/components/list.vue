<template>
  <div class="list" id="list">
  <header>
    <router-link :to="'/sort'">
      <i><img src="/images/images/return1.png"></i>
    </router-link>
    
    <b v-for="item in list" v-if="$route.params.sortid==item.produceid">{{item.sort}}</b>
  </header>
  <section>
   <div id="index-scroll">
            <div class="scroll-container">
              <div class="head">
                <img src="/images/images/arrow.png" width="40" height="40"/>
                <span>下拉刷新...</span>
              </div>
             <ol>
                    <li v-for="item in list" v-if="$route.params.sortid==item.produceid">
                    <div>
                      <img :src="item.imgsrc">
                    </div>
                    <div>
                      <h2 v-text="item.title"></h2>
                      <h3 v-text="item.instruction"></h3>
                      <span v-text="item.nowprice"></span>
                      <b v-text="item.sales"></b>
                      <b class="price" v-text="item.oldprice"></b>
                    </div>
                    </li>   
                  </ol>
              <div class="foot">
                <img src="/images/images/arrow.png" width="40" height="40"/>
                <span>上拉加载更多...</span>
              </div>
            </div>
          </div>
  </section>
</div>
</template>
<script>
var common = require('../utils/util.common.js');
  module.exports = {
    data: function () {
      return {
      list:[]
      }
    },

    mounted:function(){
      fetch('/api/list').then(response => response.json()).then(res => {
            var that = this
            that.list = res;
        console.log(res)
        common.isAllLoaded('#index-scroll ol', function () {
              common.scroll(that);
            })
        
      })
    }
  }
</script>

