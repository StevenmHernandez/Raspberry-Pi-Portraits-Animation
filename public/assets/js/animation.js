var $canvas = $('canvas');
var ctx = $canvas[0].getContext("2d");
var $body = $('body');

var imageCount = 9;
var lineHeight = 1; //pixels

function setup() {
  $canvas.attr('height', $body.height());
  $canvas.attr('width', $body.width());
  //$canvas.height($body.height());
  //$canvas.width($body.width());

  for(i=0; i<imageCount; i++) {
    $('.ie').append('<img src="http://placehold.it/999x999/090909/181818/"/>');
    renderRandomImage(i);
  }
  loop();
}

function loop() {
  setInterval(function () {
    var randomImage = Math.floor(Math.random() * imageCount);
    renderRandomImage(randomImage);
  }, 2000);
  setInterval(function () {
    selectLine();
    selectLine();
    selectLine();
  }, 10);
}

function selectLine() {

  var randomImage = Math.floor(Math.random() * imageCount);
  switch (true) {
    case (i < $canvas.height()):
      i = i + lineHeight;
      break;
    default:
      i = 0;
  }
  renderLine($('img')[randomImage], i);
}

function renderLine(img, i) {
  $img = $(img);
  ctx.drawImage(img, 0, i, $img.width(), lineHeight, 0, i, $canvas.width(), lineHeight);
}

function renderRandomImage(index) {
  return $.ajax({
    url: '/animation/images/random',
    success: function(data) {
      $($('img')[index]).attr('src',data.uri);
    }
  });
}

setup();
