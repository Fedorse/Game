export const loadImage = (url: string) => {
    return new Promise((resolve) => {
      const image = new Image()
      image.addEventListener('load', ()=>{
       resolve(image)
      })
      image.src = url
    })
   }
   
 export  const loadMap = (name: string) => {
     return fetch(`/map/${name}.json`)
       .then(responce => responce.json())
   }