var riddleResponse = document.getElementById('riddleResponse');
var responseBtn1 = document.getElementById('riddleBtn1');
var responseBtn2 = document.getElementById('riddleBtn2');
var notification = document.getElementById('notification');
var unlockedScreen = document.getElementById('unlocked');

console.log(riddleResponse);

console.log(window.location);

responseBtn1.addEventListener("click", function() {
var input = riddleResponse.value;

if (input == "Clock") {
unlocked.style.display = "flex";
setTimeout(loadNewLocatioon("/clue2.html"), 1500);
} else if (input == "A clock") {
unlocked.style.display = "flex";
setTimeout(loadNewLocatioon("/clue2.html"), 1500);
} else if (input == "clock") {
unlocked.style.display = "flex";
setTimeout(loadNewLocatioon("/clue2.html"), 1500);
} else {
notification.innerHTML = "Try again adventurer";
}
});


responseBtn2.addEventListener("click", function() {
  unlocked.style.display = "flex";
  setTimeout(loadNewLocatioon("/clue2.html"), 1500);
});




function loadNewLocatioon(newLocation) {
  var host = window.location;
  window.location = host + newLocation;
};
