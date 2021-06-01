const five = require('johnny-five')
const socketIO = require('socket.io')

const init = server => {
    // const board = new five.Board
    const io = new socketIO.Server(server)

    // board.on('ready', () => {
    //     const relay1 = new five.Relay(2)
    //     const relay2 = new five.Relay(3)
    //     const relay3 = new five.Relay(4)
    //     const relay4 = new five.Relay(5)
    //     const contacto1 = new five.Relay(6)
    //     const contacto2 = new five.Relay(7)

    //     contacto1.close()
    //     contacto2.close()
    //     relay1.open()
    //     relay2.open()


    //     // sendData()
    // })

    io.on('connection', socket => {
        //Principal
        socket.on('focoPE', data => {
            console.log(data)
            // relay1.close()
        })

        socket.on('focoPA', data => {
            console.log(data)
            // relay1.open()
        })

        socket.on('venPE', data => {
            console.log(data)
            // contacto1.open()
        })

        socket.on('venPA', data => {
            console.log(data)
            // contacto1.close()
        })

        //Hijo
        socket.on('focoSE', data => {
            console.log(data)
            // relay2.close()
        })

        socket.on('focoSA', data => {
            console.log(data)
            // relay2.open()
        })

        socket.on('conSE', data => {
            console.log(data)
        })

        socket.on('conSA', data => {
            console.log(data)
        })


        //Extra
        socket.on('focoExE', data => {
            console.log(data)
        })

        socket.on('focoExA', data => {
            console.log(data)
        })

        //Sala
        
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