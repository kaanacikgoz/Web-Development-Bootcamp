function makeSound(char) {
          switch (char) {
            case "w":
                new Audio("sounds/crash.mp3").play();
                break;
            case "a":
                new Audio("sounds/kick-bass.mp3").play();
                break;
            case "s":
                new Audio("sounds/snare.mp3").play();
                break;
            case "d":
                new Audio("sounds/tom-1.mp3").play();
                break;
            case "j":
                new Audio("sounds/tom-2.mp3").play();
                break;
            case "k":
                var audio = new Audio("sounds/tom-3.mp3").play();
                break;
            case "l":
                var audio = new Audio("sounds/tom-4.mp3").play();
                break;
            }
}

var buttonArray = document.getElementsByTagName("button");

for (var i=0;i<buttonArray.length;i++) {
    buttonArray[i].addEventListener("click", function() {
        var buttonText = this.innerHTML;
        makeSound(buttonText);
        buttonAnimation(buttonText);
    });
}

document.addEventListener("keydown", function(event) {
    var pressedKey = event.key;
    makeSound(pressedKey);
    buttonAnimation(pressedKey);
});

function buttonAnimation(eventKey) {
    var activeButton = document.querySelector("."+eventKey);
    activeButton.classList.add("pressed");
    setTimeout(function (){activeButton.classList.remove("pressed");}, 100);
}