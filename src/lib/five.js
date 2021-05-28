const five = require('johnny-five')
const socketIO = require('socket.io')

class MintelBoard {
    constructor(server) {
        this.board = new five.Board()
        this.io = new socketIO.Server(server)
    }

    InitBoard() {
        this.board.on('ready', () => {
            const relay = new five.Relay(5)
            const contacto1 = new five.Relay(7)
            const contacto2 = new five.Relay(6)

            contacto1.close()
            contacto2.close()
            relay.open()
        })
    }
}

module.exports = MintelBoard;