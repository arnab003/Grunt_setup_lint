module.exports = function(grunt) {
       'use strict';
       // Project configuration.
       grunt.initConfig({
               jshint: {
    					files: ['src/*.js']
    				},
    			watch: {
			           files: ['src/*.js'],
			           tasks: ['jshint']
         		}
       });
      grunt.loadNpmTasks('grunt-contrib-jshint');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.registerTask('lint', ['jshint']);
};