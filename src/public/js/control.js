let ON = "🟢 Encendido"
let OFF = "🔴 Apagado"

let control = {
    encender: (id, id2, ev, data) => {
        document.getElementById(id).addEventListener('click', () => {
            document.getElementById(id2).innerHTML = ON
            socket.emit(ev, data)
        })
    },
    
    apagar: (id, id2, ev, data) => {
        document.getElementById(id).addEventListener('click', () => {
            document.getElementById(id2).innerHTML = OFF
            socket.emit(ev, data)
        })
    }
}

export default control