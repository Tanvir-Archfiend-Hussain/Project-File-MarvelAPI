fetch('https://media.gettyimages.com/id/1049527544/photo/side-view-of-pregnant-woman-standing-by-potted-plants-in-yard.jpg?s=612x612&w=gi&k=20&c=0y5TX3tm7nDm_tUBRhjqydc62iVsdrO4TDvrGp-Gvv0=')
.then(c => {
    return c.blob()
}).then(c => {
    document.getElementById('anotherPregger').src = URL.createObjectURL(c)
})

fetch('https://cdn.waifu.im/2262.jpeg').then(ass => {
    return ass.blob()
}).then(ass => {
    document.getElementById('assID').src = URL.createObjectURL(ass)
})
