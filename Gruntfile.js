// module.exports=function(grunt){
//   grunt.initConfig({
//     pkg:grunt.file.readJSON('package.json')
//     concat: {
//       // 这里是concat任务的配置信息。
//       optiosn:{
  
//       },
//       bar: {
//         src: ['src/index.js'],
//         dest: 'dest/index.js',
//       },
//     },
//   });
// }
// module.exports = function(grunt) {

//   grunt.initConfig({
//     jshint: {
//       files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
//       options: {
//         globals: {
//           jQuery: true
//         }
//       }
//     },
//     watch: {
//       files: ['<%= jshint.files %>'],
//       tasks: ['jshint']
//     },
//      concat: {
//       // 这里是concat任务的配置信息。
//       optiosn:{
  
//       },
//       bar: {
//         src: ['src/index.js'],
//         dest: 'dest/index.js',
//       },
//     },
//   });

//   grunt.loadNpmTasks('grunt-contrib-jshint');
//   grunt.loadNpmTasks('grunt-contrib-watch');

//   grunt.registerTask('default', ['jshint']);

// };
// module.exports = function (grunt) {
//   require('load-grunt-tasks')(grunt);
//   var path = {
//       dest: 'dest/',
//       src: 'src/'
//   };
//   grunt.initConfig({
//       gpath: path,
//       concat: {
//         test: {
//           options: {
//               process: function(src, filepath) {
//                   return src.replace(/hello/g, 'hi');
//               }
//           },
//           files: [
//               {
//                   src:  '<%= gpath.src %>*.js',
//                   dest: '<%= gpath.dest %>index.js'
//               }
//           ]
//       }
//       }
//   });
//   grunt.registerTask('default', ['concat']);
// };
module.exports=function(grunt){
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      dist: {
        src: ['src/index.js'],
        dest: 'dist/index.js',
      },
    },
  qunit:{
    all:['test/*.html']
  }
  });
  grunt.registerTask('default', ['qunit']);
}