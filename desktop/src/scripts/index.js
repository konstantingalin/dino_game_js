import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

$(function() {



  // $("._1").on("click","a", function (event) {
  //   event.preventDefault();
  //   var id  = $(this).attr('href'),
  //       top = $(id).offset().top;
  //   $('body,html').animate({scrollTop: top}, 1500);
  // });


  // $('.popup').magnificPopup();

  const dino = document.querySelector("#dino");
  const cactus = document.querySelector("#cactus");

  document.addEventListener("keydown", (e) => {
    jump();
  })

  document.addEventListener("click", (e) => {
    jump();
  })
  

  function jump () {
    if( dino.classList != "jump") {
      dino.classList.add("jump");
    }
    setTimeout(function(){
      dino.classList.remove("jump");
    }, 300)
  }

  let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
      alert("Game Over");
    }
  }, 10)

});