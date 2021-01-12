/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */



// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  //bower
  'bower_components/angular-ui-notification/dist/angular-ui-notification.css',
  //END:bower
  'styles/**/*.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [
  //bower
  'bower_components/angular/angular.js',
  'bower_components/jquery/dist/jquery.js',
  'bower_components/angular-animate/angular-animate.js',
  'bower_components/angular-messages/angular-messages.js',
  'bower_components/angular-route/angular-route.js',
  'bower_components/angular-sanitize/angular-sanitize.js',
  'bower_components/angular-xeditable/dist/js/xeditable.min.js',
  'bower_components/lodash/lodash.js',
  'bower_components/angular-ui-notification/dist/angular-ui-notification.js',
  'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
  'bower_components/angular-confirm-modal/angular-confirm.min.js',
  'bower_components/angular-jwt/dist/angular-jwt.js',
  'bower_components/ngstorage/ngStorage.js',
  'bower_components/sails.io.js/dist/sails.io.js',
  'bower_components/angular-sails/dist/angular-sails.js',
  'bower_components/moment/moment.js',
  'bower_components/angular-moment/angular-moment.js',
  'bower_components/ng-file-upload/ng-file-upload.js',
  'bower_components/angular-PubSub/src/angular-pubsub.js',
  'bower_components/re-tree/re-tree.js',
  'bower_components/ng-device-detector/ng-device-detector.js',
  'bower_components/compare-versions/index.js',
  //END:bower

  'js/main.js',

  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'js/**/*.js'
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use pug, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];



// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
