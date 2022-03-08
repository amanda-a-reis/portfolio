let botaoNav1 = document.getElementById("nav1");
let botaoNav2 = document.getElementById("nav2");
let botaoNav3 = document.getElementById("nav3");
let nomeProg = document.getElementById("prog");

function mudaBotaoNav1() {
  botaoNav1.style.color = "rgba(39, 39, 39)";
  botaoNav2.style.color = "rgb(250,50,77)";
  botaoNav3.style.color = "rgb(250,50,77)";
}

function mudaBotaoNav2() {
  botaoNav2.style.color = "rgba(39, 39, 39)";
  botaoNav1.style.color = "rgb(250,50,77)";
  botaoNav3.style.color = "rgb(250,50,77)";
}

function mudaBotaoNav3() {
  botaoNav3.style.color = "rgba(39, 39, 39)";
  botaoNav2.style.color = "rgb(250,50,77)";
  botaoNav1.style.color = "rgb(250,50,77)";
}

let i = 0;
let nome = [];
nome[0] = 'front-end';
nome[1] = 'JavaScript'
nome[2] = 'CSS';
nome[3] = 'HTML';
nome[4] = 'Design';


function mudaNome() {
    
    nomeProg.innerHTML = nome[i];

    i += 1;

    if (i > 4) {
        i = 0;
      }

}

function Temporizador(initiate) {
    if (initiate !== true) {
      mudaNome();
    }
    setTimeout(Temporizador, 1000);
  }
  
  Temporizador(true);


  $('nav a').click(function(){
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);

    
  });

  