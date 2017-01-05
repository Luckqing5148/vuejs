
// require('../lib/swiper.js')
// var Vue = require('../lib/vue.js')
new Vue({
	el:'#home',
	data:{
		list:[],
		banner:['/images/images/IMG_4730_02.png','/images/images/IMG_4730_02.png','/images/images/IMG_4730_02.png','/images/images/IMG_4730_02.png','/images/images/IMG_4730_02.png']			
	},
	mounted:function(){
			fetch('/api/list').then(response => response.json())
			.then(res => {
				console.log(res)
				this.list = res;
				console.log(res)
				this.swiper = new Swiper("#index-swiper",{
					loop:true,
					pagination : '.swiper-pagination',
					autoplay:2000,
					autoplayStopOnLast : true,
				})
			})
		}
})