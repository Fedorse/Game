import Timer from "./Timer";
import Compositor from "./Compositor";
import { loadMap } from "./loaders";
import { loadBackgroundSprites } from "./sprites";
import { createPlayer } from "./entities";
import { createBackgroundLayer, createSpriteLayer } from "./layers";

import KeyBoard from "./KeyBoardState";

const canvas = document.getElementById("screen") as HTMLCanvasElement
const context = canvas.getContext("2d")



Promise.all([
  createPlayer(),
  loadBackgroundSprites(),  
  loadMap('map')
])
.then(([player,backgroundSpites, map ])=> {

  const comp = new Compositor()

  const backgroundLayer = createBackgroundLayer(map.backgrounds, backgroundSpites)
  comp.layers.push(backgroundLayer)

  const gravity = 0
  player.pos.set(64,180)

  const SPACE = 32

  const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;
  const input = new KeyBoard()
// Добавляем обработку для стрелок
input.addMapping(LEFT, keyState => {
  player.vel.x = keyState ? -200 : 0;
});

input.addMapping(RIGHT, keyState => {
  player.vel.x = keyState ? 200 : 0;
});

input.addMapping(UP, keyState => {
  player.vel.y = keyState ? -200 : 0;
});

input.addMapping(DOWN, keyState => {
  player.vel.y = keyState ? 200 : 0;
});

// input.listenTo(window);
//   input.addMapping(SPACE, keyState=>{
//     if(keyState) {
//       player.jump.start()
//     } else {
//       player.jump.cancel()
//     }
//   })
  input.listenTo(window)

  const spriteLayer = createSpriteLayer(player)
  comp.layers.push(spriteLayer)

  const timer = new Timer(1/60)
   timer.update = function update(deltaTime){
     player.update(deltaTime)

    comp.draw(context)
    

    player.vel.y += gravity * deltaTime

  }
  timer.start()
})



