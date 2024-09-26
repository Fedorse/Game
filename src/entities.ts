import Entity from "./Entity";
import Velocity from "./traits/Velocity";
import Go from "./traits/Go";
import { loadPlayerSprite } from "./sprites";

 
export const createPlayer = () => {
    return loadPlayerSprite()
        .then(sprite => {
            const player = new Entity()
        // player.addTrait(new Velocity());
            player.size.set(14,16)
            player.addTrait(new Go());

            player.draw = function drawPlayer(context) {
                sprite.draw('player', context, this.pos.x, this.pos.y)
            }

            return player
        })
}