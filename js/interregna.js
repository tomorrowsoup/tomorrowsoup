
// for each slide, rotate thru adding onclick method for 
document.onclick = function(){
    // Returns a random integer from 1 to 5:
  var clicks = 1;
  while (clicks < Math.floor(Math.random() * 5) + 1) {
    fadeUnfade();
    clicks++;
  }
};

// instead do this:
// increment a number every time someone clicks, make a while loop
var round = 1;

function fadeUnfade() {
    // unmute the sound since it starts muted on chromium browsers
    document.getElementById('soundtrack').muted = false;
    var el = document.getElementById(round);
    var nextId = round + 1;
    if (round == 8) {
      nextId = 1;
      round = 0;
    }
    var nextEl = document.getElementById(nextId.toString());
    fade(el);
    unfade(nextEl);
    round++;
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
function unfade(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
        element.style.display = 'block';
    }, 50);
}