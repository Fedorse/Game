import KeyBoard from "./KeyBoardState";


export const setupKyeboard = (entity) => {
    const input = new KeyBoard()

    input.addMapping('ArrowRight', keyState => {
        entity.go.dirX = keyState 
    })
    input.addMapping('ArrowLeft', keyState => {
        entity.go.dirX = -keyState
    })
    input.addMapping('ArrowUp', keyState => {
        entity.go.dirY = -keyState
    })
    input.addMapping('ArrowDown', keyState => {
        entity.go.dirY = keyState
    })
    return input
}




