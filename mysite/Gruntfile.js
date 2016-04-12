module.exports = function(grunt) {
	// config
	grunt.initConfig({

		/*
		task: {
			target: {
				設定
			},
			target2: {
				設定
			}
		}
		*/


		less: {
			build1: {
				src: 'src/style1.less',
				dest: 'build/styles.css'
			},
                        build2: {
                                src: 'src/style1.less',
                                dest: 'build/styles.css'
                        }
		}
	});

	// plugin設定を記述
	grunt.loadNpmTasks('grunt-contrib-less');

	// tasks登録
	grunt.registerTask('default', 'less');
	grunt.registerTask('task1', 'less:build1');
	grunt.registerTask('task2', 'less:build2');

}
