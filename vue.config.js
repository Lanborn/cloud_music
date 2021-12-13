module.exports = {
	lintOnSave: false, // 关闭语法检查
	// 方式一
	// devServer: {
	// 	proxy: 'http://localhost:5000' // 开启代理服务器 ==> 解决跨域问题
	// }
	// 方式二
	devServer: {
		proxy: {
		  '/song': {
			target: 'http://localhost:3000',
			// pathRewrite: {'^/getUrl':''},
			ws: true,
			changeOrigin: true
		  },
		}
	}, 
}