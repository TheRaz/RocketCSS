module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			build: {
				files: {
					'dist/css/rocket.css': 'src/less/rocket.less'
				},
				options: {
					compress: true,
					yuicompress: true,
					ieCompat: true,
					sourceMap: true,
					sourceMapFilename: 'dist/css/rocket.css.map',
					relativeUrls: true,
					sourceMapURL: 'rocket.css.map',
					outputSourceFiles: true
				}
			}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: 'dist/css/',
				src: ['*.css', '!*.min.css'],
				dest: 'dist/css/',
				ext: '.min.css'
			}
		},
		cssbeautifier : {
			files : ["dist/css/*.css"]
		},
		watch: {
			less: {
				files: ['src/less/**/*.less'],
				tasks: ['less','cssbeautifier','cssmin'],
				options: {
					livereload: true,
					nospaces: true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-cssbeautifier');

	grunt.registerTask('watch-less', ['watch:less']);
};