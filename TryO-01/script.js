fetch('https://cdn.waifu.im/6618.jpeg').then(res => {
    console.log(res)
    return res.blob()
}).then(res => {
    console.log(res)
    document.getElementById('rainbow').src = URL.createObjectURL(res);
})

fetch('https://cdn.waifu.im/4828.jpeg').then(roseB => {
    console.log(roseB)
    return roseB.blob()
}).then(roseB => {
    console.log(roseB)
    document.getElementById('rose_bud').src = URL.createObjectURL(roseB);
})

fetch('https://cdn.waifu.im/4329.jpeg').then(ecchi => {
    return ecchi.blob()
})