const cart = {
    isim: "Yasin",
    bakiye: 50,
}

function biletOku(callback) {
    setTimeout(() => {
        console.log("Kart Okunuyor..")
        callback()
    }, 2000)
}

function bilgiGoster(cart, callback) {
    setTimeout(() => {
        console.log(`Bakiyeniz: ${cart.bakiye}`)
        callback ? callback() : "";
    }, 1000)
}

function paraCek(cart, callback) {
    setTimeout(() => {
        cart.bakiye -= 2
        console.log(`kalan Bakiyeniz: ${cart.bakiye}`)
        callback ? callback() : "";


    }, 500)
}

biletOku(() => {
    bilgiGoster(cart, () => {
        paraCek(cart)

    })
})
