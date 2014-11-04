var AssetGraph = require('assetgraph-builder');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['build'],

    mkdir: {
      build: {
        create: 'dist'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-mkdir');

  grunt.registerTask('assetgraph', function () {
    var done = this.async();

    new AssetGraph({ root: 'src/'})
      .logEvents()
      .registerRequireJsConfig()
      .loadAssets([ '**/*.html' ])
      .populate({
        from: {
          type: 'Html'
        },
        followRelations: {
          type: 'HtmlScript',
          to: {
            url: /^file:/
          }
        }
      })
      .removeRelations({
        type: 'HtmlScript',
        to: {
          url: /prefixfree\.js/
        }
      }, { detach: true , removeOrphan: true, unresolved: true })
      .buildProduction({
        recursive: false,
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
        optimizeImages: true,
        inlineSize: 4096,
        asyncScripts: true
      })
      .writeAssetsToDisc({ url: /^file:/, isLoaded: true}, 'dist/' )
    .writeStatsToStderr()
    .run(done);
  });

  grunt.registerTask('default', ['dist']);
  grunt.registerTask('dist', ['clean', 'mkdir', 'assetgraph']);
};
