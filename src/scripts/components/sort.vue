<template>
	<div class="sort" id="sort">
	<header>
		<b>分类</b>
		<i class="yo-ico">&#xe617;</i>
	</header>
	<section>
		<ol>
			<router-link :to="'/list'">
				<li v-for='item in list'>
				<div>
					<p>
						<b>{{item.sort}}</b>
						<b>进入专区</b>
					</p>
				</div>
			</li>
			</router-link>	
		</ol>
	</section>
</div>
</template>
<script>
	var common = require('../utils/util.common.js');
	module.exports = {
    data:function () {
      return {
		list:[]
		}
    },
    mounted:function(){
			fetch('/api/list').then(response => response.json())
			.then(res => {
				var that = this
        		that.list = res;
				console.log(res)			
			});
		}
   
  }
</script>
