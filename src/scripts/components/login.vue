<template>
	<div class="login" id="login">
		<header>
			<ul>
				<li><img src="/images/images/return1.png" alt=""></li>
				<li>登录</li>
				<li></li>
			</ul>
		</header>
		<section>
			<ul>
				<li>
					<div>
						<span class="yo-ico">&#xe602;</span>
						<input type="text" placeholder="请输入手机号码">
					</div>
				</li>
				<li>
					<div>
						<span class="yo-ico">&#xe60a;</span>
						<input type="text" placeholder="请输入您的密码">
					</div>
				</li>
			</ul>
		</section>
		<div class="footer">
			<div class="reg">
				<input type="button" value="登录">
			</div> 
			<div class="zc">
				<router-link :to="'/register'">
					<span class="left">注册</span>
				</router-link>
				
				<span class="right">忘记密码</span>
			</div>
			<div class="log">
				<span class="hr"></span>
				<div>第三方账号登录</div>
			</div>
			<div class="img">
				<img src="/images/images/wechat2x.png" alt="">
				<img src="/images/images/qq2x.png" alt="">
			</div>
		</div>
	</div>
</template>