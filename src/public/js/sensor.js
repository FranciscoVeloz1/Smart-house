socket.on('luz', data => {
    if (data > 10 && data < 200) {
        document.querySelector('#luz').innerHTML = '🟡 Nivel medio de luz'
    } else if (data < 10) {
        document.querySelector('#luz').innerHTML = '🔴 Nivel bajo de luz'
    } else {
        document.querySelector('#luz').innerHTML = '🟢 Nivel alto de luz'
    }
})

socket.on('temp', data => {
    if (data > 27 && data < 32) {
        document.querySelector('#temp').innerHTML = `${data}°C`
    }
})

socket.on('gas', data => {
    if (data < 130) {
        document.querySelector('#gas').innerHTML = "🟢 Nivel bajo de gas"
    } else {
        document.querySelector('#gas').innerHTML = "🔴 Nivel alto de gas";
    }
})