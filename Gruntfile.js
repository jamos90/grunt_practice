module.exports = function(grunt){

  //holds all configuration for all of the tasks. Prefinded tasks look in the config file to see what to do.
   grunt.initConfig({
    concat: {
    js: {
      src: ['js/1.js', 'js/2.js'],
      dest: 'build/js/scripts.js',
    },
    css: {
      src: ['styles/css1.css', 'styles/css2.css'],
      dest: 'build/styles/cssmain.css',
    }
  },
   watch: {
    js: {
    files: ['js/**/*.js'],
    tasks: ['concat'],
  },
   css: {
    files: ['styles/**/*.css'],
    tasks: ['concat'],
  },
 },
 });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('helloworld', function (){
    console.log("Hello World");
  });

  grunt.registerTask('speak', () => {
    console.log("Im speaking");
  });

  grunt.registerTask('both', ['helloworld', 'speak']);

  grunt.registerTask('default', ['concat', 'watch']);

}
