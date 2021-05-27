var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora} horas.`)

if (hora <= 5) {
    console.log('Boa madrugada!')
} else if (hora <= 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Bom tarde!')
} else if (hora <= 24) {
    console.log('Bom noite!')
}