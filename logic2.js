//
// var responseBtn2 = document.getElementById('riddleBtn2');
var unlockedScreen = document.getElementById('unlocked');
  var count = 0;
//
// console.log(responseBtn2);

function loadNewLocatioon(newLocation) {
  var host = window.location;
  window.location = host + newLocation;
};


$( "#riddleBtn2" ).click(function() {
  unlocked.style.display = "flex";
  setTimeout(loadNewLocatioon("/clue2.html"), 1500);
});








$( "#lastletter" ).on('click', function(){


   count++

  console.log(count);

  if (count == 4) {
    unlocked.style.display = "flex";
    setTimeout(loadNewLocatioon("/clue3.html"), 1500);
  }
});



var timer;

$("#me").on({
    mousedown: function () {
      timer = setTimeout(function(){ unlocked.style.display = "flex"; }, 10000);
    },
    mouseup: function () {
      clearTimeout(timer);
    }
});
