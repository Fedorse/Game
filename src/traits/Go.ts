import { Trait } from "../Entity";


export default class Go extends Trait {
    constructor() {
        super('go');

        this.dirX = 0;
        this.dirY = 0
        this.speed = 30000
    }

    update(entity, deltaTime) {
        entity.vel.x = this.speed * this.dirX * deltaTime

        entity.vel.y = this.speed * this.dirY * deltaTime
    }
}
