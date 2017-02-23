$(function(){
    var i = $('img');
    console.log(i.height());
});

$(document).ready(function() {
         //queue()で処理を溜めてdequeue()で実行。3秒経ったらfadeOut()
        $('span').fadeIn().queue(function() {
            setTimeout(function(){$('span').dequeue();
          }, 2000);
        });
        $("span").fadeOut();
});

$(".iposi").click(function(){
  var i = $('img');
  if (i.attr('id') == "1") {
    console.log(i.attr('id'));
    $('img').attr({
      id: '2',
      src: './images/tyakonwaku.png',
      onclick: "this.src='./images/tyatere.png'",
      onmouseover: "this.src='./images/tyajito.png'",
      onmouseout: "this.src='./images/tyakonwaku.png'"
    });
  }
  else if (i.attr('id') == "2") {
    console.log(i.attr('id'));
    $('img').attr({
      id: '3',
      src: './images/grekonwaku.png',
      onclick: "this.src='./images/grekuisibari.png'",
      onmouseover: "this.src='./images/grekonwaku2.png'",
      onmouseout: "this.src='./images/grekonwaku.png'"

    });
  }

  else if (i.attr('id') == "3") {
    console.log(i.attr('id'));
    $('img').attr({
      id: '1',
      src: './images/konwaku.png',
      onclick: "this.src='./images/tere.png'",
      onmouseover: "this.src='./images/kutiake.png'",
      onmouseout: "this.src='./images/konwaku.png'"

    });
  }
});
