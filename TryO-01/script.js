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
}).then(ecchi => {
    document.getElementById('ecchi_imgID').src = URL.createObjectURL(ecchi)
})

fetch('https://cdn.waifu.im/4899.jpeg').then(ero => {
    return ero.blob()
}).then(ero => {
    document.getElementById('ero_img_id').src = URL.createObjectURL(ero)
})

fetch('https://cdn.waifu.im/1698.jpeg').then(paizur => {
    return paizur.blob()
}).then(paizur => {
    document.getElementById('paizurID').src = URL.createObjectURL(paizur)
})

fetch('https://cdn.waifu.im/4835.png').then(oral => {
    return oral.blob()
}).then(oral => {
    document.getElementById('oralID').src = URL.createObjectURL(oral)
})

fetch('https://cdn.waifu.im/5984.jpeg').then(milf => {
    return milf.blob()
}).then(milf => {
    document.getElementById('milfID').src = URL.createObjectURL(milf)
})

fetch('https://cdn.waifu.im/4840.jpeg').then(hentai => {
    return hentai.blob()
}).then(hentai => {
    document.getElementById('hentai').src = URL.createObjectURL(hentai)
})

fetch('https://cdn.waifu.im/2262.jpeg').then(ass => {
    return ass.blob()
}).then(ass => {
    document.getElementById('assID').src = URL.createObjectURL(ass)
})

fetch('https://cdn.waifu.im/3250.jpeg').then(waifu => {
    return waifu.blob()
}).then(waifu => {
    document.getElementById('waifu').src = URL.createObjectURL(waifu)
})

function clicker() {
   fetch('https://cdn.waifu.im/3250.jpeg').then(waifu => {
    return waifu.blob()
}).then(waifu => {
    document.getElementById('clickID').src = URL.createObjectURL(waifu)
}) 
}

fetch('https://lastfm.freetls.fastly.net/i/u/ar0/058fc4006ebb4ad68b35366546e1acaa.jpg').then(newXD => {
    return newXD.blob()
}).then(newXD => {
    document.getElementById('newID').src = URL.createObjectURL(newXD)
})