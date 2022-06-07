// 
// //The addEventListener() method of the EventTarget interface sets up a
// // function that will be called whenever the specified event is delivered to the target.
// //addEventListener(type, listener, options); FORMAT
// document.querySelector("button.w").addEventListener("click", handleClick)

// document.querySelector("button.a").addEventListener("click", handleClick)


// document.querySelector("button.s").addEventListener("click", handleClick)


// document.querySelector("button.d").addEventListener("click", handleClick)

// document.querySelector("button.j").addEventListener("click", handleClick)


// document.querySelector("button.k").addEventListener("click", handleClick)


// document.querySelector("button.l").addEventListener("click", handleClick)
// function handleClick() {             // here the code runs inside the fuction handle click and after every click it gives us an alert
//     alert("Clicked");
// }

// // // NOTE --- WE are not using the parenthesis with the fuction name in query selector statement as
// // // when we write it with paranthsis it will called up first without clicking on the DRUMS.


// // Everytinme we dont need to define the name of the fuction we can call it directly through
// // our querySelector as below:===
// document.querySelector("button").addEventListener("click", function () {
//     alert("Clicked")
// });

// THE below code makes every button resposive whenever we click on any button we gwt some message
// var numberOfBottles = document.querySelectorAll(".drum").length;
// for (var i = 0; i<numberOfBottles;i++){
// //HERE i RANGES FROM 0 TO 6 AS WE HAVE 7 BUTTONS , EVERY BUTTON HAS A BACKGROUND SOUND HERE
// document.querySelectorAll(".drum")[0].addEventListener("click", function () {  //[i] means we are selecting all the elements in the drum list , that are to be changed
//     // alert("I got clicked");
//     var audio = new Audio("sounds/tom-1.mp3"); // added the sounds to the buttons
//     audio.play();
//     this.style.color = "white";
// });

//     document.querySelectorAll(".drum")[1].addEventListener("click", function () {
//     var audio = new Audio("sounds/tom-2.mp3"); // added the sounds to the buttons
//     audio.play();
    
// });

//     document.querySelectorAll(".drum")[2].addEventListener("click", function () {
//     var audio = new Audio("sounds/tom-3.mp3"); // added the sounds to the buttons
//     audio.play();
    
// });

//     document.querySelectorAll(".drum")[3].addEventListener("click", function () {
//     var audio = new Audio("sounds/tom-4.mp3"); // added the sounds to the buttons
//     audio.play();
    
// });

//     document.querySelectorAll(".drum")[4].addEventListener("click", function () {
//     var audio = new Audio("sounds/snare.mp3"); // added the sounds to the buttons
//     audio.play();
// });

//     document.querySelectorAll(".drum")[5].addEventListener("click", function () {
//     var audio = new Audio("sounds/crash.mp3"); // added the sounds to the buttons
//     audio.play();
// });

//     document.querySelectorAll(".drum")[6].addEventListener("click", function () {
//     var audio = new Audio("sounds/kick-bass.mp3"); // added the sounds to the buttons
//     audio.play();
//     console.log(this);// whenever we click the button a meessage prints in console log telling about button pressed
// });
// }

// NOw as in the above case we had to write lots of code , so for solving and making it easier we can use Switch statements

// --------------------------DETECTING BUTTON PRESS----------------------------------------- 

var numberOfButtons =  document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++ ) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML= this.innerHTML;
        makeSound(buttonInnerHTML); // if the user has pressed the button website then it will play sound
        // also the makesound(key ) has been passed here such that it will play sound
        buttonAnimation(buttonInnerHTML); //added animation to our buttons
    });
}
// --------------------------DETECTING KEYBOARD PRESS----------------------------------------- 
document.addEventListener("keypress", function(event) {  // whenever we press any key it will alert a message 
    makeSound(event.key); //if the user has pressed the key on keyboard then it will make sound
    // alert("key pressed")
    // console.log(event); // event used for knowing which key was pressed whole information will be shown
    // KeyboardEvent {isTrusted: true, key: 'f', code: 'KeyF', location: 0, ctrlKey: false, …}
    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
          case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
                case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
                    case "d":
                        var tom4 = new Audio("sounds/tom-4.mp3");
                        tom4.play();
                        break;
                        case "j":
                            var snare = new Audio("sounds/snare.mp3");
                            snare.play();
                            break;
                            case "k":
                                var crash = new Audio("sounds/crash.mp3");
                                crash.play();
                                break;
                                case "l":
                                    var kickbass = new Audio("sounds/kick-bass.mp3");
                                    kickbass.play();
                                    break;
    
        default:
            console.log(buttonInnerHTML);
    }
}
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    //  document.querySelector("button").classList.add("pressed");
    activeButton.classList.add("pressed");
    // setTimeout(function, milliseconds, param1, param2, ...) used for giving delay
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

    }

    
