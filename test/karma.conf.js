// Karma configuration
// Generated on 2016-11-10

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/fastclick/lib/fastclick.js',
      'bower_components/nprogress/nprogress.js',
      'bower_components/Chart.js/dist/Chart.js',
      'bower_components/gauge.js/dist/gauge.js',
      'bower_components/gauge.js/dist/gauge.min.js',
      'bower_components/bootstrap-progressbar/bootstrap-progressbar.js',
      'bower_components/iCheck/icheck.min.js',
      'bower_components/Flot/jquery.flot.js',
      'bower_components/moment/moment.js',
      'bower_components/bootstrap-daterangepicker/daterangepicker.js',
      'bower_components/skycons/skycons.js',
      'bower_components/jquery-sparkline/dist/jquery.sparkline.js',
      'bower_components/eve-raphael/eve.js',
      'bower_components/raphael/raphael.min.js',
      'bower_components/mocha/mocha.js',
      'bower_components/morris.js/morris.js',
      'bower_components/jquery.hotkeys/jquery.hotkeys.js',
      'bower_components/google-code-prettify/bin/prettify.min.js',
      'bower_components/bootstrap-wysiwyg/js/bootstrap-wysiwyg.min.js',
      'bower_components/jquery.tagsinput/src/jquery.tagsinput.js',
      'bower_components/transitionize/dist/transitionize.js',
      'bower_components/switchery/dist/switchery.js',
      'bower_components/select2/dist/js/select2.js',
      'bower_components/autosize/dist/autosize.js',
      'bower_components/parsleyjs/dist/parsley.js',
      'bower_components/devbridge-autocomplete/dist/jquery.autocomplete.js',
      'bower_components/ion.rangeSlider/js/ion.rangeSlider.js',
      'bower_components/mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js',
      'bower_components/jquery.inputmask/dist/inputmask/inputmask.js',
      'bower_components/jquery-knob/js/jquery.knob.js',
      'bower_components/cropper/dist/cropper.js',
      'bower_components/validator/validator.js',
      'bower_components/dropzone/dist/min/dropzone.min.js',
      'bower_components/pnotify/dist/pnotify.animate.js',
      'bower_components/pnotify/dist/pnotify.buttons.js',
      'bower_components/pnotify/dist/pnotify.callbacks.js',
      'bower_components/pnotify/dist/pnotify.confirm.js',
      'bower_components/pnotify/dist/pnotify.js',
      'bower_components/pnotify/dist/pnotify.desktop.js',
      'bower_components/pnotify/dist/pnotify.history.js',
      'bower_components/pnotify/dist/pnotify.mobile.js',
      'bower_components/pnotify/dist/pnotify.nonblock.js',
      'bower_components/fullcalendar/dist/fullcalendar.js',
      'bower_components/requirejs/require.js',
      'bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.js',
      'bower_components/starrr/dist/starrr.js',
      'bower_components/datatables.net/js/jquery.dataTables.js',
      'bower_components/datatables.net-bs/js/dataTables.bootstrap.js',
      'bower_components/datatables.net-buttons/js/dataTables.buttons.js',
      'bower_components/datatables.net-buttons/js/buttons.colVis.js',
      'bower_components/datatables.net-buttons/js/buttons.flash.js',
      'bower_components/datatables.net-buttons/js/buttons.html5.js',
      'bower_components/datatables.net-buttons/js/buttons.print.js',
      'bower_components/datatables.net-buttons-bs/js/buttons.bootstrap.js',
      'bower_components/datatables.net-fixedheader/js/dataTables.fixedHeader.js',
      'bower_components/datatables.net-keytable/js/dataTables.keyTable.js',
      'bower_components/datatables.net-responsive/js/dataTables.responsive.js',
      'bower_components/datatables.net-responsive-bs/js/responsive.bootstrap.js',
      'bower_components/datatables.net-scroller/js/dataTables.scroller.js',
      'bower_components/pdfmake/build/pdfmake.js',
      'bower_components/pdfmake/build/vfs_fonts.js',
      'bower_components/jszip/dist/jszip.js',
      'bower_components/jquery-mousewheel/jquery.mousewheel.js',
      'bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js',
      'bower_components/jqvmap/dist/jquery.vmap.min.js',
      'bower_components/DateJS/build/production/date.min.js',
      'bower_components/flot/jquery.flot.js',
      'bower_components/flot.curvedlines/curvedLines.js',
      'bower_components/flot-spline/js/jquery.flot.spline.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
