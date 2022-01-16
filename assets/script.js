let 
  canvas = document.getElementById("snake"),
  button1 = document.getElementById("button1"),
  button2 = document.getElementById("button2"),
  context = canvas.getContext("2d"),
  box = 32,
  score = 0
  snake = [],
  direction = "right";
  food = {
    x: Math.floor(Math.random() * 16) * box,
    y: Math.floor(Math.random() * 16) * box
  }

snake[0] = {
  x: 8 * box,
  y: 8 * box
}

button2.addEventListener("click", function() {
    
  location.reload()})

function start(){


function criarBG (){
  context.fillStyle = "lightgreen";
  context.fillRect (0, 0, 32 * box, 32 * box);
}

function criarSnake(){
  for(let i = 0; i<snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

function drawFood (){
  context.fillStyle = "orange";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener(`keydown`, update);

function update (event){
  if (event.keyCode == 37 && direction != "right") direction = "left";
  if (event.keyCode == 38 && direction != "down") direction = "up";
  if (event.keyCode == 39 && direction != "left") direction = "right";
  if (event.keyCode == 40 && direction != "up") direction = "down";
}


function gameStart() {

  /* No momento o jogo está:

  [ ]com o limite fechado (se tocar nas bordas o jogo acaba). 
  [x]com o limite em loop (saindo de um lado e entrando pelo outro inverso)

  Se quiser fechar ou abrir copie um dos códigos abaixo dentro do limite de borda e coloque o código que está lá dentro de um comentário.*/

  /* BORDA ABERTA:
  if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
  if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
  if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
  if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;
  */
  
  /* BORDA FECHADA
  if (snake[0].x > 15 * box && direction == "right"){
    clearInterval(jogo);
    alert('Game Over :(')
  }
  if (snake[0].x < 0 && direction == "left"){
    clearInterval(jogo);
    alert('Game Over :(')
  }
  if (snake[0].y > 15 * box && direction == "down"){
    clearInterval(jogo);
    alert('Game Over :(')
  }
  if (snake[0].y < 0 && direction == "up"){
    clearInterval(jogo);
    alert('Game Over :(')
  }
  */
  
  // começo do limite de borda

  if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
  if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
  if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
  if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;
  
  // fim do limite de borda
  
  criarBG();
  criarSnake();
  drawFood()

  let
    snakeX = snake[0].x,
    snakeY = snake[0].y;

  if(direction == "right") snakeX += box;
  if(direction == "left") snakeX -= box;
  if(direction == "up") snakeY-= box;
  if(direction == "down") snakeY += box;

  if (snakeX != food.x || snakeY != food.y){
    snake.pop();
  }
  else {
    score = score + 1;
    food.x = Math.floor(Math.random() * 15+1) * box;
    food.y = Math.floor(Math.random() * 15+1) * box;
    document.getElementById("scoreDisplay").innerHTML = score;
    }
  
    
  let newHead = {
    x: snakeX,
    y: snakeY  
  }

  snake.unshift (newHead);

  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y){
      clearInterval(jogo);
      alert('Game Over - To try again click on "Reload"')
    }
  }

}


let jogo = setInterval (gameStart, 100);

}