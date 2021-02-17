const cart = {
    isim: "Yasin",
    bakiye: 50,
}

function biletOku() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log("Kart Okunuyor.."))

        })
    }, 2000)
}

function bilgiGoster(cart) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cart) {
                console.log(`Bakiyeniz: ${cart.bakiye}`)
                resolve()
            } else {
                console.log("kart bulunamadi")
                reject()
            }



        }, 1000)
    })
}

function paraCek(cart) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (cart) {
                cart.bakiye -= 2
                console.log(`Kalan Bakiyeniz: ${cart.bakiye}`)
                resolve()
            } else {
                reject(console.log("kart bulunamadi"))
            }
        }, 500)
    })


}

biletOku()
    .then(() => bilgiGoster(cart))
    .then(() => paraCek(cart))
    .catch(err => {
        console.log(err)
    })
