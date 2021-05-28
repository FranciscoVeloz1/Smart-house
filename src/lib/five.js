const five = require('johnny-five')
const socketIO = require('socket.io')

// class MintelBoard {
//     constructor(server) {
//         this.board = new five.Board()
//         this.io = new socketIO.Server(server)
//     }

//     SendData() {
//         this.SendHola
//         setTimeout(this.SendData, 1000)
//     }

//     SendHola() {
//         const hola = "hola mundo"
//         console.log(hola)
//         this.io.emit('hola', hola)
//     }

//     InitBoard() {
//         this.board.on('ready', () => {
//             const relay = new five.Relay(5)
//             const contacto1 = new five.Relay(7)
//             const contacto2 = new five.Relay(6)

//             contacto1.close()
//             contacto2.close()
//             relay.open()
//         })
//     }
// }

const init = server => {
    const board = new five.Board()
    const io = new socketIO.Server(server)

    board.on('ready', () => {
        const relay = new five.Relay(5)
        const contacto1 = new five.Relay(7)
        const contacto2 = new five.Relay(6)

        contacto1.close()
        contacto2.close()
        relay.open()

        io.on('enc', data => {
            console.log(data)
        })

        sendData()
    })

    const sendData = () => {
        sendHola()
        setTimeout(sendData, 1000)
    }

    const sendHola = () => {
        io.emit('hola', 'Hola mundo')
    }
}



module.exports = init;