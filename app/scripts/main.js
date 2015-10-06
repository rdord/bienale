function doSomething(rand) {
  $('a').removeClass('hover');
  if (rand < 70) {
    $('.leftTop').addClass('hover');
  } else if (rand < 110) {
    $('.rightTop').addClass('hover');
  } else {
    $('.rightBottom').addClass('hover');
  }
}

// (function loop() {
//     var rand = Math.round(Math.random() * 900);
//     setTimeout(function() {
//             doSomething(rand);
//             loop();
//     }, rand);
// }());
