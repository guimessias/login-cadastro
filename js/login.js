//adicionando manualmente a função no onclick do html 

const paiContVar = document.getElementById('paiContainer')
const moverDinamico = () => {
    paiContVar.classList.toggle('trocar')
}

// método toggle para gerenciar classes no CSS se tiver a class ele remove se nao tiver ele add


// sme utilizar esse método seria preciso fazer duas funções utilizando o .add e o .remove

// const moverDinamico = () => {
//     paiContVar.classList.add('trocar')
// }

// const voltarDinamico = () => {
//     paiContVar.classList.remove('trocar')
// }

//adicionando através do js um evento que vai executar uma função
const abrirLogin = document.getElementById('abrirLogin')
const abrirCadatro = document.getElementById('abrirCadatro')

abrirCadatro.addEventListener ("click", moverDinamico)
abrirLogin.addEventListener ("click", moverDinamico)
