import Timer from "./Timer";
import { loadLevel } from "./loaders";
import { createPlayer } from "./entities";
import {  createCollisonLayer, createCameraLayer} from "./layers";
import Camera from "./Camera";


import { setupKyeboard } from "./input";
import { setupmouseControl } from "./setupmouseControl";

const canvas = document.getElementById("screen") 
const context = canvas.getContext("2d")

Promise.all([
  createPlayer(),
  loadLevel('map')
])
.then(([player, level ])=> {
  const camera = new Camera()
  window.camera = camera
  player.pos.set(100,180)



  level.comp.layers.push(createCollisonLayer(level), createCameraLayer(camera))
  level.entities.add(player)


console.log(level)


  const input = setupKyeboard(player)
  input.listenTo(window);

  setupmouseControl(canvas, player, camera)

  const timer = new Timer(1/60)
   timer.update = function update(deltaTime){
    level.update(deltaTime)
    level.comp.draw(context,camera)


    

  }
  timer.start()
})



