fetch('https://cdn.waifu.im/7682.jpg').then(res => {
    console.log(res)
    return res.blob()
}).then(res => {
    console.log(res)
    document.getElementById('rainbow').src = URL.createObjectURL(res);
})