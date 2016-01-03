module.exports = function(grunt) {
  require('jit-grunt')(grunt);




  grunt.initConfig({

  watch: {
    options: {
      livereload: true,
    },
    css: {
      files: ['css/**/*.css'],
    },
    js: {
      files: ['js/**/*.js'],
    },
    html: {
      files: ['*.html'],
    }
  },
  connect: {
    server: {
      options: {
        port: 9000,
        base: '.',
        hostname: '0.0.0.0',
        protocol: 'http',
        livereload: true,
        open: true,
      }
    }
  },

    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/main.css": "less/main.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });
grunt.registerTask('default', ['less', 'watch',]);
grunt.registerTask('server', ['connect','watch']);
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');

};