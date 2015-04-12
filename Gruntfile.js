module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            files: ['src/**/*.scss'],
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'src/**/css/main.css': 'src/**/scss/main.scss'
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
        }
    });
    require('jit-grunt')(grunt);
    grunt.registerTask('default', ['browserSync','watch']);
    grunt.registerTask('serve', ['sass','browserSync','watch']);
};