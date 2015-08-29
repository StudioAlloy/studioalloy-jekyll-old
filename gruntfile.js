/* globals module, require */

module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    sass: {
      global: {
        options: {
          style: "expanded"
        },
        files: {
          "css/main-unprefixed.css": "_sass/main.scss"
        }
      }
    },

    autoprefixer: {
      global: {
        src: "css/main-unprefixed.css",
        dest: "css/main.css"
      }
    },

    shell: {
      jekyllServe: {
        command: "jekyll serve --config _config-dev.yml"
      },
      jekyllBuild: {
        command: "jekyll build --config _config-dev.yml"
      }
    },

    watch: {
      options: {
        livereload: true
      },
      site: {
        files: ["index.html", "blog.html", "team.html", "work.html", "_layouts/*.html", "_posts/*.md", "_work/*.md", "_includes/*.html"],
        tasks: ["shell:jekyllBuild"]
      },
      js: {
        files: ["js/*.js"],
        tasks: ["uglify", "shell:jekyllBuild"]
      },
      css: {
        files: ["_sass/*.scss"],
        tasks: ["sass", "autoprefixer", "shell:jekyllBuild"]
      }

    }

  });

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("serve", ["shell:jekyllServe"]);
  grunt.registerTask("default", ["sass", "autoprefixer", "shell:jekyllBuild", "watch"]);

};
