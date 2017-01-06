<template>
	<div class="detail">
		<header>
			<ul>
				<router-link :to="'/'">
					<li class="yo-ico">&#xe617;</li>
				</router-link>
				<li v-for="item in list" v-if="$route.params.id==item.id">{{item.title}}</li>
				<router-link :to="'/cart'">
				<li class="yo-ico">&#xe611;</li>
				</router-link>
			</ul>
		</header>
		<section v-for="item in list" v-if="$route.params.id==item.id">
			<div>
				<img :src="item.imgsrc" alt="">
			</div>
			<div>
				<h1>{{item.title}}</h1>
				<h1>{{item.nowprice}}</h1>
			</div>
			<div>肉票使用相关规则</div>
			<div>商品详情</div>
			<div>
				<img :src="item.imgsrc" alt="">
				<img :src="item.imgsrc" alt="">
			</div>
		</section>
		<footer>
			
				<b>
					<router-link :to="'/cart'">
						加入购物车
					</router-link>	
				</b>
			
			
		</footer>
	</div>
</template>
<script>
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