var invisivel;
var trex ,trex_running;
var chao;
var animaçaoChao;
var nuvem;
var imagemNuvem;
var obs1, obs2, obs3, obs4, obs5, obs6;
var pontos = 0;

//função de pré-carregamento de imagens e sons
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  imagemNuvem=loadImage("cloud.png");
  animaçaoChao = loadImage("ground2.png");
  obs1 = loadImage("obstacle1.png");
  obs2 = loadImage("obstacle2.png");
  obs3 = loadImage("obstacle3.png");
  obs4 = loadImage("obstacle4.png");
  obs5 = loadImage("obstacle5.png");
  obs6 = loadImage("obstacle6.png");


}

function setup(){
  //criaTela(largura,altura);
  createCanvas(600,200);
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  //adicionar a animação no sprite do trex
  trex.addAnimation("correndo", trex_running);
  chao = createSprite(300,190,600,10);
  invisivel = createSprite(300,195,600,10);
  invisivel.visible=false;
  chao.addImage("solo",animaçaoChao);
  //diminuir o tamanho do Trex
  trex.scale = 0.5;
}

//desenho e animação
function draw(){

  //cor de funda da tela
  background("white");

  //texto da pontuação
  text("Pontuação: " + pontos,500,20);


  //fazer o trex pular
  if(keyDown("space")&& trex.y>166.5){
    trex.velocityY = -10;
  }

  //gravidade
  trex.velocityY += 0.5;
 trex.collide (invisivel);
  chao.velocityX =-3;
  //console.log(frameCount)
  if(chao.x<0) {
    chao.x=chao.width/2;
  }
  nuvens()
    //desenhar os sprites na tela
  drawSprites();

}
 function nuvens(){
   if(frameCount%60===0){
  nuvem=createSprite(600,100,40,10);
  nuvem.velocityX=-3;
  nuvem.addImage(imagemNuvem);
  nuvem.y=Math.round(random(80,120));
  nuvem.lifetime = 250;

  //console.log(nuvem.depth);
  //console.log(trex.depth);

  trex.depth = nuvem.depth + 1;



 } }

 function cactos(){
   if(frameCount%60===0){
    var cacto = createSprite(400,165,10,40);
    cacto.velocityX = -6;
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1: cacto.addImage(obs1);
              break;
    }
   }
 }