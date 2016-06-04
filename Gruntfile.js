module.exports = function(grunt){
		
	'use strict';

	require('load-grunt-tasks')(grunt);


	grunt.initConfig({

		connect: {

			server: {

				options: {
					base: '.',
					open: true,
					livereload: true,
				}

			}

		},

			
	    htmlbuild: {
	    	
					
			dev: {
	    		src: 'index.template.html',
	    		dest: 'index.html',
	    		options: {
					
	    	
	    			styles: {
		               
		                vendor: [
							'bower_components/angular-material/angular-material.min.css', 
							'bower_components/angular-material-icons/angular-material-icons.css'
							],

		                app: 'style.css'

		            },

		            scripts: {
		            	vendor: [
		            		'bower_components/angular/angular.min.js',
		            		'bower_components/angular-animate/angular-animate.min.js',
		            		'bower_components/angular-aria/angular-aria.min.js',
		            		'bower_components/angular-material/angular-material.min.js',
							'bower_components/angular-material-icons/angular-material-icons.min.js'
		            	],

		            	main: 'app.js',

		            	
						controllers: [
		            		'components/list/list.js'							
		            	]

		            },
					
					sections: {
						components: [
							'components/list/list.html'
						]
					}
	    		}
	    	}
		},
			
			

		watch: {
			
			options: {
				livereload: true
			},
			
			html: {
				files: ['index.template.html', 'components/**/*.html'],
				tasks: ['htmlbuild']			
			},
			
			css: {
				files: ['style.css']
			},
			
			js: {
				files: ['components/**/*.js', 'app.js']
			},
			
			grunt: {				
				files: ['Gruntfile.js']	
			}
		}
	
	//
	

	});

	
	grunt.registerTask('serve', ['htmlbuild', 'connect', 'watch']);
	grunt.registerTask('default', ['serve']);
}
