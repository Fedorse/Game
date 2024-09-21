import { loadImage, loadMap } from "./loaders";
import SpiteSheet from "./spiteSheet";


const drawBackground = (background, context, sprites) => {
  background.ranges.forEach(([x1, x2, y1, y2])=>{
    for(let x = x1; x < x2; x++){
      for(let y = y1; y < y2; y++){
        sprites.drawTile(background.tile, context, x, y)
      }
    }
  })
}


const canvas = document.getElementById("screen") as HTMLCanvasElement
const context = canvas.getContext("2d")


loadImage('/img/tiles.png')
    .then(image =>{
      const sprites = new SpiteSheet(image, 16 ,16 )
      sprites.define('ground', 2, 6)
      sprites.define('flowers',0 , 0)

      loadMap('map')
        .then(map => {
          map.backgrounds.forEach(background => {
            drawBackground(background, context, sprites)
          })
        })

    })