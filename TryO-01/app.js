async function catchRain() {
    const y = await fetch('https://media.nonktube.com/videos/tmb_2/67689/default.jpg')
    const blobber = await y.blob() 
    document.getElementById('newID02').src = URL.createObjectURL(blobber)
}
