<template>
	<div class="detail">
		<header>
			<ul>
				<router-link :to="'/'">
					<li class="yo-ico">&#xe617;</li>
				</router-link>
				<li>详情页</li>
				<router-link :to="'/cart'">
				<li class="yo-ico">&#xe611;</li>
				</router-link>
			</ul>
		</header>
		<section>
			<div>
				<img src="/images/images/20170103152742_02.png" alt="">
			</div>
			<div>
				<h1>sddsd</h1>
				<h1>￥111</h1>
			</div>
			<div>肉票使用相关规则</div>
			<div>商品详情</div>
			<div>
				<img src="/images/images/20170103152742_02.png" alt="">
				<img src="/images/images/20170103152742_02.png" alt="">
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