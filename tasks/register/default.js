module.exports = function(grunt) {
  grunt.registerTask('default', [
    'wiredep',
    'compileAssets',
    'linkAssetsBuild',
    'watch'
  ]);
};
