module.exports = function(grunt) {
    grunt.initConfig({
        wiredep: {
            task: {
                src: [
                    'ezpublish/Resources/views/base.html.twig'
                ],
                ignorePath: '../../../web'
            }
        },
        browserSync: {
            bsFiles: {
                src : ['./src/**/*.twig','/src/**/*.yml']
            },
            options: {
                port: 3002
            }
        },
        watch: {
            all: {
                files: ['./src/**/*.twig','/src/**/*.yml'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'web/bundles/padmaya/css/main.css': 'web/bundles/padmaya/scss/main.scss'
                }
            }
        }
    });
    require('jit-grunt')(grunt);
    grunt.registerTask('default', ['browserSync','watch']);
    grunt.registerTask('serve', ['sass','browserSync','watch']);
};
