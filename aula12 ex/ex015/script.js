function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('ano')
    var result = document.querySelector('#result')

    if (formAno.value.length == 0 || formAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(formAno.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', 'imagens/bebe_m.png')
            } else if (idade < 21 ) {
                img.setAttribute('src', 'imagens/jovem_m.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/adulto_m.png')
            } else {
                img.setAttribute('src', 'imagens/idoso_m.png')
            }   
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'imagens/bebe_f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem_f.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/adulto_f.png')
            } else {
                img.setAttribute('src', 'imagens/idoso_f.png')
            }            
        }
        result.style.textAlign = 'center'
        result.innerHTML = `<h4>Detectamos ${genero} com ${idade} anos.</h4>`
        result.appendChild(img)
    }
}