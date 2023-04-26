console.log("about fetch a RAIN bow")
fetch('rainbow.jpg')
.then(response => {
    console.log(response)
    return response.blob()
})
.then(blo => {
    console.log(blo)
    document.getElementById('rainbow').src = URL.createObjectURL(blo);
})