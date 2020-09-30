
// const add =require('../src/index')
// QUnit.test('add two numbers', assert => {
//   assert.equal(add(1, 1), 2, '1 + 1 = 2');


// });
// QUnit.test('add two numbers', assert => {
//   assert.equal($.isNumberic(1), true, '$.isNumberic(1)');
// });
QUnit.test('trim',assert=>{
  assert.equal($.trim("  hello, how are you?  "),"hello, how are you?","\s")
  assert.equal($.trim(" f   "),"f"," f  ")
});
QUnit.test( "jQuery()", function( assert ) {

	var elem, i,
		obj = jQuery( "div" ),
		code = jQuery( "<code></code>" ),
		img = jQuery( "<img/>" ),
		div = jQuery( "<div></div><hr/><code></code><b/>" ),
		exec = false,
		expected = 23,
		attrObj = {
			"text": "test",
			"class": "test2",
			"id": "test3"
		};

	// The $(html, props) signature can stealth-call any $.fn method, check for a
	// few here but beware of modular builds where these methods may be excluded.
	if ( jQuery.fn.click ) {
		expected++;
		attrObj[ "click" ] = function() { assert.ok( exec, "Click executed." ); };
	}
	if ( jQuery.fn.width ) {
		expected++;
		attrObj[ "width" ] = 10;
	}
	if ( jQuery.fn.offset ) {
		expected++;
		attrObj[ "offset" ] = { "top": 1, "left": 1 };
	}
	if ( jQuery.fn.css ) {
		expected += 2;
		attrObj[ "css" ] = { "paddingLeft": 1, "paddingRight": 1 };
	}
	if ( jQuery.fn.attr ) {
		expected++;
		attrObj.attr = { "desired": "very" };
	}

	assert.expect( expected );

	// Basic constructor's behavior
	assert.equal( jQuery().length, 0, "jQuery() === jQuery([])" );
	assert.equal( jQuery( undefined ).length, 0, "jQuery(undefined) === jQuery([])" );
	assert.equal( jQuery( null ).length, 0, "jQuery(null) === jQuery([])" );
	assert.equal( jQuery( "" ).length, 0, "jQuery('') === jQuery([])" );
	assert.deepEqual( jQuery( obj ).get(), obj.get(), "jQuery(jQueryObj) == jQueryObj" );

	// Invalid #id will throw an error (gh-1682)
	try {
		jQuery( "#" );
	} catch ( e ) {
		assert.ok( true, "Threw an error on #id with no id" );
	}

	// can actually yield more than one, when iframes are included, the window is an array as well
	assert.equal( jQuery( window ).length, 1, "Correct number of elements generated for jQuery(window)" );

/*
	// disabled since this test was doing nothing. i tried to fix it but i'm not sure
	// what the expected behavior should even be. FF returns "\n" for the text node
	// make sure this is handled
	var crlfContainer = jQuery('<p>\r\n</p>');
	var x = crlfContainer.contents().get(0).nodeValue;
	assert.equal( x, what???, "Check for \\r and \\n in jQuery()" );
*/

	/* // Disabled until we add this functionality in
	var pass = true;
	try {
		jQuery("<div>Testing</div>").appendTo(document.getElementById("iframe").contentDocument.body);
	} catch(e){
		pass = false;
	}
	assert.ok( pass, "jQuery('&lt;tag&gt;') needs optional document parameter to ease cross-frame DOM wrangling, see #968" );*/

	assert.equal( code.length, 1, "Correct number of elements generated for code" );
	assert.equal( code.parent().length, 0, "Make sure that the generated HTML has no parent." );

	assert.equal( img.length, 1, "Correct number of elements generated for img" );
	assert.equal( img.parent().length, 0, "Make sure that the generated HTML has no parent." );

	assert.equal( div.length, 4, "Correct number of elements generated for div hr code b" );
	assert.equal( div.parent().length, 0, "Make sure that the generated HTML has no parent." );

	assert.equal( jQuery( [ 1, 2, 3 ] ).get( 1 ), 2, "Test passing an array to the factory" );

	assert.equal( jQuery( document.body ).get( 0 ), jQuery( "body" ).get( 0 ), "Test passing an html node to the factory" );

	elem = jQuery( "  <em>hello</em>" )[ 0 ];
	assert.equal( elem.nodeName.toLowerCase(), "em", "leading space" );

	elem = jQuery( "\n\n<em>world</em>" )[ 0 ];
	assert.equal( elem.nodeName.toLowerCase(), "em", "leading newlines" );

	elem = jQuery( "<div></div>", attrObj );

	if ( jQuery.fn.width ) {
		assert.equal( elem[ 0 ].style.width, "10px", "jQuery() quick setter width" );
	}

	if ( jQuery.fn.offset ) {
		assert.equal( elem[ 0 ].style.top, "1px", "jQuery() quick setter offset" );
	}

	if ( jQuery.fn.css ) {
		assert.equal( elem[ 0 ].style.paddingLeft, "1px", "jQuery quick setter css" );
		assert.equal( elem[ 0 ].style.paddingRight, "1px", "jQuery quick setter css" );
	}

	if ( jQuery.fn.attr ) {
		assert.equal( elem[ 0 ].getAttribute( "desired" ), "very", "jQuery quick setter attr" );
	}

	assert.equal( elem[ 0 ].childNodes.length, 1, "jQuery quick setter text" );
	assert.equal( elem[ 0 ].firstChild.nodeValue, "test", "jQuery quick setter text" );
	assert.equal( elem[ 0 ].className, "test2", "jQuery() quick setter class" );
	assert.equal( elem[ 0 ].id, "test3", "jQuery() quick setter id" );

	exec = true;
	elem.trigger( "click" );

	// manually clean up detached elements
	elem.remove();

	for ( i = 0; i < 3; ++i ) {
		elem = jQuery( "<input type='text' value='TEST' />" );
	}
	assert.equal( elem[ 0 ].defaultValue, "TEST", "Ensure cached nodes are cloned properly (Bug #6655)" );

	elem = jQuery( "<input type='hidden'>", {} );
	assert.strictEqual( elem[ 0 ].ownerDocument, document,
		"Empty attributes object is not interpreted as a document (trac-8950)" );
} );
