import Entity from "./Entity";
import Jump from "./traits/Jump";
import Velocity from "./traits/Velocity";

import { loadPlayerSprite } from "./sprites";

 
export const createPlayer = () => {
    return loadPlayerSprite()
        .then(sprite => {
            const player = new Entity()

            player.addTrait(new Velocity());
            player.addTrait(new Jump());

            player.draw = function drawPlayer(context) {
                sprite.draw('player', context, this.pos.x, this.pos.y)
            }

            return player
        })
}