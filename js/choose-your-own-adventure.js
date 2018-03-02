var story = {
    "start": "You walk up from your subway stop only to realize you have gotten off at the wrong stop! Do you get back on the subway? Call an Uber? or start walking?",
    "subway": "You go back down to the subway and only to find out the train has broken down and you miss your job interview. Game Over",
    "uber": "You request a pickup and stand on the street waitng for your ride, when a car rushes by splashing a huge puddle all over you. Interview outfit runnied. Do you call and try to reschedule? or cancel the uber and start walking, hoping you dry out when you get there?",
    "reschedule": "You call to reschedule but they aren't willing and you don't get the job. Game Over!",
    "walk": "You start walking to your interview and just barely make it on time, you are a bit flustered btu you pull it together, nail it and get the job! You are now a true savvy coder!"
};
var choice;
var read = function read(){
    choice = prompt( story.start );
    if( choice === "subway" ){
        document.querySelector( "#end" ).textContent = story.subway;
    }
    else if( choice === "uber" ){
        choice = prompt( story.uber );
        if( choice === "reschedule" ){
            document.querySelector( "#end" ).textContent = story.reschedule;
        }
        else if( choice === "walk" ){
            document.querySelector( "#end" ).textContent = story.walk;
        }
        else{
            confirm( "please enter a vaild choice" );
            read();
        }
    }
    else if( choice === "walk" ){
        document.querySelector( "#end" ).textContent = story.walk;
    }
    else{
        confirm( "please enter a vaild choice" );
        read();
    }
};

read();
