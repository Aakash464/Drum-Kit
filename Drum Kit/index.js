

for(let i = 0; i<document.querySelectorAll(".drum").length;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
       
        var buttontext = this.innerHTML;

        makesound(buttontext);
        buttonAnimation(buttontext);

    })


}
document.addEventListener("keypress",function(event) {
    makesound(event.key);
    buttonAnimation(event.key);
})


function makesound(key){
    
    switch(key){
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break;

   }

}

function buttonAnimation(key){

    var currButton = document.querySelector("."+key);

    currButton.classList.add("pressed");

    setTimeout(function(){
        currButton.classList.remove("pressed");
    },100)
}