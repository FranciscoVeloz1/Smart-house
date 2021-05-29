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

let socket = io()

socket.on('hola', hola => {
    console.log(hola)
})

const sendData = () => {
    socket.emit('enc', 'Hola mundo')
}

sendData()