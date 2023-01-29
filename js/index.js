
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

let imagenRoad
let imagenCar

function startGame() {
    imagenRoad = document.createElement("img");
    imagenRoad.src = "images/road.png"
    imagenRoad.addEventListener("load", ()=> {
      ctx.drawImage(imagenRoad, 0, 0, 500, 700)
    })
    
    imagenCar = document.createElement("img");
    imagenCar.src = "images/car.png"
    imagenCar.addEventListener("load", () => {
       ctx.drawImage(imagenCar, 225, 600, 50, 90)
    })

    setInterval (() => {
      update();
    }, 16);
      }
  
class car {
  constructor(x, velocidadx){
  this.x = x;
  this.y= 600; 
  this.velocidadx = velocidadx;
         }
        print() {
          ctx.drawImage(imagenCar, this.x, 600, 50, 90)
      }
      }

let newCar = new car (225, 40)
update = () => {
        ctx.clearRect(0, 0, 500, 700)
        ctx.drawImage(imagenRoad, 0, 0, 500, 700)
        newCar.print();
        ctx.FillRect(block.x, block.y, block.width, block.heigth)

      }
  
  
      document.getElementsByTagName("body")[0].addEventListener ("keydown", (event)=> {
        switch(event.key) {
          case "ArrowLeft":
          newCar.x -= newCar.velocidadx;
          if(newCar.x < 65) newCar.x = 65;
            break;
          case "ArrowRight":
            newCar.x += newCar.velocidadx;
            if (newCar.x >= 385) newCar.x = 385
            break;
          }})
  
class Component {
   constructor(x) {
   this.width = Math.random()*(canvas.width/2);
   this.height = 30;
   this.color = "red";
   this.x = x;
   this.y = 0;
}
  print() {
    ctx.fillRect(this.x, this.y, this.width, this.heigth)
  }
}

let obstacles = [];
let i = 0;
setInterval (() => {
  i++
  if(i>300) {
  i = 0;
  let obst = new Component ()
  obst.push(obstacles)}
}, 20)

let block
for (let i = 0; i< obstacles.length; i++) {
 block = Math.floor(Math.random()*obstacles.length)
} 
