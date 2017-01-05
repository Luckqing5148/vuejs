<template>
	<div class="sort" id="sort">
	<header>
		<b>分类</b>
		<i class="yo-ico">&#xe617;</i>
	</header>
	<section>
		<ol>
			<li v-for='item in list'>
				<div>
					<p>
						<b>{{item.sort}}</b>
						<b>进入专区</b>
					</p>
				</div>
			</li>
			
		</ol>
	</section>
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
				console.log(res)
				this.list = res;
			})
		}
  }
</script>
