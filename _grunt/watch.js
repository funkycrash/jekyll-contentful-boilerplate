module.exports = {
	sass: {
        files: '_src/sass/**/*.scss',
        tasks: ['sass']
    },
    concat: {
        files: ['_src/js/lib/**/*.js', '_src/js/main.js'],
        tasks: ['concat']
    },
    uglify: {
    	files: '_src/js/app.js',
    	tasks: ['uglify']
    },
    jekyll: {
        files: ['_layouts/*.html', '_includes/*.md', '_includes/*.html', 'css/main.css', '*.html', '*.md', 'assets/js/app.min.js'],
        tasks: ['shell:jekyllBuild']
    }
}

