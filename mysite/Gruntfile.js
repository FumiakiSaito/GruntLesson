module.exports = function(grunt) {
	// config
	grunt.initConfig({
		less: {
			build: {
				src: 'src/style1.less',
				dest: 'build/styles.css'
			}
		}
	});

	// plugin設定を記述
	grunt.loadNpmTasks('grunt-contrib-less');

	// tasks登録
	grunt.registerTask('default', 'less');

}
