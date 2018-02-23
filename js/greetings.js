var greetUser = function(){
    var firstName = prompt( "What is your first name?" );

    if( !firstName ){
        greetUser();
    }
    else{
        alert( "Hello " + firstName );
    }
};

greetUser();
