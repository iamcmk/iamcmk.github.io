var start;
var timer;
var game        = $('#game');
var gameState   = 1;
var btnState    = false;

function appendMenu() {
	game.html('');
	game.append(
		'<div class="center-content">' +
      '<p class="smaller"> Puzzle 3 (The real one)</p>' +
			'<h1>Your reaction spped will now be tested</h1>' +
      '<p>Get equal to or below 0.30 to pass to the next round.</p>' +
			'<p>Click/Tap on the screen as soon as it turns green</p>' +
			'<p>Click to start</p>' +
		'</div>'
	);
}

function appendGame() {
	game.html('');
}

function appendResult(result) {
	game.html('');

	var unit = 'seconds';
	if (result == 1.00) { unit = 'second'; }

  var passfail;

  if (result <= 0.50) {
    passfail = "PASS!"

    setTimeout(function() {
      window.location = "https://iamcmk.github.io/khjhnudsghn4.html"
    }, 2000);
  } else {
    passfail = "FAIL";
  }

	game.append(
		'<div class="center-content">' +
			'<h1>' + result + ' ' + unit + '</h1>' +
      '<h1>' + passfail +'</h1>' +
			'<p>Click to start again</p>' +
		'</div>'
	);



}

function appendGameOver() {
	game.html('');
	game.append(
		'<div class="center-content">' +
			'<h1>Game over</h1>' +
			'<p>Click to start again</p>' +
		'</div>'
	);
}

function activateButton() {
	btnState = true;
	$('#game').addClass('activated');
	start = new Date().getTime();
}

function startGame() {
	btnState = false;
	gameState = 2;
	$('#game').removeClass('activated');
	appendGame();
	var timeUntilActivate = Math.floor((Math.random() * 7000) + 3000);
	timer = window.setTimeout(function() { activateButton(); }, timeUntilActivate);
}


function checkState() {
	clearTimeout(timer);

	if (btnState != true) {
		gameState = 4;
		console.log('Game Over');
		appendGameOver();
	} else {
		gameState = 3;
		btnState = false;
		var end = new Date().getTime() - start;
		var result = (end / 1000).toFixed(2);

		appendResult(result);

    console.log(result);

    if (result <= 0.30) {
      console.log("this is a pass");
    } else {
      console.log("this is a fail");
    }
	}
}

$('#game').on('click', function() {
	if (gameState == 1) {
		startGame();
	} else if (gameState == 2) {
		checkState();
	} else if (gameState == 3) {
		startGame();
	} else if (gameState == 4) {
		startGame();
	}
});

appendMenu();
