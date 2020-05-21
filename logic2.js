//
// var responseBtn2 = document.getElementById('riddleBtn2');
var unlockedScreen = document.getElementById('unlocked');
  var count = 0;
//
// console.log(responseBtn2);



$( "#riddleBtn2" ).click(function() {
  unlocked.style.display = "flex";
  wrapper.style.display = "none";
  setTimeout(function() {
    window.location = "https://iamcmk.github.io/oieqrhgjisdfb3.html"
  }, 2000);
});

$( "#lastletter" ).on('click', function(){
   count++
  if (count == 4) {

      window.location = "https://iamcmk.github.io/oieqrhgjisdfb31.html"

  }
});



var timer;

$("#me").on({
    mousedown: function () {
      timer = setTimeout(function(){
        unlocked.style.display = "flex";
        wrapper.style.display = "none";
        setTimeout(function(){
            window.location = "https://iamcmk.github.io/kdfjhgfdug5.html"
        }, 2000)

    }, 7000);

    },
    mouseup: function () {
      clearTimeout(timer);
    }
});


var moveNumberCount = 0;
var lockInNotification = $('#lockIn')[0];
var sequance = $('#sequance')[0];
var left = $('#left')[0];
var right = $('#right')[0];


var numberRender = $('#movingNumber')[0];
numberRender.innerHTML = moveNumberCount;

var clicked;

$("#movingNumber").on('click', function(){
console.log(moveNumberCount);

  if (clicked == true) {
    numberRender.style.textDecoration = "none"
    clicked = false;
  }  else if (clicked != true) {
    numberRender.style.textDecoration = "underline"
    clicked = true;
  };

if (moveNumberCount == 31) {
sequance.style.color = "green";
lockInNotification.innerHTML = "Good job adventurer, you have unlocked part 2 of this problem."
sequance.style.textDecoration = "line-through"
sequance.style.opacity = "0.6";
numberRender.style.textDecoration = "none"
left.style.display = "none";
right.style.display = "none";
$( "[name*='strike']" ).removeClass( "strike" )
} else if (moveNumberCount != 31) {
sequance.style.color = "red";
}

});




$("#left").on('click', function(){
  moveNumberCount--
  numberRender.innerHTML = moveNumberCount;
  lockInNotification.style.display = "block";
  sequance.style.color = "black";
  numberRender.style.textDecoration = "none"
  clicked = false;

});

$("#right").on('click', function(){
  moveNumberCount++
  numberRender.innerHTML = moveNumberCount;
  lockInNotification.style.display = "block";
  sequance.style.color = "black";
  numberRender.style.textDecoration = "none"
  clicked = false;

});






