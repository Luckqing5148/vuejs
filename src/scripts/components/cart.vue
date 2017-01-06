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
			<div class="res">
				<div>
					<div class="gx">
						<input type="checkbox" id="checkbox01" />
						<label for="checkbox01"></label>
					</div>
				</div>
				<img src="/images/images/IMG_4731_03.png">
				<div>
					<h2>舜皇山土猪合家欢生鲜套餐288元/盒</h2>
					<h3>生鲜套餐</h3>
					<span>￥288</span>
					<div>
						<input type="button" value="-" id="jian">
						<input type="text" value="1" id="val">
						<input type="button" value="+" id="jia" @click="jia()">
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