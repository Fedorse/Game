import SpiteSheet from "./spiteSheet";
 import { loadImage } from "./loaders";


 export const loadPlayerSprite = () => {
    return loadImage('/img/characters.gif')
        .then((image) => {
            const sprites = new SpiteSheet(image, 16 ,16 )
            sprites.define('player',276, 44, 16, 16)
            return sprites
        })
 }

 export const loadBackgroundSprites = () => {
    return loadImage('/img/tiles.png')
        .then((image) => {
            const sprites = new SpiteSheet(image, 16, 16)
            sprites.defineTile('ground', 2, 6)
            sprites.defineTile('flowers', 0, 0)
            return sprites
        })
 }