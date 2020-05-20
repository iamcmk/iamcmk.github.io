var riddleResponse = document.getElementById('riddleResponse');
var responseBtn1 = document.getElementById('riddleBtn1');
var responseBtn2 = document.getElementById('riddleBtn2');
var notification = document.getElementById('notification');
var unlockedScreen = document.getElementById('unlocked');
var wrapper = document.getElementById('wrapper');

console.log(riddleResponse);

console.log(window.location);

responseBtn1.addEventListener("click", function() {
var input = riddleResponse.value;

if (input == "Clock") {
unlocked.style.display = "flex";
wrapper.style.display = "none";
setTimeout(function() {
  window.location = "https://iamcmk.github.io/oaifjghdfhg2.html"
}, 2000);
} else if (input == "A clock") {
unlocked.style.display = "flex";
wrapper.style.display = "none";
setTimeout(function() {
  window.location = "https://iamcmk.github.io/oaifjghdfhg2.html"
}, 2000);
} else if (input == "clock") {
unlocked.style.display = "flex";
wrapper.style.display = "none";
setTimeout(function() {
  window.location = "https://iamcmk.github.io/oaifjghdfhg2.html"
}, 2000);
} else {
notification.innerHTML = "Try again adventurer";
}
});
