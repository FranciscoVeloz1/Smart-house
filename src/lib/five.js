const five = require('johnny-five')
const socketIO = require('socket.io')

const init = server => {
    // const board = new five.Board()
    const io = new socketIO.Server(server)

    // board.on('ready', () => {
    //     const relay = new five.Relay(5)
    //     const contacto1 = new five.Relay(7)
    //     const contacto2 = new five.Relay(6)

    //     contacto1.close()
    //     contacto2.close()
    //     relay.open()

    //     io.on('connection', socket => {
    //         socket.on('enc', data => {
    //             if (data == 'Hola mundo') {
    //                 console.log(data)
    //                 relay.close()
    //             }
    //         })
    //     })

    //     // sendData()
    // })

    const sendData = () => {
        sendHola()
        setTimeout(sendData, 1000)
    }

    const sendHola = () => {
        io.emit('hola', 'Hola mundo')
    }
}



module.exports = init;