//detect a button press

var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

//detect keyboard press

document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});
//creating variable of sound name,
// then adding audio and telling it to play
//used switch statements instead of using long if else
function makeSound(key) {
  switch (key) {
    case "w":
      var bob = new Audio("sounds/DAMMIT - AUDIO FROM JAYUZUMI.COM.mp3");
      bob.play();
      break;
    case "a":
      var linda = new Audio(
        "sounds/be-nice-to-her-bobs-burgers-be-nice-to-her-dont-be-mean-to-her-linda-belcher-bob-belcher-be-nice-101soundboards.mp3"
      );
      linda.play();
      break;
    case "s":
      var tina = new Audio(
        "sounds/tina-its-not-my-imagination-101soundboards.mp3"
      );
      tina.play();
      break;
    case "d":
      var louise = new Audio(
        "sounds/has-the-world-gone-crazy-louise-has-the-world-gone-crazy-upside-down-what-no-crazy-losing-it-bobs-burgers-101soundboards.mp3"
      );
      louise.play();
      break;
    case "j":
      var gene = new Audio(
        "sounds/this-is-me-now-phases-not-a-phase-gene-costumes-101soundboards.mp3"
      );
      gene.play();
      break;
    case "k":
      var gayle = new Audio(
        "sounds/no-no-no-no-no-no-no-gayle-you-got-to-let-me-do-this-101soundboards.mp3"
      );
      gayle.play();
      break;
    case "l":
      var fish = new Audio("sounds/just-hit-send-okay-101soundboards.mp3");
      fish.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
