
// var swiper = require('../lib/swiper.js')
// var Vue = require('../lib/vue.js')
// var zepto = require('../lib/zepto.js')
// var iscroll = require('../lib/iscroll-probe.js')
var common = require('../utils/util.common.js')
console.log(common)
new Vue({
	el:'#list',
	data:{
		list:[],			
	},
	mounted:function(){
			fetch('/api/list').then(response => response.json())
			.then(res => {
				var that = this
        		that.list = res;
				console.log(res)
				common.isAllLoaded('#index-scroll ol', function () {
          		common.scroll(that);
        		})
			});
		
		}
})