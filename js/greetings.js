var someSelector = prompt( "Enter a Selector" );

var greetUser = function greetUser(){
    var firstName = prompt( "What is your first name?" );

    if( !firstName ){
        greetUser();
    }
    else{
        document.querySelector( "h1" ).textContent += "  Hello " + firstName ;
    }
};

greetUser();
