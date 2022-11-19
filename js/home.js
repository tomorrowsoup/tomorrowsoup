var eightBall = ['"soup time" - ancient proverb', 'my soup, and i', 'blood is just human soup', 'soup me up baby', 'wishing soup to you and yours from me and mine <3', 'two soups happy together', '* there once was a soup', 'whats in your soup?', 'soupy moopy loopy poopy', 'gorgeous gorgeous girls love soup', 'sundays are for soups' ];

// every time you click on the gif, it changes the text
$('#big-moon').click(function(){
    $('#eight-ball').text(eightBall[Math.floor(Math.random()*eightBall.length)]);
})

// make draggable
$(function () {
    $(".altar-img").draggable();
  });