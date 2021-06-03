
function carregar() {
    var mostrarHora = document.querySelector('#mostrarHora')
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    if (minuto < 9) {
        minuto = `0${minuto}`
    }
    
    mostrarHora.innerHTML += `${hora}:${minuto}`

    if (hora >= 0 && hora < 12) {
        document.body.style.backgroundColor = '#ECEABE'
        msg.innerHTML += 'Bom dia!'
        img.src = 'manha.png'
    } else if (hora >= 12 && hora < 19) {
        document.body.style.backgroundColor = '#BE9D6D'
        msg.innerHTML = 'Boa tarde!'
        img.src = 'tarde.png'
    } else {
        document.body.style.backgroundColor = '#1E3155'
        msg.innerHTML += 'Boa noite!'
        img.src = 'noite.png'
    }
}