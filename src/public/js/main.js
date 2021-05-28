//Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

const APAGADO = "🔴 Apagado"
const ENCENDIDO = "🟢 Encendido"

let iosocket = io()

iosocket.on('hola', hola => {
    console.log(hola)
})

const sendData = () => {
    iosocket.emit('enc', 'Hola mundo')
}

const recur = () => {
    sendData()
    // console.log('hola')
    setTimeout(recur, 1000)
}

recur()