/** 
fetch("https://api.waifu.im/ass")
  .then(res => res.json())
  .then(data => console.log(data))
*/
/**  

  fetch('https://reqres.in/api/users')
  .then(res => res.json())
  .then(data => console.log(data))
  
  */

/*fetch("https://api.waifu.im/fav/12")
.then(x=> {
  return x.blob()
})
.then(blo => {
    document.getElementById('rainbow').src = URL.createObjectURL(blo);
})*/

fetch('https://api.waifu.im/fav', {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      "x-rapidapi-host": "any-anime.p.rapidapi.com"
    }
  })
  .then((response) => response.blob())
  .then((blob) => {
    const imageUrl = URL.createObjectURL(blob);
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    const container = document.getElementById("image-container");
    container.appendChild(imageElement);
  });
}