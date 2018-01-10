module.exports = {
    options: { 
      separator: ';',
    },
    dist: {
      src: [
	        '_src/js/lib/jquery.min.js', 
	        '_src/js/lib/slick.min.js',
            '_src/js/lib/validate.js', 
            '_src/js/lib/parallax.js',
            '_src/js/lib/aos.min.js',
            '_src/js/lib/fakeloader.min.js',
            '_src/js/lib/blazy.js',
            '_src/js/lib/jquery.waypoints.min.js',
            '_src/js/lib/wow.min.js',
            '_src/js/lib/numeric.min.js',
	        '_src/js/main.js',
            '_src/js/aos-custom.js',
            '_src/js/slider-home.js',
            '_src/js/slider-join-us.js',
            '_src/js/analytics.js',
        	],
      dest: '_src/js/app.js',
    },
}
