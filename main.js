// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", ready); //Lets you know when DOM is loaded

function ready () {
  console.log("DOM is ready"); //Callback function for DOMContentIsLoaded
}

//Hides modal on page load
let modal = document.getElementById("modal");
modal.classList.add("hidden"); //assigns .hidden classname to modal




//Sets up heart button
let heartButton = document.querySelector(".like-glyph"); //assigns first class of .like-glyph to heartButton variable

heartButton.innerHTML = EMPTY_HEART;

//Triggers event when user presses heart button
heartButton.addEventListener('click', function () {
  mimicServerCall
  
  if (heartButton.innerHTML === EMPTY_HEART){
    mimicServerCall().then((message) => {
      heartButton.innerHTML = FULL_HEART;
      heartButton.classList.add("activated-heart")
      }).catch((message) => {
        displayErr();
        setTimeout(() => {modal.classList.add("hidden")}, 3000)//Hides error after 3 seconds
      })
  } else {
    mimicServerCall().then((message) => {
      heartButton.innerHTML = EMPTY_HEART;
      heartButton.classList.remove("activated-heart")
      }).catch((message) => {
        displayErr();
        setTimeout(() => {modal.classList.add("hidden")}, 3000)//Hides error after 3 seconds
      })
  }

});

//Displays Error
function displayErr() {
  modal.classList.remove("hidden")
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
