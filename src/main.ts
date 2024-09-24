import Timer from "./Timer";
import Compositor from "./Compositor";
import { loadMap } from "./loaders";
import { loadBackgroundSprites } from "./sprites";
import { createPlayer } from "./entities";
import { createBackgroundLayer, createSpriteLayer } from "./layers";



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

  const gravity = 30
  player.pos.set(64,180)
  player.vel.set(200,-200)


  const spriteLayer = createSpriteLayer(player)
  comp.layers.push(spriteLayer)

  const timer = new Timer(1/60)
   timer.update = function update(deltaTime){
    comp.draw(context)
    player.update(deltaTime)
    player.vel.y += gravity

  }
  timer.start()
})



