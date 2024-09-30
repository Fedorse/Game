import { loadBackgroundSprites } from "./sprites"
import Level from "./level"
import { createBackgroundLayer, createSpriteLayer } from "./layers"

export const loadImage = (url: string) => {
    return new Promise((resolve) => {
      const image = new Image()
      image.addEventListener('load', ()=>{
       resolve(image)
      })
      image.src = url
    })
   }
   

   export const createTiles = (level, backgrounds) => {
      backgrounds.forEach((background) => {
        background.ranges.forEach(([x1,x2,y1,y2])=> {
          for(let x = x1; x < x2; x++) {
            for(let y = y1; y < y2; y++) {
              level.tiles.set(x, y, {
                name: background.tile
              })
            }
          } 
        })
      })
   }

   export const loadLevel = (name) => {
    return Promise.all([ 
      fetch(`/map/${name}.json`)
          .then(resp => resp.json()),

          loadBackgroundSprites()

    ]).then(([levelSpec, backgroundSprites]) => {
          const level = new Level()

          createTiles(level, levelSpec.backgrounds)

          const backgroundLayer = createBackgroundLayer(level, backgroundSprites)
          level.comp.layers.push(backgroundLayer)

          const spriteLayer = createSpriteLayer(level.entities)
          level.comp.layers.push(spriteLayer)

          return level
    })
   }
