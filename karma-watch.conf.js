'use strict';

var webpackConfig = require('./webpack/webpack.test.js');
require('phantomjs-polyfill')
webpackConfig.entry = {};

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'jasmine-matchers', 'jasmine-jquery-matchers'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        autoWatchBatchDelay: 300,
        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            './spec/test.ts'
        ],
        babelPreprocessor: {
            options: {
                presets: ['es2015']
            }
        },
        preprocessors: {
            'spec/test.ts': ['webpack'],
            'spec/**/!(*.spec)+(.js)': ['coverage']
        },
        webpackMiddleware: {
            stats: {
                chunkModules: false,
                colors: true
            }
        },
        webpack: webpackConfig,
        reporters: [
            'dots',
            'spec',
            'coverage'
        ],
        coverageReporter: {
            reporters: [
                {
                    dir: 'reports/coverage/',
                    subdir: '.',
                    type: 'html'
                },{
                    dir: 'reports/coverage/',
                    subdir: '.',
                    type: 'cobertura'
                }, {
                    dir: 'reports/coverage/',
                    subdir: '.',
                    type: 'json'
                }
            ]
        }
    });
};