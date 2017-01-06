<template>
	<div class="cart" id="cart">
		<header>
			<ul>
				<li class="yo-ico">&#xe617;</li>
				<li>购物车</li>
				<li>编辑</li>
			</ul>
		</header>
		<section>
			<div class="res" v-for="item in list" v-if="$route.params.id==item.id">
				<div>
					<div class="gx">
						<input type="checkbox" id="checkbox01" />
						<label for="checkbox01"></label>
					</div>
				</div>
				<img :src="item.imgsrc">
				<div>
					<h2>{{item.title}}</h2>
					<h3>{{item.sort}}</h3>
					<span>{{item.nowprice}}</span>
					<div>
						<input type="button" value="-">
						<input type="text" value="1">
						<input type="button" value="+">
					</div>
				</div>
			</div>
				<div class="count">
					<div class="gx">
						<input type="checkbox" id="checkbox00" />
						<label for="checkbox00"></label>
					</div>
					<b>全选</b>
					<b class="je">总金额<b>0.00</b></b>
					<span>计算</span>
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
            this.list = res;
      })
    }
  }
</script>