var eightBall = ['"soup time" - ancient proverb', 'my soup, and i', 'blood is just human soup', 'soup me up baby', 'wishing soup to you and yours from me and mine <3', 'two soups happy together', '* there once was a soup', 'whats in your soup?', 'soupy moopy loopy poopy', 'gorgeous gorgeous girls love soup', 'sundays are for soups' ];

// every time you click on the gif, it changes the text
$('#big-moon').click(function(){
    $('#eight-ball').text(eightBall[Math.floor(Math.random()*eightBall.length)]);
})

// the info about each item
var objDesc = {
    "mantle": "we love a good altar, where we can appreciate all the little things in life we love (like you!)",
    "rug": "a good rug can take you places",
    "chair": "in this chair we have sat, laughed, cried, cuddled, fed one another, and developed an increased love for all things soft and round",
    "candle": "ambient lighting > overhead lighting. every. single. day.",
    "room-spray": "smell that? if you're in raya's room, it's probably this room spray! a constant companion",
    "pothos": "raya likes to propagate her plants and share them with friends all over the world!",
    "ghost": "we believe that ghosts and haunting are everywhere, but we don't need to be afraid! we can love our ghosts <3",
    "cookies": "every time we have friends over, we like to bake a plate of warm choc chip cookies. yum!",
    "spoon": "you need a good spoon for soup, of course! this one is one of our favs",
    "carton": "this one egg is not like the others (bad egg)",
    "banana-flask": "treasured banana flask: confiscated in mexico city, reacquired through a gift from samm <3",
    "headphones": "if you see kyle in the streets of new york, he's probably wearing these headphones, but what is he listening to..?",
    "moon": "every full moon we throw a moon party, but she deserves celebration every single day",
    "portal": "puddles and portals, moon in memory."
}

// make draggable
$(function () {
    $(".altar-img").draggable();
  });


  //hover
$(".altar-img").hover(
    function (e) {
      e.stopPropagation();
      console.log($(this).attr("id").substring(4));
      $("#home-text-2").text(objDesc[$(this).attr("id").substring(4)]);
    },
    function () {
        $("#home-text-2").text("we hope you'll take a look around, by hovering, dragging, and clicking on the objects above");
    }
  );

