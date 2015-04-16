module.exports = function(grunt) {
    var autoprefixer = require('autoprefixer-core');
    grunt.initConfig({
        watch: {
            files: ['src/Pad/LayoutBundle/Resources/public/scss/**/*.scss'],
            tasks: ['sass']
        },
        sass: {
            dist: {
                files: {
                    'src/Pad/LayoutBundle/Resources/public/css/main.css': 'src/Pad/LayoutBundle/Resources/public/scss/main.scss'
                }
            }
        },
        browserSync: {
            bsFiles: {
                src : [
                        'src/**/*.twig',
                        'src/**/*.yml',
                        'src/**/*.css'
                    ]
            },
            options: {
                port: 3002,
                watchTask: true
            }
        },
        wiredep: {
            task: {
                src: [
                    'ezpublish/Resources/views/base.html.twig'
                ],
                ignorePath: '../../../web'
            }
        },
        postcss: {
            options: {
                processors: [
                    autoprefixer({ browser: ['last 2 version'] }).postcss
                ]
            },
            dist: { src: 'src/Pad/LayoutBundle/Resources/public/css/*.css' }
        }
    });
    require('jit-grunt')(grunt);
    grunt.registerTask('default', ['browserSync','watch']);
    grunt.registerTask('serve', ['sass','browserSync','watch','postcss']);
};
