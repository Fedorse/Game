export const drawBackground = (background, context, sprites) => {
    background.ranges.forEach(([x1, x2, y1, y2])=>{
      for(let x = x1; x < x2; x++){
        for(let y = y1; y < y2; y++){
          sprites.drawTile(background.tile, context, x, y)
        }
      }
    })
  }

  export const createBackgroundLayer = (backgrounds, sprites) => {
        const buffer = document.createElement('canvas')
        buffer.width = 600;
        buffer.height = 600;

        backgrounds.forEach(background => {
            drawBackground(background, buffer.getContext('2d'), sprites)
        })

        return function drawBackgroundLayer(context) {
            context.drawImage(buffer, 0, 0)
        }

  }
 

export const createSpriteLayer = (entity)=> {
    return function drawSpriteLayer(context) {
        entity.draw(context)
    }
  }