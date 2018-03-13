/* globals $ */

var css = {
    "background-color": "hotpink",
    "position": "fixed",
    "top": 0
};

var animations = {
    "font-size": "500%",
    "top": "20vh"
};

var $h2 = $( "<h2>" )
    .text( "This also came from jquery" )
    .css( "position", "fixed" );

var animationsH2 = function animateH2(){
    $h2.animate( {
        "left": "100vw"
    } );
};

var animationOptions = {
    "duration": 5000,
    "complete": animationsH2
};

var $h1 = $( "<h1>" )
    .text( "Hello World" )
    .css( css )
    .animate( animations, animationOptions );

$( "#output" ).append( $h1, $h2 );
