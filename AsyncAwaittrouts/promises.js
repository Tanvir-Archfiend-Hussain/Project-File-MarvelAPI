fetch('https://media.gettyimages.com/id/1049527544/photo/side-view-of-pregnant-woman-standing-by-potted-plants-in-yard.jpg?s=612x612&w=gi&k=20&c=0y5TX3tm7nDm_tUBRhjqydc62iVsdrO4TDvrGp-Gvv0=')
.then(c => {
    return c.blob()
}).then(c => {
    document.getElementById('anotherPregger').src = URL.createObjectURL(c)
})

/****************************************************** */
/******************ASYNCH AWAIT************************ */
/****************************************************** */

async function pregger2222() {
    const x = await fetch('https://www.filmibeat.com/img/popcorn/profile_photos/pragathi-rishab-shetty-20221006101431-52674.jpg')
    const y = await x.blob()
    document.getElementById('preggerID2222').src = URL.createObjectURL(y)
}  

function pregger01() {
fetch('https://static.langimg.com/photo/74697393/74697393.jpg')
.then(x => {
    return x.blob()
}).then(x => {
    document.getElementById('preggerID01').src = URL.createObjectURL(x)
})
}
