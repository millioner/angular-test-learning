// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './../..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'fixture'],

    plugins: [
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-phantomjs-launcher',
        // Preprocessors below (according to the docs they are optional here)
        // loads .html and .json fixtures
        'karma-fixture',
        // converts .json files into .js files
        'karma-json-fixtures-preprocessor',
        // converts HTML files into JS strings
        'karma-ng-html2js-preprocessor'

        // CI stuff...
        // 'karma-junit-reporter',
        // 'karma-coverage',
    ],


    // list of files / patterns to load in the browser

    files: [
      // lib stuff
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/bootstrap/dist/js/bootstrap.min.js',
      'bower_components/angular/angular.min.js',
      'bower_components/angular-route/angular-route.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      // src
      'src/js/app.js',
      'src/js/services/*.js',
      'src/js/directives.js',
      'src/js/filters.js',
      'src/js/controllers/*.js',
      // templates
      'src/views/*.html',
      // actual tests
      'tests/jasmine/*.js',
      'tests/jasmine/*/*.js',
      // JSON fixtures
      {
        pattern: 'data/*.json',
      }
    ],


    // list of files to exclude
    exclude: [
    ],


    preprocessors: {
      // Preprocessor for converting HTML files into JS strings (karma-ng-html2js-preprocessor)
      'src/views/*.html': ['ng-html2js'],
      // Preprocessor for converting .json files into .js files (karma-json-fixtures-preprocessor)
      'data/*.json': ['json_fixtures']

      // see available settings for both preprocessors below
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    // browsers: ['Chrome'],  // use for debugging


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // ****** JSON fixtures preprocessor - available settings ******
    jsonFixturesPreprocessor: {
      // strip this from the file path \ fixture name 
      // stripPrefix: 'test/fixtures',
      // strip this to the file path \ fixture name 
      // prependPrefix: 'mock/',
      // change the global fixtures variable name 
      variableName: '__json__',  // don't work without this line, karma expects json fixture in that variable
      // camelize fixture filenames (e.g 'fixtures/aa-bb_cc.json' becames __fixtures__['fixtures/aaBbCc']) 
      // camelizeFilenames: true,
      // transform the filename 
      // transformPath: function(path) {
      //   return path + '.js';
      // }
    }
    // Usage:
    // var fixture = window.__fixtures__['fixtures/test'];
    // fixture["a"] // => 'test' 
    // **************************************************************

    
    // ***** karma-ng-html2js-preprocessor - available settings *****
    //ngHtml2JsPreprocessor: {
      // strip this from the file path
      // stripPrefix: 'public/',
      // stripSuffix: '.ext',
      // prepend this to the
      // prependPrefix: 'served/',

      // or define a custom transform function
      // - cacheId returned is used to load template
      //   module(cacheId) will return template at filepath
      //cacheIdFromPath: function(filepath) {
        // example strips 'public/' from anywhere in the path
        // module(app/templates/template.html) => app/public/templates/template.html
        // var cacheId = filepath.strip('public/', '');
        // return cacheId;
      //},

      // - setting this option will create only a single module that contains templates
      //   from all the files, so you can load them all with module('foo')
      // - you may provide a function(htmlPath, originalPath) instead of a string
      //   if you'd like to generate modules dynamically
      //   htmlPath is a originalPath stripped and/or prepended
      //   with all provided suffixes and prefixes
      // moduleName: 'foo'
    //}
    // ****************************************************************

  });
};
