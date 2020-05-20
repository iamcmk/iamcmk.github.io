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

  console.log(count);

  if (count == 4) {
    unlocked.style.display = "flex";
    wrapper.style.display = "none";
    setTimeout(function() {
      window.location = "https://iamcmk.github.io/khjhnudsghn4.html"
    }, 2000);
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
      
    }, 10000);

    },
    mouseup: function () {
      clearTimeout(timer);
    }
});
