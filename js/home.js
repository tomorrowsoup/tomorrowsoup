var eightBall = ['"soup time" - ancient proverb', 'me, my soup, and i', 'blood is just human soup', 'soup me up baby'];

// every time you click on the gif, it changes the text
$('#home-img').click(function(){
    $('#eight-ball').text(eightBall[Math.floor(Math.random()*eightBall.length)]);
})