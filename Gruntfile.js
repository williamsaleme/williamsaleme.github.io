var fs = require('fs');
var extend = require('util')._extend;
var twigDataFile = 'lib/twig/data/data.json';
var twigDevDataFile = 'lib/twig/data/data-dev.json';
var twigData = JSON.parse(fs.readFileSync(twigDataFile, 'utf8'));
var twigDevData = JSON.parse(fs.readFileSync(twigDevDataFile, 'utf8'));
var twigMergedData = extend({}, twigData);
twigMergedData = extend(twigMergedData, twigDevData);

module.exports = function(grunt) {

    grunt.initConfig({

        // Read Package Information
        pkg: grunt.file.readJSON('package.json'),

        // Copy build files to build build directory
        copy: {
            std: {
                files: [
                    {
                        timestamp: true,
                        mode: true,
                        expand: true,
                        cwd: 'lib/',
                        src: ['**/*', '!dist/**', '!js/**', '!scss/**', '!twig/**'],
                        dest: 'lib/dist'
                    }
                ]
            }
        },

        // Configure the Uglify Task
        uglify: {
            options: {
                sourceMap: false,
                    banner: "// wsaleme.github.io\n\n"
            },
            dev: {
                options: { compress: false },
                files: {
                    'lib/dist/js/<%= pkg.name %>.min.js': ['lib/js/*.js']
                }
            },
            prod: {
                options: { compress: false },
                files: {
                    'lib/dist/js/<%= pkg.name %>.min.js': ['lib/js/*.js']
                }
            }
        },

        // Configure a Sass/Compass Task
        sass: {
            options: {
                loadPath: ['lib/scss'],
                sourcemap: 'none',
                unixNewlines: true,
                compass: true
            },
            dev: {
                options: {
                    style: 'nested'
                },
                files: {
                    'lib/dist/css/<%= pkg.name %>.min.css': 'lib/scss/main.scss'
                }
            },
            prod: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'lib/dist/css/<%= pkg.name %>.min.css': 'lib/scss/main.scss'
                }
            }
        },

        // Replace some tokens for CDN's and such...
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'CDN_URL',
                            replacement: twigMergedData.cdnUrl
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: false,
                        src: ['lib/dist/css/**/*','lib/dist/js/**/*'],
                        dest: './'
                    }
                ]
            },
            prod: {
                options: {
                    patterns: [
                        {
                            match: 'CDN_URL',
                            replacement: twigData.cdnUrl
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: false,
                        src: ['lib/dist/css/**/*','lib/dist/js/**/*'],
                        dest: './'
                    }
                ]
            }
        },

        // Configure the Twig Template Engine
        twigRender: {
            dev: {
                files : [
                    {
                        data: twigMergedData,
                        expand: true,
                        cwd: './',
                        src: ['**/*.twig', '!**/_*.twig'],
                        dest: './',
                        ext: '.html'
                    }
                ]
            },
            prod: {
                files : [
                    {
                        data: twigDataFile,
                        expand: true,
                        cwd: './',
                        src: ['**/*.twig', '!**/_*.twig'],
                        dest: './',
                        ext: '.html'
                    }
                ]
            }
        }
    });

    // Import the NPM Libraries
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-twig-render');
    grunt.loadNpmTasks('grunt-replace');

    // Define the Tasks
    grunt.registerTask('prod', ['copy','uglify:prod', 'sass:prod', 'twigRender:prod', 'replace:prod']);
    grunt.registerTask('dev', ['copy','uglify:dev', 'sass:dev', 'twigRender:dev', 'replace:dev']);
    grunt.registerTask('default', ['dev']);
};
