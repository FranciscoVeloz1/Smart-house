//Scroll Menu
document.querySelector("#sidebarCollapse").addEventListener("click", () => {
    document.querySelector("#sidebar").classList.toggle("active");
    document.querySelector("#content").classList.toggle("active");
});

const APAGADO = "🔴 Apagado"
const ENCENDIDO = "🟢 Encendido"

const iosocket = io();

iosocket.on('hello', item => {
    console.log(item)
})