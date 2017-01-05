<template>
	<div class="home" id="home">
		<header>
			<ul>
				<li>
				<div>
					<b class="yo-ico">&#xe61f;</b>
				    <input type="text">
				</div>
				
				</li>
				<li class="yo-ico">&#xe611;</li>
			</ul>
		</header>
		<section>
			<div>
				<div class="swiper-container" id="index-swiper">
	  				<div id="swipet-font" class="swiper-wrapper">
	    				<div class="swiper-slide" v-for="item in banner">
	    					<img v-bind:src="item">
	    				</div>
					 </div>
	 			<div class="swiper-pagination">
	 				
	 			</div>
				</div>
			</div>
			<div>
			<p>
				<b>e食汇公告</b>
				<b class="yo-ico">&#xe603;</b>
				<b>e食汇退出限时抢购活动，优惠不断，欢迎前来选购</b>
			</p>
				
			</div>
			<div>
				<ul>
					<li>
						<img src="/images/images/news.png">
						<b>新品抢购</b>
					</li>
					<li>
						<img src="/images/images/limit.png">
						<b>限时抢购</b>
					</li>
					<li>
						<img src="/images/images/hot.png">
						<b>热销商品</b>
					</li>
					<li>
						<img src="/images/images/integral.png">
						<b>积分兑换</b>
					</li>
				</ul>
			</div>
			<div>
				<h1>商家推荐</h1>
				<ol>
					<li v-for="item in list">
					<div>
						<img src="/images/images/IMG_4731_03.png">
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
			</div>
		</section>
	</div>
</template>


<script>

  module.exports = {
    data: function () {
      return {
		list:[],
		banner:['/images/images/IMG_4730_02.png','/images/images/IMG_4730_02.png','/images/images/IMG_4730_02.png','/images/images/IMG_4730_02.png','/images/images/IMG_4730_02.png']			
      }
    },

    mounted:function(){
			fetch('/api/list').then(response => response.json()).then(res => {
				console.log(res)
				this.list = res;
				this.swiper = new Swiper("#index-swiper",{
					loop:true,
					pagination : '.swiper-pagination',
					autoplay:2000,
					autoplayStopOnLast : true,
				})
			})
		}
  }
</script>


