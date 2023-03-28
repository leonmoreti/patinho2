function trocarImagemETrocarVideo() {
    document.getElementById("botao").src = "./img/botao-apertado.png";
    document.getElementById("meu-video").src = "./video/Super.mp4";
    document.getElementById("meu-video").loop = false;
    document.getElementById("meu-video").load();
    document.getElementById("meu-video").play();
  }
  
