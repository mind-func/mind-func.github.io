/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		dot = document.getElementById( 'mindfunc-dot' ),
		didScroll = false,
		changeHeaderOn = 242;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
			classie.add( dot, 'mindfunc-dot' );
		}
		else {
			classie.remove( header, 'navbar-shrink' );
			classie.remove( dot, 'mindfunc-dot' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();