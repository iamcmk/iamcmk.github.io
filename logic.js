var riddleResponse = document.getElementById('riddleResponse');
var responseBtn1 = document.getElementById('riddleBtn1');
var responseBtn2 = document.getElementById('riddleBtn2');
var notification = document.getElementById('notification');
var unlockedScreen = document.getElementById('unlocked');
var wrapper = document.getElementById('wrapper1');
var introSplash = document.getElementById('introSplash');

console.log(riddleResponse);

console.log(window.location);

$( document ).ready(function() {
    wrapper.style.display = "none";
});



responseBtn1.addEventListener("click", function() {
var input = riddleResponse.value;

if (input == "Seven") {
unlocked.style.display = "flex";
wrapper.style.display = "none";
setTimeout(function() {
  window.location = "https://iamcmk.github.io/oaifjghdfhg2.html"
}, 2000);
} else if (input == "seven") {
unlocked.style.display = "flex";
wrapper.style.display = "none";
setTimeout(function() {
  window.location = "https://iamcmk.github.io/oaifjghdfhg2.html"
}, 2000);
} else if (input == "7") {
unlocked.style.display = "flex";
wrapper.style.display = "none";
setTimeout(function() {
  window.location = "https://iamcmk.github.io/oaifjghdfhg2.html"
}, 2000);
} else {
notification.innerHTML = "Try again adventurer";
}
});


$( "#introSplash" ).click(function() {
  wrapper.style.display = "flex";
introSplash.style.display = "none";
});
