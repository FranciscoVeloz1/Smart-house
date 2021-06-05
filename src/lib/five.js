const five = require('johnny-five')
const socketIO = require('socket.io')
const { luz, temp } = require('./sensor')
let celda, temperatura, gas;

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

    //     celda = new five.Sensor(luz);
    //     temperatura = new five.Thermometer(temp);
    //     gas = new five.Sensor("A5");

    //     contacto1.close()
    //     contacto2.close()
    //     relay1.open()
    //     relay2.open()

    //     sendData()
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
        socket.on('focoSaE', data => {
            console.log(data)
        })

        socket.on('focoSaA', data => {
            console.log(data)
        })

        //Banio
        socket.on('onBath', data => {
            console.log(data)
        })

        socket.on('offBath', data => {
            console.log(data)
        })

        //Jardin
        socket.on('onJar', data => {
            console.log(data)
        })

        socket.on('offJar', data => {
            console.log(data)
        })
    })

    const sendData = () => {
        sendLuz()
        sendTemp()
        sendGas()
        setTimeout(sendData, 1000)
    }

    const sendLuz = () => {
        io.emit('luz', celda.value)
    }

    const sendTemp = () => {
        const { celsius } = temperatura
        io.emit('temp', celsius)
    }

    const sendGas = () => {
        io.emit('gas', gas.value)
    }
}



module.exports = init;