import Timer from "./Timer";
import { loadLevel } from "./loaders";
import { createPlayer } from "./entities";
import {  createCollisonLayer} from "./layers";


import { setupKyeboard } from "./input";

const canvas = document.getElementById("screen") 
const context = canvas.getContext("2d")

Promise.all([
  createPlayer(),
  loadLevel('map')
])
.then(([player, map ])=> {
  player.pos.set(100,180)

  map.comp.layers.push(createCollisonLayer(map))
  
  map.entities.add(player)


  const input = setupKyeboard(player)
  input.listenTo(window);

	['mousedown', 'mousemove'].forEach((eventName) => {
		canvas.addEventListener(eventName, (event) => {
			if (event.buttons === 1) {
				player.vel.set(0, 0);
				player.pos.set(event.offsetX, event.offsetY);
			}
		});
	});

  const timer = new Timer(1/60)
   timer.update = function update(deltaTime){
    map.update(deltaTime)
    map.comp.draw(context)


    

  }
  timer.start()
})



